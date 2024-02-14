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
  const educationItems = education.map((education) => (
    <li key={education.id}>
      {education.school}
      {education.degree}
      {education.startDate}
      {education.endDate}
      {education.location}
    </li>
  ));

  const jobItems = jobsExperience.map((job) => (
    <li key={job.id}>
      {job.companyName}
      {job.positionTitle}
      {job.startDate}
      {job.endDate}
      {job.location}
      {job.description}
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
          <div>{educationItems}</div>
        </div>
        <div className="cv-experience">
          <h3 className="cv-title-header">Professional Experience</h3>
          <div>{jobItems}</div>
        </div>
      </div>
    </div>
  );
}

export default CVPreview;
