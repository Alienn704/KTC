import "./App.css";
import CounterClick from "./components/CounterClick";
import InputFieldTracker from "./components/InputFieldTracker";
import ToggleSwitch from "./components/ToggleSwitch";
import HoverHighlight from "./components/HoverHighlight";
import FormSubmitAlert from "./components/FormSubmissionAlert";
import KeyPressDisplay from "./components/KeyPressDisplay";
import DoubleClickMessage from "./components/DoubleClickMessage";
import CheckboxToggle from "./components/CheckboxToggle";
import SearchFilter from "./components/SearchFilter";
import Calculator from "./components/Calculator/Calculator";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <div className="family">
      <CounterClick></CounterClick>
      <hr />
      <InputFieldTracker></InputFieldTracker>
      <hr />
      <ToggleSwitch></ToggleSwitch>
      <hr />
      <HoverHighlight></HoverHighlight>

      <hr />
      <FormSubmitAlert></FormSubmitAlert>
      <hr />
      <KeyPressDisplay></KeyPressDisplay>
      <hr />
      <DoubleClickMessage></DoubleClickMessage>
      <hr />
      <CheckboxToggle></CheckboxToggle>
      <hr />
      <SearchFilter></SearchFilter>
      <hr />
      <h3>Homework</h3>
      <section className="section">
        <Calculator></Calculator>
      </section>

      <hr />
      <h3>Homework_Ex2</h3>
      <section className="section">
        <RegistrationForm></RegistrationForm>
      </section>
    </div>
  );
}

export default App;
