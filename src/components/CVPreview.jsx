/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";

function CVPreview() {
  const [name, setName] = useState("");
  return (
    <div className="cv-sheet">
      <div className="cv-header">
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div className="cv-education"></div>
      <div className="cv-experience"></div>
    </div>
  );
}

export default CVPreview;
