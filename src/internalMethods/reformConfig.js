function reformConfig(config){
    return Object.keys(config).map(key=>{
        return {
            label:config[key]?.label?(config[key].label):key,
            storagble:(config[key]?.storagble===true)?(config[key].storagble):false,
            actions:{
                default:(state)=>{
                    return state;
                },
                set:(state,value)=>{
                    if(typeof state === 'object'){
                        return {
                            ...state,
                            ...value,
                        }
                    }
                    return value;
                },
                ...(config[key]?.actions || {})
            },
            initialValue:(config[key]?.initialValue!==undefined)?(config[key]?.initialValue):{},
        }
    }).reduce((obj, item) => Object.assign(obj, { [item.label]: item }), {});
      
}

export default reformConfig;