function getInitialState(initialState){
    return Object.keys(initialState).map(key=>{
        return {
            key:key,
            value:initialState[key]?.initialValue,
        }
    }).reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
}

export default getInitialState;