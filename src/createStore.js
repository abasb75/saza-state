import getInitialState from "./internalMethods/getInitialState";
import reformConfig from "./internalMethods/reformConfig";
import getActions from "./internalMethods/getActions";
import saveOnStorage from "./internalMethods/saveOnStorage";


const createStore = (storeConfig={})=>{


    const storageKey = 'SAZA-STATE-94SNDSJKLSAKMASOOIMLKAL-';
    
    const reformedStoreConfig = reformConfig(storeConfig);
    let state = getInitialState(reformedStoreConfig,storageKey);
    
    const subscribers = [];
    let subscribersLastId = 0;

    const setState = (newState) => {
        if(typeof newState === 'object'){
            state = {
                ...state,
                ...newState,
            }
        }else if(typeof newState === 'function'){
            state = {
                ...state,
                ...newState(state),
            }
        }else{
            return;
        }

        saveOnStorage(state,storageKey,reformedStoreConfig);
        
        subscribers.forEach(subscriber=>{
            subscriber.method(state)
        });
    }

    const getState = (selector=undefined) => {
        if(typeof selector === 'function'){
            return selector(state);
        }
        return state;
    }

    const subscribe = (subscriber) => {
        const subscriberId = ++subscribersLastId;
        subscribers.push({
            id:subscriberId,
            method:subscriber,
        });
        return ()=>unsubscribe(id);
    }

    const unsubscribe = (subscriberId)=> {
        const index = subscriberId.map(subscriber => {
            return subscriber.id;
        }).indexOf(subscriberId);
        if(index<0) return;  
        list.splice(index, 1);
    }

    const actions = getActions(reformedStoreConfig,getState,setState);

    const getAction = (selector=null)=> {
        if(typeof selector === 'function'){
            return selector(actions);
        }
        return actions;
    }

    return {
        setState,
        getState,
        subscribe,
        unsubscribe,
        getAction,
        storageKey,
    }

}

export default createStore;