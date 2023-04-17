import { 
    addSazaAction, 
    sazaDispatch as dispatch,
    setupSazaStorageItems,
    useSazaState,

} from "../../src";
import Code from "../components/code";

function LocalStorage(){
    return (<div>
        <h1>localStorage</h1>
        <p>if you need to save your state on Browser Storage you need to setup your state with <code>setupSazaStorageItems</code></p>
        <Code language={'javascript'}>
            {`
addSazaStorageItems(item:String[]);
            `}
        </Code>
        <p><code>setupSazaStorageItems</code> recieves an Array of state's key we need save on browser </p>
        <p>Note : use <code>setupSazaStorageItems</code> in <code>index.js</code> file from your project</p>
        <Code language={'javascript'}>
            {`
...

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// setup counter storage
setupSazaStorageItems(
    ['storageCounter'], // storageCounter will save on browser storage
)

...
            `}
        </Code>
        
        <p>for this example we have 2 counter, one of them be save on browser.</p>
        <Code language={'javascript'}>
            {`
            
// add saza action creators

addSazaAction('storage_counter_init',state=>{
    return {
        ...state,
        storageCounter:state.storageCounter || 0, // important : dont set 0 as default
        noneStorageCounter:0,
    }
});
            
addSazaAction('storage_counter_up',state=>{
    return {
        ...state,
        storageCounter:state.storageCounter + 1,
        noneStorageCounter:state.noneStorageCounter + 1,
    }
});
            
addSazaAction('storage_counter_down',state=>{
    return {
        ...state,
        storageCounter:state.storageCounter + 1,
        noneStorageCounter:state.noneStorageCounter - 1,
    }
});
            
            
            
// inital state
dispatch('storage_counter_init');
            
function StorageCounter(){
            
    const storageCounter = useSazaState(state=>state.storageCounter);
    const noneStorageCounter = useSazaState(state=>state.noneStorageCounter);
            
    console.log(storageCounter,noneStorageCounter);
            
    const up = () => dispatch('storage_counter_up');
    const down = () => dispatch('storage_counter_down');

    return (<div className="playground">
        <div>storage counter : {storageCounter}</div>
        <div>none-storage counter : {noneStorageCounter}</div>
        <div className="buttons">
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>
        </div>
    </div>);
            
}
            
            
            `}
        </Code>

        <p><b>Note :</b> if storage states changes in a browser tab, other browser tabs state wil be update without need to refresh. </p>

        <p>Result :</p>

        <StorageCounter />
    </div>);
}


// add saza action

addSazaAction('storage_counter_init',state=>{
    return {
        ...state,
        storageCounter:state.storageCounter || 0, // important : dont set 0 as default
        noneStorageCounter:0,
    }
});

addSazaAction('storage_counter_up',state=>{
    return {
        ...state,
        storageCounter:state.storageCounter + 1,
        noneStorageCounter:state.noneStorageCounter + 1,
    }
});

addSazaAction('storage_counter_down',state=>{
    return {
        ...state,
        storageCounter:state.storageCounter - 1,
        noneStorageCounter:state.noneStorageCounter - 1,
    }
});



// inital state

dispatch('storage_counter_init');



function StorageCounter(){

    const storageCounter = useSazaState(state=>state.storageCounter);
    const noneStorageCounter = useSazaState(state=>state.noneStorageCounter);

    console.log(storageCounter,noneStorageCounter);

    const up = () => dispatch('storage_counter_up');
    const down = () => dispatch('storage_counter_down');

    return (<div className="playground">
        <div>storage counter : {storageCounter}</div>
        <div>none-storage counter : {noneStorageCounter}</div>
        
        <div className="buttons">
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>
        </div>
        <div className="links">
            <a href="/localStorage">refresh page</a>
            <a href="/localStorage" target="_blank">open in another tab</a>
            
        </div>
    </div>);

}


export default LocalStorage;