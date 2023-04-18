class Store {

    state = {
        loading:false,
    };

    subscribes = [];

    actions = [];

    storageItems = [];

    constructor(){

        this.loadFromStorage();

        if(typeof window !== "undefined" && window.addEventListener){
            window.addEventListener('storage',()=>{
                this.loadFromStorage();
            })
        }

    }

    getState = ()=>{
        return this.state;
    }

    setState = (data,payload=null)=>{

        if(typeof data === 'string'){
            this.setStateFromAction(data,payload);
            return;
        }else if(typeof data !== 'object'){
            return false;
        }
        
        this.state = {
            ...this.state,
            ...data
        }
       
        this.saveOnStorage();

        this.subscribes.forEach((m,i)=>{
            try{
                const newValue = m.selector(this.state);
                const oldValue =  m.value;
                
                if(JSON.stringify(newValue) !== JSON.stringify(oldValue)){
                    m.setState(newValue);
                    m.value = newValue;
                }

            }catch(err){
                return false;
            }
            
        });

    }

    setStateFromAction(actionType,payload=null){
        
        if(typeof actionType !== 'string'){
            return false;
        }
        if(payload && typeof payload !== 'object'){
            return false;
        }

        const action = this.actions.find(acc=>acc.type===actionType);
        if(!action) return false;
        this.setState(action.reducer(this.state,payload));

    }

    /* subscribes */

    subscribe(setState,selector){
        
        if(typeof setState !== 'function' || typeof selector !== 'function'){
            return false;
        }

        const random = Math.ceil(Math.random() * 100000000);
        const subsId = Date.now().toString() + random;
        
        this.subscribes.push({
            subsId , 
            selector , 
            setState , 
            value:selector(this.getState())||null 
        });
        return subsId;
    }

    unsubscribe(subsId){
        if(typeof subsId !== 'string'){
            return false;
        }
        this.subscribes = this.subscribes.filter(sub=>subsId !== sub.subsId);
    }

    /* action controller */

    addAction(type,reducer){
        if(typeof type !== 'string' || typeof reducer !== 'function'){
            return false;
        }
        this.actions.push({
            type,
            reducer
        });
    }

    /* localstorage controller */
    
    addStorageItems(list){
        if(!Array.isArray(list)){
            return false;
        }
        this.storageItems = [...list];
        this.loadFromStorage();
    }

    saveOnStorage(){
        const keys = Object.keys(this.state);
        keys.forEach(key=>{
            if(this.storageItems.includes(key)){
                localStorage.setItem(`saza-state:${key}`,JSON.stringify(this.state[key]));
            }
        })
    }

    loadFromStorage(){
        const keys = this.storageItems;
        keys.forEach(key=>{
            const value = localStorage.getItem(`saza-state:${key}`);
            if(value){
                const data = {};
                try{
                    const parsedValue = JSON.parse(value);
                    data[key] = parsedValue;
                    this.setState(data);
                }catch(err){
                    data[key] = value;
                    this.setState(data);
                }
            }
        })
    }

}

const store = new Store();

export default store;