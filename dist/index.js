import useSazaState from "./useSazaState";
import useSazaDispatch from "./useSazaDispatch";
import useSazaAsyncDispatch from "./useSazaAsyncDispatch";
import store from "./store";
const addSazaAction = store.addAction.bind(store);
const addSazaStorageItems = store.addStorageItems.bind(store);
export {
    useSazaState,
    useSazaDispatch,
    useSazaAsyncDispatch,
    addSazaAction,
    addSazaStorageItems
};