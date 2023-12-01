import getUsableActions from "./getUsableActions";

function getActions(config,getState,setState){
    return Object.keys(config).map(key=>{
        return {
            key:key,
            value:getUsableActions(config[key],getState,setState),
        }
    }).reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
}

export default getActions;