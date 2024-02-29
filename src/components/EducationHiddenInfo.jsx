/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import EducationForm from "./EducationForm";

function HiddenInfo({ name, icon, changeData, educationArray }) {
  // this state shows the edu-job single components or hide them;
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  // this state opens or close a form to add information;
  const [isFormOpen, setFormOpen] = useState(false);

  function handlePanelState() {
    setIsPanelOpen(!isPanelOpen);
  }
  function swapButtonForm() {
    setFormOpen(!isFormOpen);
  }

  // maping all education objects
  const educationList = educationArray.map((education) => (
    <li key={crypto.randomUUID()}>{education.degree}</li>
  ));

  return (
    <>
      {isPanelOpen ? (
        <div className="show-info">
          <div className="hidden-info" onClick={handlePanelState}>
            <div className="main-info">
              <img className="icons" src={icon} alt="img" />
              <h4>{name}</h4>
            </div>
            <img src=".././public/invisible.png" alt="img" className="icons" />
          </div>

          {isFormOpen ? (
            <EducationForm
              closeForm={swapButtonForm}
              changeData={changeData}
            ></EducationForm>
          ) : (
            <>
              {educationList}
              <button className="add-button" onClick={swapButtonForm}>
                + {name}
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="hidden-info" onClick={handlePanelState}>
          <div className="main-info">
            <img className="icons" src={icon} alt="img" />
            <h4>{name}</h4>
          </div>
          <img src=".././public/invisible.png" alt="img" className="icons" />
          <div></div>
        </div>
      )}
    </>
  );
}

export default HiddenInfo;
