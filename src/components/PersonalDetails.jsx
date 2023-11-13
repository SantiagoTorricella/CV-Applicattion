/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

/=== TAKES NAME,EMAIL,ADRESS,AND NUMBER AND DISPLAY IT ON CV-HEADER ===/;
function PersonalDetails({ name, email, address, phone }) {
  return (
    <div className="cv-header-details">
      <h1>{name}</h1>
      <div className="contact-info">
        {email && (
          <div>
            <p>{email}</p>
          </div>
        )}
        {address && (
          <div>
            <p>{address}</p>
          </div>
        )}
        {phone && (
          <div>
            <p>{phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalDetails;
