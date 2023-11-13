/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
function EducationCard({ schoolName, degree, startDate, endDate, location }) {
  return (
    <div className="education-card">
      <div className="education-date-location-info">
        <div className="education-date">
          <p>{startDate}-</p>
          <p>{endDate}</p>
        </div>
        <p>{location}</p>
      </div>
      <h3>{schoolName}</h3>
      <p>{degree}</p>
    </div>
  );
}

export default EducationCard;
