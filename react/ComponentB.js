const { useSazaState, useSazaDispatch } = require("../src")

function ComponentB(){
    const dispatch = useSazaDispatch();
    const taria = useSazaState(state=>state.taria) || 0;
    console.log('component b is rendered... !')
    return <p 
    style={{width:'33%',height:'120px',textAlign:'center',lineHeight:'120px',fontSize:'120px'}}
    onClick={e=>dispatch({taria:1000})}>{taria}</p>
}

export default ComponentB;