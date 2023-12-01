import sortObject from "./sortObject";

function storageListner(store){
    const {getState,setState,storageKey} = store;
    window.addEventListener('storage',e=>{
        if(e.newValue===e.oldValue){
            console.log(e.newValue)
            return;
        }
        if(!e.key.includes(storageKey)){
            return;
        }
        const state = getState();
        const key = e.key.replace(storageKey,'');
        const prev = JSON.stringify({key,value:sortObject(state[key])});
        const next = e.newValue;
        if(prev===next){
            return;
        }
        const nextValue = JSON.parse(e.newValue);
        if(typeof nextValue === 'object' && nextValue.hasOwnProperty('value')){
            setState({
                [key]:nextValue.value,
            });
        }
        
        
    })
}

export default storageListner;