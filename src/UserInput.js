import React from 'react';

class UserInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return <div >
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onClick(this.state.value);
        }}>
        <div className="form-group">
          <label htmlFor="input">Enter a whole number > 0:
          </label>
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} id="input"></input>
        </div>
        <button className="btn btn-primary" type="submit">OK</button>
      </form>
    </div>;
  }
}

export default UserInput;
