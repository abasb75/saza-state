import getUsableActions from "./getUsableActions";

function getActions(initialState,getState,setState){
    return Object.keys(initialState).map(key=>{
        return {
            key:key,
            value:getUsableActions(initialState[key],getState,setState),
        }
    }).reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
}

export default getActions;