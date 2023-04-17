import Code from "../components/code";

function Installation(){
    return (<div>
        <h1>Installation</h1>
        <p><code>saza-state</code> is a great state manage for react app :</p>
        <ul style={{paddingLeft:'50px'}}>
            <li>It does not need Provider Like context or react-redux</li>

            <li>It save state on browser storage like redux-persist</li>

            <li>It does not require external tools to apply changes in different tabs of the browser</li>

            <li>It has optimized rendering.</li>
        </ul>
        <p style={{marginTop:'20px'}}>for install it, open terminal on your react project and enter:</p>
        <Code language={'sh'}>
            {`npm i saza-state`}
        </Code>
    </div>);
}


export default Installation;