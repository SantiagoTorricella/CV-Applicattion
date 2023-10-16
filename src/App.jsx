/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import "./styles/App.css";
import HiddenInfo from "./components/HIddenInfo";
import InputText from "./components/InputText";
import CVPreview from "./components/CVPreview";

function App() {
  return (
    <div className="app">
      <div className="details">
        <div className="personal-details">
          <h3>Personal Details</h3>
          <InputText name="Fullname" placeholder="Gordon Freeman" />
          <InputText name="Email" placeholder="GFreeman@Blackmesa.org" />
          <InputText name="Adress" placeholder="Confidential" />
          <InputText name="Phone" placeholder="Confidential" />
        </div>
        <HiddenInfo
          name="Education"
          icon={".././public/mortarboard.png"}
        ></HiddenInfo>
        <HiddenInfo
          name="Experience"
          icon={".././public/suitcase.png"}
        ></HiddenInfo>
      </div>
      <CVPreview />
    </div>
  );
}

export default App;
