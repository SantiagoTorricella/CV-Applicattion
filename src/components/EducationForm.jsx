/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

import InputText from "./InputText";
import EducationCard from "./Education/EducationCard";
import { useState } from "react";

function EducationForm({ closeForm }) {
  const [educationName, setEducationName] = useState([]);

  function handleEducationName(e) {
    setEducationName(e.target.value);
  }

  return (
    <>
      <form className="form" action="">
        <InputText
          name="School"
          placeholder="Enter school / university"
          onChangeFunction={handleEducationName}
        ></InputText>
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
            <button type="button">Save</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EducationForm;
