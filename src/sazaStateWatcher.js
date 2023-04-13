import store from "./Store";

function sazaStateWatcher(wathcher,selector=(state=>state)){

    if(typeof wathcher === 'function'){
        wathcher(selector(store.getState()));
        if(typeof selector === 'function'){
            return store.subscribe(wathcher,selector);
        }else{
            return false;
        }
        
    }

}

export default sazaStateWatcher;