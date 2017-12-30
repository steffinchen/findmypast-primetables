import React from 'react';
import MultiplicationTableUI from './MultiplicationTableUI';
import './App.css';

class App extends React.Component {
  render() {
    return <div className="App">
      <div className="App-header">
        <h1>Findmypast Prime Tables</h1>
        <div>Enter a whole number > 0:
          <input></input>
          <button>OK</button>
        </div>
        <MultiplicationTableUI n="3"/>
      </div>
    </div>;
  }
}

export default App;
