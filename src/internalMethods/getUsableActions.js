function getUsableActions(initialState,getState,setState){
    console.log(initialState);
    return Object.keys(initialState?.actions).map(key=>{
        return {
            key:key,
            value:(newValue=undefined)=>{
                const label = initialState.label;
                const state = getState();
                const rerurnedState = initialState.actions[key](state[label],newValue);
                setState({
                    [label]:rerurnedState,
                });
            },
        }
    }).reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
}

export default getUsableActions;