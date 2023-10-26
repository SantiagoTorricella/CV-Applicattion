/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function InputText({ name, placeholder }) {
  const [name1, setName] = useState("");
  return (
    <div className="text-input">
      <label htmlFor="name">{name}: </label>
      <input
        type="text"
        name="name"
        id=""
        placeholder={placeholder}
        value={name1}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name1}</p>
    </div>
  );
}

export default InputText;
