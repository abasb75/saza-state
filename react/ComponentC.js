import { 
    sazaDispatch as dispatch,
    sazaStateWatcher 
} from "../src";


import React from "react";

class ComponentC extends React.Component{


    state = {
        counter:0,
    }

    componentDidMount(){
        sazaStateWatcher(
            (counter)=>{
                this.setState({
                    counter:counter,
                });
            },
            state=>state.counter,
        );
    }
    
    componentDidUpdate(){
        console.log('component c is rendered ...');
    }
    
    render(){
        return <p
        onClick={()=>dispatch('counter_up')}
        style={{width:'33%',height:'120px',textAlign:'center',lineHeight:'120px',fontSize:'120px'}}
        >{this.state.counter}</p>
    }

}

export default ComponentC;