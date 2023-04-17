import Code from "../components/code";

import {
    sazaDispatch as dispatch,
    useSazaState
} from "../../src";

function Dispatch(){
    return (<div>
        <h1>sazaDispatch</h1>
        <p><code>sazaDispatch</code> is a build-in function for update state data!</p>
        <Code language={'javascript'}>
            {`sazaDispatch(data:object|string,payload?:object)`}
        </Code>
        <p>data is data we need set on state, for example we have a code for create random number</p>
        <Code language={'javascript'}>
            {`
import {
    sazaDispatch as dispatch,
    useSazaState
} from "saza-state";

//intial state
dispatch({
    number:0,
});


function RandomNumber(){
    const number = useSazaState(state=>state.number) || 0;
    return (<div className="playground">
        <p>{number}</p>
        <p><button onClick={()=>dispatch({
            number:Math.ceil(Math.random()*1000)
        })} >generate random number</button></p>
    </div>);
}

export default RandomNumber;
            `}
        </Code>

        <p>Result :</p>
        <RandomNumber />
    </div>);
}

//intial state
dispatch({
    number:0,
});

function RandomNumber(){
    const number = useSazaState(state=>state.number) || 0;
    return (<div className="playground">
        <p>{number}</p>
        <p><button onClick={()=>dispatch({
            number:Math.ceil(Math.random()*1000)
        })} >generate random number</button></p>
    </div>);
}


export default Dispatch;