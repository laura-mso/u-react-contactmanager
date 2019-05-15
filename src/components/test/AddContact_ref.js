import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fred@gmail.com",
    phone: "44-666-3333"
  };

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Firstname Lastname"
                defaultValue={this.props.name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="example@mail.com"
                defaultValue={this.props.email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                className="form-control"
                type="text"
                name="phone"
                placeholder="+1 000 11 22 33"
                defaultValue={this.props.phone}
                ref={this.phoneInput}
              />
            </div>
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
  }
}
