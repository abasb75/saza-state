import './App.css';
import { useGetter, useSelector, useDispatch, useAction, useSaza } from '../src';
import { useState } from 'react';

function App() {

  return (<>
    <Counter />
    
    <Vertus3 />

    <Notes />
  </>);
}

function Notes(){
  const notes = useSelector(state=>state.note);
  const [value,setValue] = useState('');
  
  const addNote = ()=>{
    notes.add({
      id:notes.lastId()+1,
      title:value,
    });
  }

  return (<>
    <div>
      <input type="text" value={value} onChange={e=>setValue(e.target.value)} />
      <button onClick={addNote}>add</button>
    </div>
    <ul>
      {notes.map(note=>(<li>
        <span>{note.title}</span>
        <button>delete</button>
        <button>edit</button>
      </li>))}
    </ul>
  </>)
}


function Counter(){
  const counter = useSelector();
  const dispatch = useDispatch();

  return (<div>
    <button onClick={()=>dispatch('counter.decrement')}>-</button>
    <span>counter : {counter.counter}</span>
    <button onClick={()=>dispatch({type:'counter.increment'})}>+</button>
  </div>);

}

function Counter2(){
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch(action=>action.counter);

  return (<div>
    <button onClick={()=>dispatch('decrement')}>-</button>
    <span>counter : {counter}</span>
    <button onClick={()=>dispatch({type:'increment'})}>+</button>
  </div>);

}


function Counter3(){
  const [counter,setCounter] = useSaza(state=>state.counter);

  return (<div>
    <button onClick={()=>setCounter(counter=>counter-1)}>-</button>
    <span>counter : {counter}</span>
    <button onClick={()=>setCounter(counter+1)}>+</button>
  </div>);

}



function Vertus(){
  const {value} = useGetter(state=>state.vertus);
  const {increment,decrement} = useAction(action=>action.vertus);

  return (<div>
    <button onClick={decrement}>-</button>
    <span>vertus : {value}</span>
    <button onClick={increment}>+</button>
  </div>);

}

function Vertus2(){
  const [state,setState] = useSaza();

  return (<div>
    <button onClick={()=>setState({
      vertus:{
        value:state.vertus.value-1
      },
    })}>-</button>
    <span>vertus : {state.vertus.value}</span>
    <button onClick={()=>setState(state=>({
      vertus:{
        value:state.vertus.value+1,
      }
    }))}>+</button>
  </div>);
}


function Vertus3(){
  const [value,setValue] = useSaza(state=>state.vertus.value);

  return (<div>
    <button onClick={()=>setValue(value-1)}>-</button>
    <span>vertus : {value}</span>
    <button onClick={()=>setValue(value=>value+1)}>+</button>
  </div>);

}

function Vertus4(){
  const {value} = useGetter('vertus');
  const {increment,decrement} = useAction(action=>action.vertus);

  return (<div>
    <button onClick={decrement}>-</button>
    <span>vertus : {value}</span>
    <button onClick={increment}>+</button>
  </div>);

}





export default App;
