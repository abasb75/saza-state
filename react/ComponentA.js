import { useSazaState , sazaAsyncDispatch as asyncDispatch  } from "../src";

function ComponentA(){
    const counter = useSazaState(state=>state.counter) || 0;
    console.log('component a is rendered... !')
    return (<p 
    onClick={()=>asyncDispatch(dispatch=>{
        setInterval(()=>{
          dispatch('counter_up');
          console.log('counter_up')
        },1000);
    })}
    style={{width:'33%',height:'120px',textAlign:'center',lineHeight:'120px',fontSize:'120px'}}>
        {counter}
    </p>);
}

export default ComponentA;