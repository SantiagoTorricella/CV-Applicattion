/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import PersonalDetails from "./PersonalDetails";
function CVPreview({ fullNameCV }) {
  return (
    <div className="cv-sheet">
      <div className="cv-header">
        <PersonalDetails name={fullNameCV} />
      </div>
      <div className="cv-education"></div>
      <div className="cv-experience"></div>
    </div>
  );
}

export default CVPreview;
