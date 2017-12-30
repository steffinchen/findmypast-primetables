import React from 'react';
import MultiplicationTableUI from './MultiplicationTableUI';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: '',
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h1>Findmypast Prime Tables</h1>
        <div >
          <div className="form-group">
            <label htmlFor="input">Enter a whole number > 0:
            </label>
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="input"></input>
          </div>
          <button className="btn btn-primary" type="submit" onClick={() => this.setState({
              n: parseInt(this.state.value, 10)
            })}>OK</button>
        </div>
        <MultiplicationTableUI n={this.state.n}/>
      </div>
    </div>;
  }
}

export default App;
