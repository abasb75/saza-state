import { useContext, useDebugValue, useSyncExternalStore } from "react";
import { SazaContext } from "../provider";

const useGetter = (selector=null) => {
    const store = useContext(SazaContext);
    const state = useSyncExternalStore(
        store.subscribe,
        ()=>{
            if(typeof selector==='string'){
                const state = store.getState();
                return state[selector];
            }
            return store.getState(selector)
        },
    );
    useDebugValue(state);
    return state;
}

export default useGetter;