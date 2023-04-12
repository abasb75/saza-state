import store from "./store";

function useSazaAsyncDispatch(dispatcher){
    if(typeof dispatcher !== 'function') { 
        return null;
    }
    return ()=>dispatcher(store.setState);
}

export default useSazaAsyncDispatch;