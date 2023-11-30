function reformInitialState(initialState){
    return Object.keys(initialState).map(key=>{
        return {
            label:initialState[key]?.label?(initialState[key].label):key,
            storagble:(initialState[key]?.storagble===true)?(initialState[key].storagble):false,
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
                ...(initialState[key]?.actions || {})
            },
            initialValue:(initialState[key]?.initialValue!==undefined)?(initialState[key]?.initialValue):{},
        }
    }).reduce((obj, item) => Object.assign(obj, { [item.label]: item }), {});
      
}

export default reformInitialState;