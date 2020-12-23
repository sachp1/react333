import React from 'react';
import ReactDom from "react-dom";
import "index.scss"

let App = ()=>{
    return <h2>Hello from react</h2>
}

ReactDom.render(<App/>,
    document.getElementById("root")
)