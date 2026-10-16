
import "./App.css"

//MUI
import Button from "@mui/material/Button";

//ASSETS
import illustration from "../../images/illustration-working.svg"

export default function Hero() {
  return (
    <section id="features" className="heroContainer">
      <div className="heroTextContainer">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button className="getStartedButton heroButton" variant="contained" > Get Started</Button>
      </div>
      <img src={illustration} className="heroImg" />
    </section>
  );
}
