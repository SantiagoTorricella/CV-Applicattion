/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

import InputText from "./InputText";
import { useState } from "react";

function JobsForm({ closeForm, changeData }) {
  const [jobObject, setJobObject] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    isHidden: false,
    isCollapsed: false,
  });

  function handleCompanyName(e) {
    setJobObject({ ...jobObject, companyName: e.target.value });
  }
  function handlePositionTitle(e) {
    setJobObject({ ...jobObject, positionTitle: e.target.value });
  }
  function handleJobStartDate(e) {
    setJobObject({ ...jobObject, startDate: e.target.value });
  }
  function handleJobEndDate(e) {
    setJobObject({ ...jobObject, endDate: e.target.value });
  }
  function handleJobLocation(e) {
    setJobObject({ ...jobObject, location: e.target.value });
  }
  function handleJobDescription(e) {
    setJobObject({ ...jobObject, description: e.target.value });
  }
  function saveClickFunction() {
    changeData(jobObject);
  }

  return (
    <>
      <form className="form" action="">
        <InputText
          labelName="Company Name"
          placeholder="Enter company name"
          onChangeFunction={handleCompanyName}
        ></InputText>
        <InputText
          labelName="Position Title"
          placeholder="Enter your position title"
          onChangeFunction={handlePositionTitle}
        ></InputText>
        <div className="start-end-education">
          <InputText
            labelName="Start Date"
            placeholder="Enter start date"
            onChangeFunction={handleJobStartDate}
          ></InputText>
          <InputText
            labelName="End Date"
            placeholder="Enter end date"
            onChangeFunction={handleJobEndDate}
          ></InputText>
        </div>
        <InputText
          labelName="Location"
          placeholder="Enter your location"
          onChangeFunction={handleJobLocation}
        ></InputText>
        <InputText
          labelName="Description"
          placeholder="Description"
          onChangeFunction={handleJobDescription}
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
