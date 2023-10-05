/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
function InputText({ name }) {
  return (
    <div className="text-input">
      <label htmlFor="name">{name}: </label>
      <input type="text" name="name" id="" />
    </div>
  );
}

export default InputText;
