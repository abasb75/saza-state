import Code from "../components/code";
import React from "react";

import {
    sazaDispatch as dispatch,
    useSazaState,
    addSazaAction
} from "../../src";

function ClassComponent(){
    return (<div>
        <h1>class components</h1>
        <p>first, we need import our needed methods from <code>saza-state</code></p>
        <Code language={'javascript'}>
            {`
import {
    sazaDispatch as dispatch,
    useSazaState,
    addSazaAction
} from "saza-state";            

            `}
        </Code>

        <p>then, define actions creator :</p>

        <Code language={'javascript'}>
            {`
// define actions

addSazaAction('start_loading',state=>{ // when start loading data
    return {
        ...state,
        loading:true,
        error:false,
        todos:[],
    }
});

addSazaAction('loading_error',state=>{ // when an error occurs
    return {
        ...state,
        loading:false,
        error:true,
        todos:[],
    }
})

addSazaAction('todo_is_loaded',(state,payload)=>{ // when todo data is loaded
    return { 
        ...state,
        loading:false,
        error:false,
        todos:payload,
    }
})

addSazaAction('clear_todo_list',(state)=>{ // clear every thing
    return {
        ...state,
        loading:false,
        error:false,
        todos:[],
    }
})          

            `}
        </Code>


        <p>for initial state we use <code >clear_todo_list</code></p>
        <Code language={'javascript'}>
            {`

// initial state
dispatch('clear_todo_list');

            `}
        </Code>

        <p>we have <code>ToDoList</code> component to showing todo list :</p>
        <Code language={'javascript'}>
        {
            `
function ToDoList(){

    const todos = useSazaState(state=>state.todos) || [];
    const loading = useSazaState(state=>state.loading) || false;
    const error = useSazaState(state=>state.error) || false;

    console.log(todos,loading,error);

    if(loading) return <div>is loading ...</div>;
    else if(error) return <div>error when loading!</div>;
    else if(todos.length === 0) return <div>There are nothing to display!</div>;
    else return <div>{todos.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>;

}`
        }
        </Code>
        <p>and our class component :</p>

        <Code language={'javascript'}>
        {
            `
class Todos extends React.Component {

    reload(){
        dispatch('start_loading');
        fetch('/todos.json').then(
            res=>res.json()
        ).then(
            todos=>dispatch('todo_is_loaded',todos)
        ).catch(
            err=>dispatch('loading_error')
        )
    }
            
    clear(){
        dispatch('clear_todo_list');
    }
            
    render(){
        return (<div className="playground">
            <div className="buttons">
                <button onClick={this.reload}>Reload</button>
                <button onClick={this.clear}>Clear Data</button>
            </div>
            <ToDoList />
        </div>);
    }

}


`
        }
        </Code>

        <p><b>Note :</b> It's recomended always use functional Component to showing datas!</p>


        <p>Result :</p>
        <Todos />
    </div>);
}


// define actions

addSazaAction('start_loading',state=>{ // when start loading data
    return {
        ...state,
        loading:true,
        error:false,
        todos:[],
    }
});

addSazaAction('loading_error',state=>{ // when an error occurs
    return {
        ...state,
        loading:false,
        error:true,
        todos:[],
    }
})

addSazaAction('todo_is_loaded',(state,payload)=>{ // when todo data is loaded
    return { 
        ...state,
        loading:false,
        error:false,
        todos:payload,
    }
})

addSazaAction('clear_todo_list',(state)=>{ // clear every thing
    return {
        ...state,
        loading:false,
        error:false,
        todos:[],
    }
})

// initial state
dispatch('clear_todo_list');


class Todos extends React.Component {


    reload(){
        dispatch('start_loading');
        fetch('/todos.json').then(
            res=>res.json()
        ).then(
            todos=>dispatch('todo_is_loaded',todos)
        ).catch(
            err=>dispatch('loading_error')
        )
    }

    clear(){
        dispatch('clear_todo_list');
    }

    render(){
        return (<div className="playground">
            <div className="buttons">
                <button onClick={this.reload}>Reload</button>
                <button onClick={this.clear}>Clear Data</button>
            </div>
            <ToDoList />
        </div>);
    }

}

function ToDoList(){

    const todos = useSazaState(state=>state.todos) || [];
    const loading = useSazaState(state=>state.loading) || false;
    const error = useSazaState(state=>state.error) || false;

    console.log(todos,loading,error);

    if(loading) return <div>is loading ...</div>;
    else if(error) return <div>error when loading!</div>;
    else if(todos.length === 0) return <div>There are nothing to display!</div>;
    else return <div>{todos.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>;

}

export default ClassComponent;