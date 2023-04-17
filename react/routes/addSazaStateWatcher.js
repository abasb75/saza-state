import Code from "../components/code";
import React from "react";

import {
    sazaDispatch as dispatch,
    addSazaAction,
    addSazaStateWatcher
} from "../../src";

function AddSazaStateWatcher(){
    return (<div>
        <h1>addSazaStateWatcher</h1>
        <p><code>state wathcher</code> is a function will executed on state changes, we  are able add a new state whatcher!</p>
        <Code  language={'javascript'}>
            {`
sazaStateWatcher(watcher:Function,selector?:Function);
            `}
        </Code>
        <p></p>
        <Code language={'javascript'}>
            {`
import {
    sazaDispatch as dispatch,
    addSazaAction,
    addSazaStateWatcher
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


        <p>we have <code>ToDoList</code> component to showing todo list . in this example we recieved last changes on state with watcher</p>
        <Code language={'javascript'}>
        {
            `
class ToDoList extends React.Component{

    state = { // initail state
        loading:false,
        error:false,
        todos:[],
    }
            
    componentDidMount(){
            
        const watcher = state => this.setState({
            loading:state.loading,
            error:state.error,
            todos:state.todos,
        });
            
        addSazaStateWatcher(watcher); // note : watcher will be executed by any changing on state
            
    }
            
    render(){
        if(this.state.loading) return <div>is loading ...</div>;
        else if(this.state.error) return <div>error when loading!</div>;
        else if(this.state.todos.length === 0) return <div>There are nothing to display!</div>;
        else return <div>{this.state.todos.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>;
    }
                
            
}
            

`
        }
        </Code>

        <p><b>Note :</b> It's recomended to use functional component  instead of state watcher for showing data !</p>

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

class ToDoList extends React.Component{

    state = { // initail state
        loading:false,
        error:false,
        todos:[],
    }

    componentDidMount(){

        const watcher = state => this.setState({
            loading:state.loading,
            error:state.error,
            todos:state.todos,
        });

        addSazaStateWatcher(watcher); // watcher will be executed by changing on state

    }

    render(){
        if(this.state.loading) return <div>is loading ...</div>;
        else if(this.state.error) return <div>error when loading!</div>;
        else if(this.state.todos.length === 0) return <div>There are nothing to display!</div>;
        else return <div>{this.state.todos.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>;
    }
    

}

export default AddSazaStateWatcher;