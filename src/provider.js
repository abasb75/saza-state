import { createContext, useLayoutEffect } from "react";
import React from "react";
import storageListner from "./internalMethods/storageListner";

const SazaContext = createContext(null);

function Provider({children,store=undefined}){
    useLayoutEffect(()=>{
        if(store){
            storageListner(store);
        }
    },[store]);
    if(!store){
        return (
            <p>Saza provider need to store :(</p>
        );
    }
    return (
        <SazaContext.Provider value={store}>
            {children}
        </SazaContext.Provider>
    );
}

export default Provider;
export {SazaContext};