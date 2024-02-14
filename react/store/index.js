import { createStore } from "../../src";
import counter from "./counter";
import vertus from "./vertus";
import note from "./note";

const store = createStore({
    counter,
    vertus,
    note,
});

export default store;