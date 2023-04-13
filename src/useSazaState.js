import { useEffect, useState } from "react";
import store from "./Store";

function useSazaState(selector){
    
    if(typeof selector !== 'function'){
        return false;
    }
    
    const [state,setState] = useState(selector(store.state));
    
    useEffect(()=>{

        const subsId = store.subscribe(setState,selector);

        return ()=>{
            store.unsubscribe(subsId);
        }

    },[]);

    return state;

}

export default useSazaState;