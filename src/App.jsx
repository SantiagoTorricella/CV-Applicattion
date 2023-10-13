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
          <InputText name={"Fullname"} />
          <InputText name={"Email"} />
          <InputText name={"Adress"} />
          <InputText name={"Phone"} />
        </div>
        <HiddenInfo
          name={"Education"}
          icon={".././public/mortarboard.png"}
        ></HiddenInfo>
        <HiddenInfo
          name={"Experience"}
          icon={".././public/suitcase.png"}
        ></HiddenInfo>
      </div>
      <CVPreview />
    </div>
  );
}

export default App;
