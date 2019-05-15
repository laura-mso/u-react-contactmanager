import React, { Component } from "react";
import { Consumer } from "../../Context";
import FormInput from "../layout/FormInput";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required." } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required." } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required." } });
      return;
    }

    const newContact = {
      // ES6: same as name: name (if its the same)
      name,
      email,
      phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };
  //onsubmit ends here

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <FormInput
                    label="Name"
                    name="name"
                    placeholder="Firstname Lastname"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={this.state.errors.name}
                  />
                  <FormInput
                    label="E-Mail"
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={this.state.errors.email}
                  />{" "}
                  <FormInput
                    label="Phone"
                    name="phone"
                    placeholder="+49 1111 111 11 11"
                    value={this.state.phone}
                    onChange={this.onChange}
                    error={this.state.errors.phone}
                  />
                  <div className="text-center">
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-secondary"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
