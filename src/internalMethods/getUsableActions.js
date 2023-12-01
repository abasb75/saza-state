function getUsableActions(config,getState,setState){
    return Object.keys(config?.actions).map(key=>{
        return {
            key:key,
            value:(newValue=undefined)=>{
                const label = config.label;
                const state = getState();
                const rerurnedState = config.actions[key](state[label],newValue);
                setState({
                    [label]:rerurnedState,
                });
            },
        }
    }).reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
}

export default getUsableActions;