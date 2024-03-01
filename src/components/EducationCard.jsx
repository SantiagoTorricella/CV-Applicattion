/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

function EducationCard(educations) {
  const educationCards = educations.map((education) => {
    <h3 key={crypto.randomUUID()}>{education.degree}</h3>;
  });

  return (
    <>
      <div>{educationCards}</div>
    </>
  );
}

export default EducationCard;
