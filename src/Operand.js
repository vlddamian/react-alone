import React from "react";
import "./Operand.css"

function Operand(props) {

    return (
      <form className="Operand">
          <label>
              {props.label}
          <input type="text"
                 value={props.operandValue}
                 name={props.label}
                 onChange={props.operandValueChanged}/>
          </label>
      </form>
    );

}

export default Operand;