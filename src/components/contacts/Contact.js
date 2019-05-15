import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  // you can either add proptypes here or underneath the class (see example below)
  // static propTypes = {
  //   contact: PropTypes.object.isRequired
  // };

  state = {
    showContactInfo: false
  };

  // no binding necessary because we use arrow function
  // how does this work, that this function shows the elements?
  showOnClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteOnClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {" "}
                <span onClick={this.showOnClick}>
                  {name}{" "}
                  <i
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer" }}
                  />
                </span>
                <i
                  className="fas fa-times"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "darkred"
                  }}
                  onClick={this.deleteOnClick.bind(this, id, value.dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// alternative way of inserting proptypes
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
