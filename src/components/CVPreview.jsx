/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import PersonalDetails from "./PersonalDetails";
function CVPreview({
  fullNameCV,
  adressCV,
  emailCV,
  phoneCV,
  education,
  jobsExperience,
}) {
  const listItems = education.map((product) => (
    <li key={product.id}>
      {product.school}
      {product.startDate}
    </li>
  ));

  return (
    <div className="cv-sheet">
      <div className="cv-header">
        <PersonalDetails
          name={fullNameCV}
          email={emailCV}
          address={adressCV}
          phone={phoneCV}
        />
      </div>
      <div className="main-cv">
        <div className="cv-education">
          <h3 className="cv-title-header">Education</h3>
        </div>
        <div className="cv-experience">
          <h3 className="cv-title-header">Professional Experience</h3>
        </div>
      </div>
      <div>{listItems}</div>
    </div>
  );
}

export default CVPreview;
