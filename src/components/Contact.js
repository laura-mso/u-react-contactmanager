import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  // you can either add proptypes here or underneath the class (see example below)
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// alternative way of inserting proptypes
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;
