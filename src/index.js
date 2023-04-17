import store from "./Store";

import useSazaState from "./useSazaState";
import addSazaStateWatcher from "./addSazaStateWatcher";

import sazaDispatch from "./sazaDispatch";
import sazaAsyncDispatch from "./sazaAsyncDispatch";
import useSazaFetcher from "./useSazaFetcher";

const addSazaAction = store.addAction.bind(store);
const setupSazaStorageItems = store.addStorageItems.bind(store);

export {

    /* getters */
    useSazaState,
    addSazaStateWatcher,
    useSazaFetcher,

    /* setters */
    sazaDispatch,
    sazaAsyncDispatch,
    

    /* action & reducer */
    addSazaAction,

    /* localstorage */
    setupSazaStorageItems,

};