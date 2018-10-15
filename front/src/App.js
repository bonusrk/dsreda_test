import React, { Component } from "react";
import { ReposList } from "./components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReposList />
      </div>
    );
  }
}

export default App;
