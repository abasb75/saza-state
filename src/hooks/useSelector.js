import { useContext, useDebugValue, useSyncExternalStore } from "react";
import { SazaContext } from "../provider";

const useSelector = (selector=undefined) => {
    const store = useContext(SazaContext);
    const state = useSyncExternalStore(
        store.subscribe,
        ()=>store.getState(selector),
    );
    useDebugValue(state);
    console.log(state);
    return state;
}

export default useSelector;