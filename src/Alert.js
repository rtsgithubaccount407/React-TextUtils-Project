import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    const newcap = word.toLowerCase();
    return newcap.charAt(0).toUpperCase() + newcap.slice(1);
  };

  return (

    <div style={{ height: "40px" }}>
      
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalize(props.alert.type)}</strong>
            {props.alert.msg}
          </div>
        </div>
      )
      }
</div>
  )
};
export default Alert;
