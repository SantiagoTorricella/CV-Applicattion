/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import "./styles/App.css";
import { useState } from "react";
import EducationHiddenInfo from "./components/EducationHiddenInfo";
import JobsHiddenInfo from "./components/JobsHIddenInfo";
import InputText from "./components/InputText";
import CVPreview from "./components/CVPreview";

function App() {
  // useStates
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [educations, setEducation] = useState([]);
  const [jobsExperience, setJobsExperience] = useState([]);

  // handling events
  function handleFullName(e) {
    setFullName(e.target.value);
  }
  function handleAdress(e) {
    setAdress(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleEducations(data) {
    setEducation([...educations, data]);
  }

  function handleJobs(data) {
    setJobsExperience([...jobsExperience, data]);
  }

  return (
    <div className="app">
      <div className="details">
        <div className="personal-details">
          <h3>Personal Details</h3>
          <InputText
            labelName="Fullname"
            placeholder="Gordon Freeman"
            onChangeFunction={handleFullName}
          />
          <InputText
            labelName="Email"
            placeholder="GFreeman@Blackmesa.org"
            onChangeFunction={handleEmail}
          />
          <InputText
            labelName="Adress"
            placeholder="Confidential"
            onChangeFunction={handleAdress}
          />
          <InputText
            labelName="Phone"
            placeholder="Confidential"
            onChangeFunction={handlePhone}
          />
        </div>
        <EducationHiddenInfo
          name="Education"
          changeData={handleEducations}
          icon={".././public/mortarboard.png"}
        ></EducationHiddenInfo>
        <JobsHiddenInfo
          name="Experience"
          changeData={handleJobs}
          icon={".././public/suitcase.png"}
        ></JobsHiddenInfo>
      </div>
      <CVPreview
        fullNameCV={fullName}
        adressCV={adress}
        phoneCV={phone}
        emailCV={email}
        education={educations}
        jobsExperience={jobsExperience}
      />
    </div>
  );
}

export default App;
