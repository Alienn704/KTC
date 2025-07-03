import "./App.css";
import { ArrowRight } from "lucide-react";
import GetStartedButton from "./components/GetStartedButton";
import AppleButton from "./components/AppleButton";
import GoogleButton from "./components/GoogleButton";
import FacebookButton from "./components/FacebookButton";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <GetStartedButton />
        <AppleButton />
        <GoogleButton />
        <FacebookButton />

        {/* <ArrowRight color="red"/>
        <h1>Hello React!</h1>
        <img height={160} src="images\anh-mo-ta.jpg" alt="" />
        <img
          height={160}
          width={200}
          src="https://heucollege.edu.vn/upload/2025/02/avatar-hai-meme-9.webp"
          alt=""
        /> */}
      </div>

      <div>
        <Button label={"Get Started"} rightIcon={ArrowRight} />
        <Button leftIcon={1} label="Continue with Google" />
        <Button leftIcon={1} label="Continue with Apple" />
        <Button leftIcon={1} label="Continue with Facebook" />
      </div>
    </>
  );
}

export default App;
