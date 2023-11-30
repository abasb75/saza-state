import { useContext, useSyncExternalStore } from "react";
import { SazaContext } from "../provider";

const useDispatch = (selector=null) => {
    const store = useContext(SazaContext);
    const actions = useSyncExternalStore(
        store.subscribe,
        ()=>{
            if(typeof selector === 'string'){
                const actions = store.getAction();
                return actions[selector];
            }
            return store.getAction(selector);
        },
    );
    if(!actions){
        return undefined;
    }
    const types = Object.keys(actions);
    return (obj)=>{
        // handle input string
        if(typeof obj === 'string'){
            if(obj.includes('.')){
                const exploded = obj.split('.');
                if(types.includes(exploded[0]) ){
                    const underType = Object.keys(actions[exploded[0]]);
                    if(underType.includes(exploded[1])){
                        return actions[exploded[0]][exploded[1]](undefined);
                    }
                    return;
                }
                return;
            }
            if(!types?.includes(obj)){
                return;
            }
            return actions[obj](undefined);
        }
        


        if(obj?.type.includes('.')){
            const exploded = obj?.type.split('.');
            if(types.includes(exploded[0]) ){
                const underType = Object.keys(actions[exploded[0]]);
                if(underType.includes(exploded[1])){
                    return actions[exploded[0]][exploded[1]](obj?.payload);
                }
                return;
            }
            return;
        }

        if(!types?.includes(obj?.type)){
            return;
        }
        return actions[obj?.type](obj?.payload);
    };
}

export default useDispatch;