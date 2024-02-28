/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */

// main person information
// displayed on top of the cv sheet
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
