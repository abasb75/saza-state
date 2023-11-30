import { useContext } from "react";
import { SazaContext } from "../provider";

const useStore = () => {
    const store = useContext(SazaContext);
    return store;
}

export default useStore;