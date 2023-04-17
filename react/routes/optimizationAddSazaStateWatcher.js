import Code from "../components/code";
import React from "react";

import {
    sazaDispatch as dispatch,
    addSazaAction,
    addSazaStateWatcher
} from "../../src";

function AddSazaStateWatcherOptimized(){
    return (<div>
        <h1>an optimize for addSazaStateWatcher</h1>
        <p><code>state wathcher</code> without passing selector , watches all state , and rerender component for any changes on state!</p>
        <Code  language={'javascript'}>
            {`
sazaStateWatcher(watcher:Function,selector?:Function);
            `}
        </Code>
        <p>for this perpose, we can pass a selector methods for select a part of state we need watch!</p>
        

        <p>first we change structure of data on our state to below :</p>
        <Code language={'javascript'}>
{`

state = {
    ...

    todosSlice:{
        loading:boolean,
        error:boolean,
        items:object[],
    }

    ...
}

`}
        </Code>

        <p>first we create action creators!</p>
        <Code language={'javascript'}>
            {`
// define actions

addSazaAction('op_start_loading',state=>{ // when start loading data
    return {
        ...state,
        todosSlice:{
            loading:true,
            error:false,
            items:[],
        }
    }
});

addSazaAction('op_loading_error',state=>{ // when an error occurs
    return {
        ...state,
        todosSlice:{
            loading:false,
            error:true,
            items:[],
        }
    }
})

addSazaAction('op_todo_is_loaded',(state,payload)=>{ // when todo data is loaded
    return { 
        ...state,
        todosSlice:{
            loading:false,
            error:false,
            items:payload,
        }
    }
})

addSazaAction('op_clear_todo_list',(state)=>{ // clear every thing
    return {
        ...state,
        todosSlice:{
            loading:false,
            error:false,
            items:[],
        }
    }
})         

            `}
        </Code>


        <p>for initial state we use <code >clear_todo_list</code></p>
        <Code language={'javascript'}>
            {`

// initial state
dispatch('op_clear_todo_list');

            `}
        </Code>

        <p>and our class component :</p>

        <Code language={'javascript'}>
        {
            `
class Todos extends React.Component {

    reload(){
        dispatch('op_start_loading');
        fetch('/todos.json').then(
            res=>res.json()
        ).then(
            todos=>dispatch('op_todo_is_loaded',todos)
        ).catch(
            err=>dispatch('op_loading_error')
        )
    }
            
    clear(){
        dispatch('op_clear_todo_list');
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
            
        const watcher = todosSlice => this.setState({
            loading:todosSlice.loading,
            error:todosSlice.error,
            todos:todosSlice.items,
        });
            
        const selector = state=>state.todosSlice; // return todos from state
            
        addSazaStateWatcher(watcher,selector); // watcher will be executed only changes on todos in states
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

addSazaAction('op_start_loading',state=>{ // when start loading data
    return {
        ...state,
        todosSlice:{
            loading:true,
            error:false,
            items:[],
        }
    }
});

addSazaAction('op_loading_error',state=>{ // when an error occurs
    return {
        ...state,
        todosSlice:{
            loading:false,
            error:true,
            items:[],
        }
    }
})

addSazaAction('op_todo_is_loaded',(state,payload)=>{ // when todo data is loaded
    return { 
        ...state,
        todosSlice:{
            loading:false,
            error:false,
            items:payload,
        }
    }
})

addSazaAction('op_clear_todo_list',(state)=>{ // clear every thing
    return {
        ...state,
        todosSlice:{
            loading:false,
            error:false,
            items:[],
        }
    }
})

// initial state
dispatch('op_clear_todo_list');


class Todos extends React.Component {

    reload(){
        dispatch('op_start_loading');
        fetch('/todos.json').then(
            res=>res.json()
        ).then(
            todos=>dispatch('op_todo_is_loaded',todos)
        ).catch(
            err=>dispatch('op_loading_error')
        )
    }

    clear(){
        dispatch('op_clear_todo_list');
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

        const watcher = todosSlice => this.setState({
            loading:todosSlice.loading,
            error:todosSlice.error,
            todos:todosSlice.items,
        });

        const selector = state=>state.todosSlice; // return todos from state

        addSazaStateWatcher(watcher,selector); // watcher will be executed only changes on todos in states
    }

    render(){
        console.log(this.state)
        if(this.state.loading) return <div>is loading ...</div>;
        else if(this.state.error) return <div>error when loading!</div>;
        //else if(this.state.todos.length === 0) return <div>There are nothing to display!</div>;
        else return <div>{this.state.todos.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>;
    }
    

}

export default AddSazaStateWatcherOptimized;