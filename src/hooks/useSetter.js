import { useContext } from "react";
import { SazaContext } from "../provider";

const useSetter = () => {
    const store = useContext(SazaContext);
    const setter = store.setState;
    return setter;
}

export default useSetter;