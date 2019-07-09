import React from "react";
import "./styles.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className} id={props.id}>
      {props.text}
    </button>
  );
}

export default Button;
