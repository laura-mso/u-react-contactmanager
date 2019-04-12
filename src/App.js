import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="Luca Mio" email="luca@mio.de" phone="23453 345" />
        <Contact name="Lea Mio" email="lea@mio.de" phone="23453 633" />
      </div>
    );
  }
}

export default App;
