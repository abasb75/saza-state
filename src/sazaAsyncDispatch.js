import store from "./Store";

function sazaAsyncDispatch(dispatcher){
    if(typeof dispatcher !== 'function') { 
        return null;
    }
    dispatcher(store.setState);
}

export default sazaAsyncDispatch;