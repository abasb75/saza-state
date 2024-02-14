import { useContext, useDebugValue, useSyncExternalStore } from "react";
import { SazaContext } from "../provider";

const useSelector = (selector=undefined) => {
    const store = useContext(SazaContext);
    if(!store) return undefined;
    const state = useSyncExternalStore(
        store.subscribe,
        ()=>store.getState(selector),
    );
    
    return state;
}

export default useSelector;