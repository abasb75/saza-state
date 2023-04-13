import useSazaState from "./useSazaState";
import sazaStateWatcher from "./sazaStateWatcher";

import sazaDispatch from "./sazaDispatch";
import sazaAsyncDispatch from "./sazaAsyncDispatch";
import store from "./Store";

const addSazaAction = store.addAction.bind(store);
const addSazaStorageItems = store.addStorageItems.bind(store);

export {

    /* getters */
    useSazaState,
    sazaStateWatcher,

    /* setters */
    sazaDispatch,
    sazaAsyncDispatch,

    /* action & reducer */
    addSazaAction,

    /* localstorage */
    addSazaStorageItems,

};