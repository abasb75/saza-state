import getFromStorage from "./getFromStorage";

function getInitialState(config,storageKey){
    return Object.keys(config).map(key=>{
        if(!config[key]?.storagble){
            return {
                key:key,
                value:config[key]?.initialValue,
            }
        }
        const storageValue = getFromStorage(`${storageKey}${key}`);
        if(typeof storageValue === 'object' && storageValue?.hasOwnProperty('value')){
            return {
                key,
                value:storageValue?.value,
            };
        }else if(storageValue === ''){
            return {
                key:key,
                value:config[key]?.initialValue,
            }
        }
        return {
            key:key,
            value:storageValue?.value || config[key]?.initialValue,
        }
    }).reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
}



export default getInitialState;