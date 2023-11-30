import { useContext, useSyncExternalStore } from "react";
import { SazaContext } from "../provider";

const useAction = (selector=null) => {
    const store = useContext(SazaContext);
    const action = useSyncExternalStore(
        store.subscribe,
        ()=>{
            if(typeof selector === 'string'){
                const actions = store.getAction();
                return actions[selector];
            }
            return store.getAction(selector);
        },
    );
    return action;
}

export default useAction;