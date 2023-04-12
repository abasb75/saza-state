const { useSazaState, useSazaDispatch } = require("../src");
import React from "react";

class ComponentC extends React.Component{
    componentDidMount(){
        console.log('component c is rendered')
    }
    componentDidUpdate(){
        console.log('component c is rendered')
    }
    render(){
        return <p
        onClick={()=>this.props.dispatch('counter_up')}
        style={{width:'33%',height:'120px',textAlign:'center',lineHeight:'120px',fontSize:'120px'}}
        >{this.props.counter}</p>
    }

}

export default function(){
    const counter = useSazaState(state=>state.counter);
    const dispatch = useSazaDispatch();
    return <ComponentC counter={counter} dispatch={dispatch}  />
};