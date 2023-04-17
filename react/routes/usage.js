import Code from "../components/code";

import {
    useSazaState,
    sazaDispatch as dispatch
} from "../../src";
import { useEffect } from "react";


function Usage(){

    return (<div>
        <h1>Usage</h1>
        <p>a simple data loader with <code>saza-state</code> :</p>

        <Code language={'sh'}>
            {`
import {
    useSazaState,
    sazaDispatch as dispatch
} from "saza-state";



//initial states

dispatch({
    loading:true,
    error:false,
    todos:[],
})


function TodoList(){

    // useSazaState give me last state value
    const loading = useSazaState(state=>state.loading);
    const error = useSazaState(state=>state.error);
    const todos = useSazaState(state=>state.todos);

    useEffect(()=>{
        fetch('/todos.json').then(
            res=>res.json()
        ).then(
            todos=>dispatch({ // setup new states for success load
                todos:todos, 
                loading:false,
                error:false
            })
        ).catch(
            err=>dispatch({ // setup new states for error when loading
                todos:[],
                loading:false,
                error:true
            })
        )
    },[]);

    console.log(loading,error,todos); // print states on console


    if(loading){ // if loading data
        return <p>Loading ...</p>
    }else if(error){ // if an error accourd
        return <p>Error to loading!</p>
    }else{ // shwo todo list when loaded
        return (<>
            {todos.map(
                (todo,index)=>{
                    return (<article key={index}>
                        <p>{todo.title}</p>
                    </article>);
                }
            )}
        </>);
    }
    
    
}


export default TodoList;`}
        </Code>
        
    </div>);
}


//initial states

dispatch({
    loading:true,
    error:false,
    todos:[],
})


function TodoList(){

    // useSazaState give me last state value
    const loading = useSazaState(state=>state.loading);
    const error = useSazaState(state=>state.error);
    const todos = useSazaState(state=>state.todos);

    useEffect(()=>{
        fetch('/todos.json').then(
            res=>res.json()
        ).then(
            todos=>dispatch({ // setup new states for success load
                todos:todos, 
                loading:false,
                error:false
            })
        ).catch(
            err=>dispatch({ // setup new states for error when loading
                todos:[],
                loading:false,
                error:true
            })
        )
    },[]);

    console.log(loading,error,todos); // print states on console


    if(loading){ // if loading data
        return <p>Loading ...</p>
    }else if(error){ // if an error accourd
        return <p>Error to loading!</p>
    }else{ // shwo todo list when loaded
        return (<>
            {todos.map(
                (todo,index)=>{
                    return (<article key={index}>
                        <p>{todo.title}</p>
                    </article>);
                }
            )}
        </>);
    }
    
    
}


export default Usage;