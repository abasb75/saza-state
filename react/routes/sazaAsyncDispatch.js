import { useEffect } from "react";
import Code from "../components/code";
import { 
    addSazaAction,
    sazaDispatch as dispatch,
    sazaAsyncDispatch as asyncDispatch,
    useSazaState
} from "../../src";

function SazaAsyncDispatch(){
    return (<div>
        <h1>sazaAsyncDispatch</h1>
        <p><code>sazaAsyncDispatch</code> is a async dispatcher for <code>saza-state</code></p>
        <Code language={'javascript'}>
            {`
sazaAsyncDispatch(dispatcher:Function);
            `}
        </Code>
        <p>for example we create a timer with sazaAsyncDispatch</p>
        <Code language={'javascript'}>
            {`

import { 
    addSazaAction,
    sazaDispatch as dispatch,
    sazaAsyncDispatch as asyncDispatch,
    useSazaState
} from "saza-state";

// our actions

addSazaAction('init_timer',state=>{
    return {
        ...state,
        timer:0,
    }
})

addSazaAction('timer_up',state=>{
    return {
        ...state,
        timer:state.timer+1,
    }
});

//initail state
dispatch('init_timer');

function Timer(){

    const timer = useSazaState(state=>state.timer) || 0;

    useEffect(()=>{
        asyncDispatch(dispatch=>setInterval(()=>dispatch('timer_up'),1000))
    },[])

    return (<div>{timer}</div>);

}

            `}
        </Code>
        <p>Result :</p>
        <Timer />

        <p>another example : using for loading data</p>
        <Code language={'javascript'}>
            {`
            
addSazaAction('async_loader_init', state=>{
    return {
        ...state,
        asyncTodo:{
            loading:false,
            error:false,
            items:[],
        }
    }
});
            
addSazaAction('async_loader_start', state=>{
    return {
        ...state,
        asyncTodo:{
            loading:true,
            error:false,
            items:[],
        }
    }
});
            
            
addSazaAction('async_loader_error', state=>{
    return {
        ...state,
        asyncTodo:{
            loading:false,
            error:true,
            items:[],
        }
    }
});
            
addSazaAction('async_loader_loaded', (state,payload)=>{
    return {
        ...state,
        asyncTodo:{
            loading:false,
            error:false,
            items:payload,
        }
    }
});
            
            
// initial state
dispatch('async_loader_init');
            
function DataLoaderController(){
            
    const clear = () => dispatch('async_loader_init');
            
    const load = () => asyncDispatch(dispatch=>{
        dispatch('async_loader_start');
        fetch('/todos.json').then(
            res=>res.json()
        ).then(
            todos=>dispatch('async_loader_loaded',todos) // no need to import dispatch
        ).catch(
            err=>dispatch('async_loader_error')
        );
    });
            
    return (<>
        <div className="buttons">
            <button onClick={clear}>Clear Data</button>
            <button onClick={load}>Reload Data</button>
        </div>
        <DisplayData />
    </>);
}
            
function DisplayData(){
            
    const asyncTodo = useSazaState(state=>state.asyncTodo);
            
    console.log(asyncTodo);
            
    if(asyncTodo.loading) return <div>is loading ...</div>;
    else if(asyncTodo.error) return <div>error when loading!</div>;
    else if(asyncTodo.items.length === 0) return <div>There are nothing to display!</div>;
    else return <div>{asyncTodo.items.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>; 

}
            `}
        </Code>
        <DataLoaderController />

    </div>);
}

/** timer example */
addSazaAction('init_timer',state=>{
    return {
        ...state,
        timer:0,
    }
})

addSazaAction('timer_up',state=>{
    return {
        ...state,
        timer:state.timer+1,
    }
});

//initail state
dispatch('init_timer');

function Timer(){

    const timer = useSazaState(state=>state.timer) || 0;

    useEffect(()=>{
        asyncDispatch(dispatch=>setInterval(()=>dispatch('timer_up'),1000))
    },[])

    return (<div>{timer}</div>);

}


/** data loader */
addSazaAction('async_loader_init', state=>{
    return {
        ...state,
        asyncTodo:{
            loading:false,
            error:false,
            items:[],
        }
    }
});

addSazaAction('async_loader_start', state=>{
    return {
        ...state,
        asyncTodo:{
            loading:true,
            error:false,
            items:[],
        }
    }
});


addSazaAction('async_loader_error', state=>{
    return {
        ...state,
        asyncTodo:{
            loading:false,
            error:true,
            items:[],
        }
    }
});

addSazaAction('async_loader_loaded', (state,payload)=>{
    return {
        ...state,
        asyncTodo:{
            loading:false,
            error:false,
            items:payload,
        }
    }
});


// initial state
dispatch('async_loader_init');

function DataLoaderController(){

    const clear = () => dispatch('async_loader_init');

    const load = () => asyncDispatch(dispatch=>{
        dispatch('async_loader_start');
        fetch('/todos.json').then(
            res=>res.json()
        ).then(
            todos=>dispatch('async_loader_loaded',todos) // no need to import dispatch
        ).catch(
            err=>dispatch('async_loader_error')
        );
    });

    return (<>
        <div className="buttons">
            <button onClick={clear}>Clear Data</button>
            <button onClick={load}>Reload Data</button>
        </div>
        <DisplayData />
    </>);
}

function DisplayData(){

    const asyncTodo = useSazaState(state=>state.asyncTodo);

    console.log(asyncTodo);

    if(asyncTodo.loading) return <div>is loading ...</div>;
    else if(asyncTodo.error) return <div>error when loading!</div>;
    else if(asyncTodo.items.length === 0) return <div>There are nothing to display!</div>;
    else return <div>{asyncTodo.items.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>; 

}

export default SazaAsyncDispatch;