import { useContext } from "react";
import { SazaContext } from "../provider";

const useStore = () => {
    const store = useContext(SazaContext);
    if(!store) return undefined;
    return store;
}

export default useStore;