import { useEffect } from "react";
import Code from "../components/code";
import { 
    addSazaAction,
    sazaDispatch as dispatch,
    useSazaFetcher
} from "../../src";


function SazaFetchData(){
    return (<div>
        <h1>sazaFetchData</h1>
        <p><code>useSazaFetcher</code> is one-line data fetcher! </p>
        <Code language={'javascript'}>
            {`
useSazaFetcher(url:string,key:string,options?:object) : { key:object ,reload:Function} ;
            `}
        </Code>
        <p>for example if we need to get todo list from api</p>
        <Code language={'javascript'}>
            {`
import {useSazaFetcher} from "saza-state";

function DataFetcher(){

    const {fetcherTodos,reload} = useSazaFetcher('/todos.json','fetcherTodos');

    // fetcherTodos is an object with isLoading,error and data , fetcherTodos equals with passed key to useSazaFetcher
    // reload is a method to reload data from api
    console.log(fetcherTodos);

    const todos = ()=>{
        if(fetcherTodos.isLoading) return <div>is loading ...</div>;
        else if(fetcherTodos.error) return <div>error when loading!</div>;
        else if(fetcherTodos.data.length === 0) return <div>There are nothing to display!</div>;
        else return <div>{fetcherTodos.data.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>;
    }

    return (<>
        <button onClick={reload}>reload</button>
        {todos()}
    </>);

}
            `}
        </Code>
        <p>third argument for <code>useSazaFetcher</code> is <code>fetch</code> api option for example if you need to get data from a post request:</p>
        <Code language={'javascript'}>
            {`
function MyComponent(){

    const {requestData,reload} = useSazaFetcher('/todos.json','requestData' , {method:'POST',});

    ...

}
            `}
        </Code>
        <p>Result :</p>

        <DataFetcher />
    </div>);
}
function DataFetcher(){

    const {fetcherTodos,reload} = useSazaFetcher('/todos.json','fetcherTodos');


    console.log(fetcherTodos);

    const todos = ()=>{
        if(fetcherTodos.isLoading) return <div>is loading ...</div>;
        else if(fetcherTodos.error) return <div>error when loading!</div>;
        else if(fetcherTodos.data.length === 0) return <div>There are nothing to display!</div>;
        else return <div>{fetcherTodos.data.map((todo,index)=><article key={index}>{todo.title}</article>)}</div>;
    }

    return (<>
        <button onClick={reload}>reload</button>
        {todos()}
    </>);
    

}



export default SazaFetchData;