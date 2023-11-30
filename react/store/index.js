import { createStore } from "../../src";
import counter from "./counter";
import vertus from "./vertus";

const store = createStore({
    counter,
    vertus,
});

export default store;