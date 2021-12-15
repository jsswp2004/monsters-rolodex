import React, { Component } from "react";
import logo from "./logo.svg";
import {CardList} from "./components/card-list/card-list.component"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({monsters: users}));
  }
  render() {
    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={e => console.log.e}></input>
        <CardList monsters={this.state.monsters}>
        </CardList>

      </div>
    );
  }
}

export default App;
