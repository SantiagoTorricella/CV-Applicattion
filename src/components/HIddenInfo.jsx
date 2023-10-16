/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

function HiddenInfo({ name, icon }) {
  return (
    <>
      <div className="hidden-info">
        <div className="main-info">
          <img className="icons" src={icon} alt="img" />
          <h4>{name}</h4>
        </div>
        <img src=".././public/invisible.png" alt="img" className="icons" />
      </div>
    </>
  );
}

export default HiddenInfo;
