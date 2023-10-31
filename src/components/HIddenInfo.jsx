/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import EducationForm from "./EducationForm";

function HiddenInfo({ name, icon }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [isFormOpen, setFormOpen] = useState(false);

  function handlePanelState() {
    setIsPanelOpen(!isPanelOpen);
  }
  function handleForm() {
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
            <EducationForm closeForm={handleForm}></EducationForm>
          ) : (
            <button className="add-button" onClick={handleForm}>
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
