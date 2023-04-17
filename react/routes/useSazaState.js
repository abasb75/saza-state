import Code from "../components/code";

function UseSazaState(){
    return (<div>
        <h1>useSazaState</h1>
        <p><code>useSazaState</code> is a build-in hook for getting last state changes!</p>
        <Code language={'javascript'}>
            {`useSazaState(selector:Function)`}
        </Code>
        <p>selector is function recieved state and return a part of state that we need it. for example we have an counter :</p>
        <Code language={'javascript'}>
            {`
import { useSazaState } from "saza-state";

function Counter(){
    const counter = useSazaState(state=>state.counter) || 0; // 
    return (<div>{counter}</div>);
}

export default Counter;
            `}
        </Code>
    </div>);
}

export default UseSazaState;