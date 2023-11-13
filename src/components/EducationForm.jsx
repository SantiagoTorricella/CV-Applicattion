/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

import InputText from "./InputText";
import EducationCard from "./Education/EducationCard";
import { useState } from "react";
function EducationForm({ closeForm, formData }) {
  function handleEducationName(e) {
    educationObject.school = e.target.value;
  }
  function handleEducationDegree(e) {
    educationObject.degree = e.target.value;
  }
  function handleEducationStartDate(e) {
    educationObject.startDate = e.target.value;
  }
  function handleEducationEndDate(e) {
    educationObject.endDate = e.target.value;
  }
  function handleEducationLocation(e) {
    educationObject.location = e.target.value;
  }
  function saveClickFunction() {
    formData.push(educationObject);
    console.log(formData);
  }

  let educationObject = { school: "", degree: "", startDate: "", endDate: "", location: "" };

  return (
    <>
      <form className="form" action="">
        <InputText
          name="School"
          placeholder="Enter school / university"
          onChangeFunction={handleEducationName}
        ></InputText>
        <InputText
          name="Degree"
          placeholder="Enter degree/ field of study"
          onChangeFunction={handleEducationDegree}
        ></InputText>
        <div className="start-end-education">
          <InputText
            name="Start Date"
            placeholder="Enter start date"
            onChangeFunction={handleEducationStartDate}
          ></InputText>
          <InputText name="End Date" placeholder="Enter end date" onChangeFunction={handleEducationEndDate}></InputText>
        </div>
        <InputText
          name="Location"
          placeholder="Enter your location"
          onChangeFunction={handleEducationLocation}
        ></InputText>
        <div className="form-features">
          <button>Delete</button>
          <div>
            <button onClick={closeForm}>Cancel</button>
            <button type="button" onClick={saveClickFunction}>
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EducationForm;
