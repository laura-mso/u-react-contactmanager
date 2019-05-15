import React, { Component } from "react";
import { Consumer } from "../../Context";
import FormInput from "../layout/FormInput";
import axios from "axios";

export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    this.setState({
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone
    });
  }

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

    const updateContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    // Clear State
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
              <div className="card-header">Edit Contact</div>
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
                      value="Edit Contact"
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
