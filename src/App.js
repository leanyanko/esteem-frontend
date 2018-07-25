import React, { Component } from "react";
import "./App.css";
import ListJobs from "./components/ListJobs";
import Header from "./components/Header";
import Map from "./components/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <ListJobs />
      </div>
    );
  }
}

export default App;
