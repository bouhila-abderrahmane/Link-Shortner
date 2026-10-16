import "./App"

import StatCard from "./StatCard";

import Brand from "../../images/icon-brand-recognition.svg";
import detailed from "../../images/icon-detailed-records.svg";
import fully from "../../images/icon-fully-customizable.svg";
import LInks from "./Links";

export default function Stat() {
  return (
    <div className="statContainer">
      <LInks />
      <div className="statHeaderContainer">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          Statistics dashboard.
        </p>
      </div>

      <div className="statCardsContainer">
        <hr />
        <div>
          <StatCard
            img={Brand}
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
        </div>
        <div className="secondCard">
          <StatCard
            img={detailed}
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>
        <div className="thirdCard">
          <StatCard
            img={fully}
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
}
