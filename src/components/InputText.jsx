/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import { useState } from "react";

/=== GENERAL INPUT THAT TAKES NAME,PLACEHOLDER, AND A FUNCTION ONCHANGE/;
function InputText({ labelName, placeholder, onChangeFunction }) {
  return (
    <div className="text-input">
      <label htmlFor="name">{labelName}: </label>
      <input
        type="text"
        name="name"
        id=""
        placeholder={placeholder}
        onChange={onChangeFunction}
      />
    </div>
  );
}

export default InputText;
