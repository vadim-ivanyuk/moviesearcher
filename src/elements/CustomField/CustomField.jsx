import React from "react";

export const CustomField = (props) => {
  const { input, label, type, meta } = props;

  return (
    <div className="form-group mb-3">
      <label className="mb-1" htmlFor={label}>
        {label} *
      </label>
      <input
        {...input}
        id={label}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {meta.touched &&
        ((meta.error && <p className="invalid-field">{meta.error}</p>) ||
          (meta.warning && <p className="invalid-field">{meta.warning}</p>))}
    </div>
  );
};
