import React from 'react';
import MultiplicationTableUI from './MultiplicationTableUI';
import './App.css';
import UserInput from './UserInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: -1,
    };
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h1>Findmypast Prime Tables</h1>
        <UserInput onClick={(input) => this.setState({
          n: parseInt(input, 10)
        })}/>
        <MultiplicationTableUI n={this.state.n}/>
      </div>
    </div>;
  }

}

export default App;
