import React from "react";

export default function Alert(props) {
  console.log(props.alert);
  return (
    <div>
       { props.alert &&<div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => props.setAlert({})}>
        </button>
      </div>
       }
    </div>
  );
}
