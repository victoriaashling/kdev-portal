import React from "react";
import "./Form.css";

export const ReadOnlyInput = props => (
  <div className="form-group">
    <label>{props.label}</label>
    <div className="input-group">
      <input className={ "form-control " } {...props} />
      <div className="input-group-append">
        <button id={props.name} className="btn btn-secondary edit-btn" type="button" onClick={props.onClick}><i className="far fa-edit"></i></button>
      </div>
    </div>
  </div>
);
