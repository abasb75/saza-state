import { useContext, useDebugValue, useSyncExternalStore } from "react";
import { SazaContext } from "../provider";
import clone from "../internalMethods/clone";
import getSelectorByFunction from "../internalMethods/getSelectorByFunction";

const useSaza = (selector=undefined) => {
    const store = useContext(SazaContext);
    const state = useSyncExternalStore(
        store.subscribe,
        ()=>{
            if(typeof selector==='string'){
                const state = store.getState();
                return state[selector];
            }
            return store.getState(selector);
        },
    );
    
    useDebugValue(state);
    try{
        let selectorToString = getSelectorByFunction(selector);
        const keys = selectorToString.split('.');
        if(keys.length === 2){
            const {set} = store.getAction(action=>action[keys[1]]);
            return [state,(newValue)=>{
                if(typeof newValue === 'function'){
                    const result = newValue(state);
                    return set(result);
                }
                return set(newValue);
            }];
        }else if(keys.length === 3){
            return [state,(newValue)=>{
                if(typeof newValue === 'function'){
                    const result = newValue(state)
                    const newState = clone({...store.getState()});
                    newState[keys[1]][keys[2]] = result;
                    return store.setState({...newState});
                }
                const newState = clone({...store.getState()});
                newState[keys[1]][keys[2]] = newValue;
                
                return store.setState({...newState});
            }];
        }
        return [state,store.setState];
    }catch{
        return [state,store.setState];
    }
    
}

export default useSaza;