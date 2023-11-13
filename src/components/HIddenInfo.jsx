/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import EducationForm from "./EducationForm";

/=== SECTION ON EDUCATION-EXPERIENCE THAT SHOWS THEM OR HIDE THEM, AND CAN OPEN A FORM TO ADD MORE ===/;
function HiddenInfo({ name, icon }) {
  /this state shows the edu-job single components or hide them/;
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  /this state opens or close a form to add information/;
  const [isFormOpen, setFormOpen] = useState(false);

  function handlePanelState() {
    setIsPanelOpen(!isPanelOpen);
  }
  function swapButtonForm() {
    setFormOpen(!isFormOpen);
  }

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
            <EducationForm closeForm={swapButtonForm}></EducationForm>
          ) : (
            <button className="add-button" onClick={swapButtonForm}>
              + {name}
            </button>
          )}
        </div>
      ) : (
        <div className="hidden-info" onClick={handlePanelState}>
          <div className="main-info">
            <img className="icons" src={icon} alt="img" />
            <h4>{name}</h4>
          </div>
          <img src=".././public/invisible.png" alt="img" className="icons" />
        </div>
      )}
    </>
  );
}

export default HiddenInfo;
