import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component{
    constructor(){
        super();
        console.log("constructing...");
    }
    render(){
        return <div><h2>Hello from App component</h2><ul><li>Item 1</li><li>Item 2</li></ul></div>
    }
}

export default App      