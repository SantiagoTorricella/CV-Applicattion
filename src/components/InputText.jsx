/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

function InputText({ labelName, placeholder, onChangeFunction, required }) {
  return (
    <form className="text-input">
      <label htmlFor="name">{labelName}: </label>
      <input
        type="text"
        name="name"
        id=""
        placeholder={placeholder}
        onChange={onChangeFunction}
        required={required}
      />
    </form>
  );
}

export default InputText;
