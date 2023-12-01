<p><code>SAZA-STATE</code> is a great state manager for react 18+ apps!</p>
<p>It save state on browser storage like <code>redux-persist</code> </p>
<p>It does not require external tools to apply changes in different tabs of the browser</p>
<p>It has optimized rendering.</p>
<p>
<img src="assets/multi-tab-screen.gif" alt="saza-state" />
</p>

## Installation

<p>install <code>saza-state</code> with npm :</p>

```sh
npm i saza-state
```



## how to use?

first need to create your store:

```javascript

const counter = {
    label:'counter',
    initialValue:0,
    storagble:false, // dont save on localstorage
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

const config = {
    label:'config',
    initialValue:{
        darkMode:ralse,
    },
    storagble:true, // config will saved on storage
    actions:{
        toggleDarkMode:(config)=>{
            return {
                ...config,
                darkMode:!config.darkMode
            }
        },
        set:(config,newConfig)=>{
            return {
                ...config,
                ...newConfig,
            };
        },
        default:(config)=>{
            return config || {
                darkMode:false,
            };
        }
    }
}

const store = createStore({
    counter,
    config,
});'

export default store;

```


## SazaProvider

wrapp your app with SazaProvider:

```javascript
import { SazaProvider } from "saza-state";
import store from "./store";

...

return(<SazaProvider store={store}>
   <App />
</SazaProvider>)

...

```

## useSelector

Get state data using <code>useSelector</code> hook:

```javascript
import { useSelector } from "saza-state";

function MyComponent(){
    const counter = useSelector(state=>state.counter) || 0;
    return (<span>{counter}</span>)
}

```

## useSazaState

<code>useSazaState</code> hook works like <code>useSelector</code>:

```javascript
import { useSazaState } from "saza-state";

function MyComponent(){
    const counter = useSazaState(state=>state.counter) || 0;
    return (<span>{counter}</span>)
}

```

## useGetter

Get state data using <code>useGetter</code> hook:

```javascript
import { useGetter } from "saza-state";

function MyComponent(){
    const counter = useGetter('counter') || 0; // counter is label of counter in store
    const { darkMode } = useGetter(state=>state.config); // also you can pass a selector

    return (<span style={getStyle(darkMode)}>{counter}</span>)
}

```

## useAction

Update state data using actions and get action using <code>useAction</code> hook:


```javascript
import { useAction } from "saza-state";

function MyComponent(){
    const { increment, decrement } = useAction(action=>action.counter); // actions created on store.js file
    const { toggleDarkMode } = useAction('config'); // get actions with label/actionSelector of state

    return (<div>
        <button onClick={decrement}>-</button>
        counter: {counter}
        <button onClick={increment}>+</button>

        <button onClick={toggleDarkMode}>toggle darkmode</button>
    </div>);

```


## useDispatch

Update state data using dispatch method. get dispatch using <code>useDispatch</code> hook:


```javascript
import { useDispatch } from "saza-state";

function MyComponent(){
    ...
    const dispatch = useDispatch();
    return (<div>
        <button onClick={()=>dispatch('counter.decrement')}>-</button>
        counter: {counter}
        <button onClick={()=>dispatch('counter.increment')}>+</button>

        <button onClick={()=>dispatch({ // if it's needed to pass a value for action use payload property
            type:'config.set',
            payload:{
                darkMode:false,
            }
        })}>toggle darkmode</button>
    </div>);

```

## useSetter

Access to <code>store.setState</code> method using <code>useSetter</code> hook:


```javascript
import { useSetter } from "saza-state";

function MyComponent(){
    ...
    const setState = useSetter();
    ...
    return (<div>
        <button onClick={()=>setState({
            counter:counter-1
        })}>-</button>
        counter: {counter}
        <button onClick={()=>setState({
            counter:counter+1
        })}>+</button>

        <button onClick={()=>setState({
            type:'config.set',
            config:{
                ...config,
                darkMode:!config.darkMode,
            }
        })}>toggle darkmode</button>
    </div>);

```

## useStore

Access to <code>store</code> method using <code>useStore</code> hook:

```javascript
import { useStore } from "saza-state";

function MyComponent(){
    ...
    const store = useStore();
    const { getState, setState, getAction, subscribe, unsubscribe } = store;
    ...
    return (<div>
        <button onClick={()=>setState({
            counter:getState().counter-1
        })}>-</button>
        counter: {getState().counter}
        <button onClick={()=>setState({
            counter:getState().counter+1
        })}>+</button>

        <button onClick={()=>setState({
            type:'config.set',
            config:{
                darkMode:!getState().config.darkMode,
            }
        })}>toggle darkmode</button>
    </div>);

```

## useSetter

Access to <code>store.setState</code> method using <code>useSetter</code> hook:


```javascript
import { useSetter } from "saza-state";

function MyComponent(){
    ...
    const setState = useSetter();
    ...
    return (<div>
        <button onClick={()=>setState({
            counter:counter-1
        })}>-</button>
        counter: {counter}
        <button onClick={()=>setState({
            counter:counter+1
        })}>+</button>

        <button onClick={()=>setState({
            type:'config.set',
            config:{
                ...config,
                darkMode:!config.darkMode,
            }
        })}>toggle darkmode</button>
    </div>);

```

## useSaza

Access to <code>state</code> and <code>setState</code> method together using <code>useSaza</code> hook:

```javascript
import { useSaza } from "saza-state";

function MyComponent(){
    ...
    const [darkMode,setDarkMode] = useSaza(state=>state.config.darkMode);
    ...
    return (<div style={getStyle(darkMode)}>
        <button onClick={()=>setDarkMode(darkMode=>!darkMode)}>toggle darkmode</button>
    </div>);

```



































