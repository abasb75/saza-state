import { useContext } from "react";
import { SazaContext } from "../provider";

const useSetter = () => {
    const store = useContext(SazaContext);
    if(!store) return undefined;
    const setter = store.setState;
    return setter;
}

export default useSetter;