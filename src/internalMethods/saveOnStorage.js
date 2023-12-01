import sortObject from "./sortObject";

function saveOnStorage(state,storageKey,config){

    Object.keys(state).forEach((key)=>{
        const prev = localStorage.getItem(`${storageKey}${key}`) || "";
        const next = JSON.stringify({
            key,
            value:sortObject(state[key])
        });
        if(config[key]?.storagble && next != prev){
            localStorage.setItem(`${storageKey}${key}`,next)
        }
    });

}

export default saveOnStorage;