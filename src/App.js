import React, { Component } from 'react';
import './App.css';
import NotebookRoot from "./components/Notebook/NotebookRoot"

class App extends Component {
  render(){
    return (
        <div className="App">
          <NotebookRoot></NotebookRoot>
        </div>
    );
  }
}
export default App;
