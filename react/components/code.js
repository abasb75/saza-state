import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Code({children , language}){
    return (<div style={{borderRadius:'5px',padding:'12px 0'}}>
        <SyntaxHighlighter language={language} style={docco}>
            {children}
        </SyntaxHighlighter>
    </div>)
}

export default Code;