import { sazaDispatch as dispatch , useSazaState  }  from "../src";

function ComponentB(){
    const taria = useSazaState(state=>state.taria) || 0;
    console.log('component b is rendered... !')
    return <p 
    style={{width:'33%',height:'120px',textAlign:'center',lineHeight:'120px',fontSize:'120px'}}
    onClick={e=>dispatch({taria:Math.ceil(Math.random()*100)})}>{taria}</p>
}

export default ComponentB;