import "./App"


import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <section id="resources"  className="footerContainer">
      <img src={logo} className="footerLogo" />
      <div className="informationsContainer">
      <div className="informations">
        <div>
            <h3>Features</h3>
          <ul>
            <li className="listHover">Link Shortening</li>
            <li className="listHover">Branded Links</li>
            <li className="listHover">Analytics</li>
          </ul>
        </div>
        <div>
            <h3>Resources</h3>
          <ul>
            <li className="listHover">Blog</li>
            <li className="listHover">Developers</li>
            <li className="listHover">Support</li>
          </ul>
        </div>
        <div>
            <h3>Company</h3>
          <ul>
            <li className="listHover">About</li>
            <li className="listHover">Our Team</li>
            <li className="listHover">Careers</li>
            <li className="listHover">Contact</li>
          </ul>
        </div>
      </div>
      <div className="contact">
        <img src={facebook} />
        <img src={twitter} />
        <img src={pinterest} />
        <img src={instagram} />
      </div>
      </div>
    </section>
  );
}
