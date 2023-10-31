/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";

function HiddenInfo({ name, icon }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  function handlePanelState() {
    setIsPanelOpen(!isPanelOpen);
  }
  function sayHello() {
    console.log("hello");
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
          <button className="add-button" onClick={sayHello}>
            + {name}
          </button>
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
