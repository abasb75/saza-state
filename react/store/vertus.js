const vertus = {
    label:'vertus',
    initialValue:{
        value:0,
    },
    actions:{
        increment:(vertus)=>{
            return {
                ...vertus,
                value:vertus.value+1
            }
        },
        decrement:(vertus)=>{
            return {
                ...vertus,
                value:vertus.value-1
            }
        },
        set:(vertus,value)=>{
            return {
                ...vertus,
                value,
            };
        },
        default:(vertus)=>{
            return vertus || {
                value:0,
            };
        }
    }
}

export default vertus;