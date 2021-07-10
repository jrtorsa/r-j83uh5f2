import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    letters: '',
  }

  handleChange = (e) => {
    this.setState({
      letters: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.letters} onChange={this.handleChange}></textarea>
        <div className="counter">{this.state.letters.length}</div>
      </div>
    );
  }
}

export default App;
