<p><code>SAZA-STATE</code> is a great state manage for react apps!</p>
<p>It's doesnt need Provider Like context</code> or <code>react-redux</code></p>
<p>It's save state on browser storage like <p>redux-persist</p> </p>
<p>It does not require external tools to apply changes in different tabs of the browser</p>
<p>It has optimized rendering.</p>
<p>
<img src="assets/multi-tab-screen.gif" alt="saza-state" />
</p>

## Installation

install <code>saza-state<code> with npm :
```sh
npm i saza-state
```

##how to use?

for get states from ```saza-state``` :

```javascript
export { useSazaState } from "saza-state";

function Counter(){
    const counter = useSazaState(state=>state.counter) || 0;
    return (<p>{counter}</p>);
}


export default Counter;

```

for ```dispatch``` state to  ```saza-state``` :

```javascript
import { useSazaDispatch } from 'saza-state';

// set counter to 1 by clicking on this button
function Button(){
    return <button onClick={()=>dispatch({counter:0})}>Setup Counter</button>
}

export default Button;

```


## Add action

for add action to  ```saza-state``` you need to use ```addSazaAction``` :

```javascript
import { useSazaDispatch , addSazaAction } from 'saza-state';

// add counter up action 
addSazaAction(
    'counter_up', // type : must be unique 
    (state) =>{ // reducer for 'counter_up' action
        const counter = state.counter+1 || 1;
        return {
            ...state,
            counter
        }
    }
);

// set counter to 1 by clicking on this button
function Button(){
    return <button onClick={()=>dispatch('counter_up')}>Counter Up</button>
}

export default Button;

```

also you can pass ```payload``` to ```reducer``` :

```javascript
import { useSazaDispatch , addSazaAction } from 'saza-state';

// add counter up action 
addSazaAction(
    'counter_down', // type : must be unique 
    (state,payload) =>{ // reducer for 'counter_down' action
    const counter = state.counter-payload.count || 1;
        return {
            ...state,
            counter
        }
    }
);

// set counter to 1 by clicking on this button
function Button(){
    return <button onClick={()=>dispatch('counter_down',{count:1})}>Counter Down</button>
}

export default Button;

```

##  A Guide For Class Components


``` javascript
import { useSazaState, useSazaDispatch } from "saza-state";
import React from "react";

class ComponentC extends React.Component{
    componentDidMount(){
        console.log('component c is rendered')
    }
    componentDidUpdate(){
        console.log('component c is rendered')
    }
    render(){
        return (
        ...
        <p>{this.props.counter}</p>
        ...
        <button onClick={()=>this.props.dispatch('counter_up')}>UP Counter</button>
        ...
        )
    }

}

export default function(){
    const counter = useSazaState(state=>state.counter);
    const dispatch = useSazaDispatch();
    return <ComponentC counter={counter} dispatch={dispatch}  /> 
};

```

It is recommended to always use the functional component like below : 


``` javascript
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
        return (
        ...
        <CounterValue />
        ...
        <ButtonUp />
        ...
        )
    }

}

function CounterValue(){
    const counter = useSazaState(state=>state.counter);
    return <p>{counter}</p>
};

function ButtonUp(){
    const dispatch = useSazaDispatch();
    return <button onClick={()=>dispatch('counter_up')}>UP Counter</button>
}

export default ComponentC;

```

## Enable State Saving on localStorage

You can specify any of the properties of the state object to store in local storage. 
In this case, you will get the past information of the browser. Also, the information in different tabs is always synced

<img src="assets/multi-tab-screen.gif" alt="saza-state" />

```javascript
import { addSazaStorageItems} from 'saza-state';


addSazaStorageItems([
    'counter', // state.counter will save on localstorage
]);


function App() {
  return (
    ...
  );
}

export default App;
```


### Async Dispatch

You can use asynchronous actions. This hook receives a function and creates an asynchronous action for use!

```javascript
import { useSazaState , useSazaAsyncDispatch } from "saza-states";

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
```

