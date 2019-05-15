import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2 text-info">Contact List</h1>
              {value.contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
