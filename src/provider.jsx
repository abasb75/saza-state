import { createContext } from "react";

const SazaContext = createContext(null);

function Provider({children,store}){
    return (
        <SazaContext.Provider value={store}>
            {children}
        </SazaContext.Provider>
    );
}

export default Provider;
export {SazaContext};