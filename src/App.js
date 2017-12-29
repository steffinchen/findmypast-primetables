import React from 'react';
import MultiplicationTableUI from './MultiplicationTableUI';

class App extends React.Component {
  render() {
    return <div>
        <h1>Findmypast Prime Tables</h1>
        <div>Enter a whole number > 0: <input></input><button>OK</button></div>
        <MultiplicationTableUI />
      </div>;
  }
}

export default App;
