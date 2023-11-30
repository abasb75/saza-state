const counter = {
    initialValue:0,
    storagble:true,
    actions:{
        increment:(counter)=>{
            return counter+1;
        },
        decrement:(counter)=>{
            return counter-1;
        },
        set:(counter,payload)=>{
            return payload;
        },
        default:(counter)=>{
            return counter || 0;
        }
    }
}

export default counter;