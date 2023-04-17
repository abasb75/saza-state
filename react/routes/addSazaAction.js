import Code from "../components/code";

import {
    sazaDispatch as dispatch,
    useSazaState,
    addSazaAction
} from "../../src";

function AddSazaAction(){
    return (<div>
        <h1>addSazaAction</h1>
        <p><code>addSazaAction</code> is a build-in function for define new action on state</p>
        <Code language={'javascript'}>
            {`addSazaAction(type:String,reducer:Function)`}
        </Code>
        <p><code>type</code> is a unique string in actions list.</p>
        <p><code>reducer</code> is a function will executed on action. reducer need recieved state and payload data for reduce on states</p>
        <Code language={'javascript'}>
            {`
import {
    sazaDispatch as dispatch,
    useSazaState,
    addSazaAction
} from "saza-state";

//intial state
dispatch({
    counter:0,
});

addSazaAction('counter_up',(state)=>{
    return {
        ...state,
        counter:state.counter+1,
    }
});

addSazaAction('counter_down',(state,payload)=>{
    return {
        ...state,
        counter:state.counter - payload.count,
    }
})

function Counter(){
    const number = useSazaState(state=>state.number) || 0;
    return (<div className="playground">
        <CounterNumber />
        <CounterButtons />
    </div>);
}

function CounterNumber(){
    const counter = useSazaState(state=>state.counter);
    return <div>{counter}</div>
}

function CounterButtons(){

    const up = ()=>dispatch('counter_up');
    const down = ()=>dispatch('counter_down',{count:1});

    return (<>
        <button onClick={up}>Counter Up</button>
        <button onClick={down}>Counter Down</button>
    </>);

}

export default Counter;
            `}
        </Code>

        <p>Result :</p>
        <Counter />
    </div>);
}

//intial state
dispatch({
    counter:0,
});

addSazaAction('counter_up',(state)=>{
    return {
        ...state,
        counter:state.counter+1,
    }
});

addSazaAction('counter_down',(state,payload)=>{
    return {
        ...state,
        counter:state.counter - payload.count,
    }
})

function Counter(){
    const number = useSazaState(state=>state.number) || 0;
    return (<div className="playground">
        <CounterNumber />
        <CounterButtons />
    </div>);
}

function CounterNumber(){
    const counter = useSazaState(state=>state.counter);
    return <div>{counter}</div>
}

function CounterButtons(){

    const up = ()=>dispatch('counter_up');
    const down = ()=>dispatch('counter_down',{count:1});

    return (<>
        <button onClick={up}>Counter Up</button>
        <button onClick={down}>Counter Down</button>
    </>);

}

export default AddSazaAction;