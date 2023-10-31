/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import InputText from "./InputText";

function EducationForm({ closeForm }) {
  return (
    <>
      <form action="">
        <InputText name="School" placeholder="Enter school / university"></InputText>
        <InputText name="Degree" placeholder="Enter degree/ field of study"></InputText>
        <div className="start-end-education">
          <InputText name="Start Date" placeholder="Enter start date"></InputText>
          <InputText name="End Date" placeholder="Enter end date"></InputText>
        </div>
        <InputText name="Location" placeholder="Enter your location"></InputText>
        <div className="form-features">
          <button>Delete</button>
          <div>
            <button onClick={closeForm}>Cancel</button>
            <button>Save</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EducationForm;
