import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import Provider from "./Context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route path="/contact/add" component={AddContact} />
                <Route path="/contact/edit/:id" component={EditContact} />
                <Route path="/about" component={About} />
                <Route path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
