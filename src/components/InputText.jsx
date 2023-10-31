/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function InputText({ name, placeholder, onChangeFunction }) {
  return (
    <div className="text-input">
      <label htmlFor="name">{name}: </label>
      <input type="text" name="name" id="" placeholder={placeholder} onChange={onChangeFunction} />
    </div>
  );
}

export default InputText;
