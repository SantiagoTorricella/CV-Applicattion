/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

import InputText from "./InputText";
import { useState } from "react";

function JobsForm({ closeForm, changeData }) {
  const [educationObject, setEducationObject] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    isHidden: false,
    isCollapsed: false,
  });

  function handleEducationName(e) {
    setEducationObject({ ...educationObject, school: e.target.value });
  }
  function handleEducationDegree(e) {
    setEducationObject({ ...educationObject, degree: e.target.value });
  }
  function handleEducationStartDate(e) {
    setEducationObject({ ...educationObject, startDate: e.target.value });
  }
  function handleEducationEndDate(e) {
    setEducationObject({ ...educationObject, endDate: e.target.value });
  }
  function handleEducationLocation(e) {
    setEducationObject({ ...educationObject, location: e.target.value });
  }
  function saveClickFunction() {
    changeData(educationObject);
  }

  return (
    <>
      <form className="form" action="">
        <InputText
          labelName="Company Name"
          placeholder="Enter company name"
          onChangeFunction={handleEducationName}
        ></InputText>
        <InputText
          labelName="Position Title"
          placeholder="Enter your position title"
          onChangeFunction={handleEducationDegree}
        ></InputText>
        <div className="start-end-education">
          <InputText
            labelName="Start Date"
            placeholder="Enter start date"
            onChangeFunction={handleEducationStartDate}
          ></InputText>
          <InputText
            labelName="End Date"
            placeholder="Enter end date"
            onChangeFunction={handleEducationEndDate}
          ></InputText>
        </div>
        <InputText
          labelName="Location"
          placeholder="Enter your location"
          onChangeFunction={handleEducationLocation}
        ></InputText>
        <InputText
          labelName="Description"
          placeholder="Description"
          onChangeFunction="nati"
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

export default JobsForm;
