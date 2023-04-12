import './App.css';
import { useSazaDispatch, addSazaAction , addSazaStorageItems} from '../src';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import useSazaAsyncDispatch from '../src/useSazaAsyncDispatch';

addSazaAction('counter_up', (state) =>{
  const counter = state.counter+1 || 1;
  return {
    ...state,
    counter
  }
});

addSazaStorageItems(['counter']);




function App() {
  
  const dispatch = useSazaDispatch();
 

  return (<>
    <div style={{display:'flex',maxWidth:'900px',margin:'25px auto',width:'100%'}}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    <div style={{textAlign:'center', margin:'100px 0 250px 0'}}>
      <button 
      onClick={()=>dispatch('counter_up')}
      style={{padding:'20px 25px',background:'white'}}
      >COUNTER UP</button>
    </div>
    <div className='footer'>
      <p><a href='https://abasbagheri.ir'>&copy; Abbas Bagheri</a></p>
    </div>
  </>);
}

export default App;
