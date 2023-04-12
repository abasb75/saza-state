import store from "./store";

function useSazaDispatch(){
    return store.setState;
}

export default useSazaDispatch;