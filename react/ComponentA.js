const { useSazaState , useSazaAsyncDispatch } = require("../src")

function ComponentA(){
    const asyncDispatch = useSazaAsyncDispatch(dispatch=>{
        setInterval(()=>{
          dispatch('counter_up');
        },1000);
    });
    const counter = useSazaState(state=>state.counter) || 0;
    console.log('component a is rendered... !')
    return (<p 
    onClick={()=>asyncDispatch()}
    style={{width:'33%',height:'120px',textAlign:'center',lineHeight:'120px',fontSize:'120px'}}>
        {counter}
    </p>);
}

export default ComponentA;