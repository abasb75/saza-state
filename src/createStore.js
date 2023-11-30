import getInitialState from "./internalMethods/getInitialState";
import reformInitialState from "./internalMethods/reformatInitialState";
import getActions from "./internalMethods/getActions";
import clone from "./internalMethods/clone";


const createStore = (initialState={})=>{
    
    const reformedInitialState = reformInitialState(initialState);
    let state = getInitialState(reformedInitialState);
    
    const subscribers = [];
    let subscribersLastId = 0;

    const setState = (newState) => {
        console.log(state,newState)
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
        console.log(state);
        
        subscribers.forEach(subscriber=>{
            console.log(subscriber.method);
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

    const actions = getActions(reformedInitialState,getState,setState);
    console.log('actions',actions);

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
    }

}

export default createStore;