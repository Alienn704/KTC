import Button from "./components/Button";
import { Search, SlidersHorizontal, Phone, CircleEqual } from "lucide-react";
import "./App.css";
import ScoreButton from "./components/ScoreButton";
import ManchesterButton from "./components/ManchesterButton";
import CardButton from "./components/CardButton";
import DashboardButton from "./components/DashboardButton";
import InfoButton from "./components/InfoButton";
import CallButton from "./components/CallButton";
import TeamButton from "./components/TeamButton";

function App() {
  return (
    <div className="container">
      <section className="section">
        <h2>Bai 2</h2>
        <Button leftIcon={<Search size={20} />} />
        <Button leftIcon={<Search size={20} />} placeholderText="Search" />
        <Button leftIcon={<Search size={20} />} text="Textfield" />
        <Button
          leftIcon={<Search size={20} />}
          placeholderText="Search in the web"
          rightIcon={<CircleEqual size={20} />}
        />
        <Button
          leftIcon={<Search size={20} />}
          placeholderText="Search crypto"
          rightIcon={<SlidersHorizontal size={20} />}
        />
        <Button
          placeholderText="Phone number"
          rightIcon={
            <span
              style={{
                backgroundColor: "#00fa1d",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Phone size={20} />
            </span>
          }
        />
        <Button
          leftIcon={<Search size={20} />}
          placeholderText="Search in the web"
          rightIcon={
            <span
              style={{
                backgroundColor: "#fafa00",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircleEqual size={20} />
            </span>
          }
        />
      </section>

      <section className="section">
        <h2>Bai 3</h2>
        <ScoreButton></ScoreButton>
        <ManchesterButton></ManchesterButton>
        <CardButton></CardButton>
        <DashboardButton></DashboardButton>
      </section>
      <section className="section">
        <h2>Bai 4</h2>
        <InfoButton></InfoButton>
        <CallButton></CallButton>
      </section>

      <section className="section">
        <TeamButton
          avt={["images/avt2.png"]}
          name="Miriam Jimenez"
          color="#12c0e7"
        />
        <TeamButton
          avt={["images/avt4.png", "images/avt5.png", "images/avt6.png"]}
          name="Teams"
          subtitle="Two currently"
          color="#740ef5"
        />
        <TeamButton
          avt={["images/avt7.png", "images/avt8.png"]}
          name="New Teams"
          color="#fff614"
        />
      </section>
    </div>
  );
}

export default App;
