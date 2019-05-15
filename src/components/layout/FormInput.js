import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function FormInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className={classnames("form-control", { "is-invalid": props.error })}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

FormInput.defaultProps = {
  type: "text"
};
