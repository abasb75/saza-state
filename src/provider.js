import { createContext, useLayoutEffect } from "react";
import React from "react";
import storageListner from "./internalMethods/storageListner";

const SazaContext = createContext(null);

function Provider({children,store}){
    useLayoutEffect(()=>{
        storageListner(store);
    },[]);
    return (
        <SazaContext.Provider value={store}>
            {children}
        </SazaContext.Provider>
    );
}

export default Provider;
export {SazaContext};