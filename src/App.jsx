/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import "./styles/App.css";
import { useState } from "react";
import HiddenInfo from "./components/HIddenInfo";
import InputText from "./components/InputText";
import CVPreview from "./components/CVPreview";

function App() {
  /=== DEFINING USESTATES ===/;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [educations, setEducation] = useState([]);
  const [jobsExperience, setJobsExperience] = useState([]);

  /=== FUNCTIONS FOR HANDLING EVENTS ===/;
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
    console.log(educations);
  }

  return (
    <div className="app">
      <div className="details">
        <div className="personal-details">
          <h3>Personal Details</h3>
          <InputText
            name="Fullname"
            placeholder="Gordon Freeman"
            onChangeFunction={handleFullName}
          />
          <InputText
            name="Email"
            placeholder="GFreeman@Blackmesa.org"
            onChangeFunction={handleEmail}
          />
          <InputText
            name="Adress"
            placeholder="Confidential"
            onChangeFunction={handleAdress}
          />
          <InputText
            name="Phone"
            placeholder="Confidential"
            onChangeFunction={handlePhone}
          />
        </div>
        <HiddenInfo
          name="Education"
          data={educations}
          icon={".././public/mortarboard.png"}
        ></HiddenInfo>
        <HiddenInfo
          name="Experience"
          data={jobsExperience}
          icon={".././public/suitcase.png"}
        ></HiddenInfo>
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
