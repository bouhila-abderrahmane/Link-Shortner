import logo from "../../images/logo.svg";
import "./App"

import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <div className="headerContainer">
      <nav>
        <ul className="navBarContainer">
          <li><img src={logo} /></li>
          <li><a href="#features">Features </a></li>
          <li><a href="#resources">Pricing </a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </nav>
      <div className="headerButtonsContainer">
        <Button  variant="text" sx={{color: "grey" , ":hover":{color: "primary.main" , background:"white"}}}>Login</Button>
        <Button className="getStartedButton" style={{background:"primary.main"}} variant="contained">Sign Up</Button>
        
      </div>
      <IconButton className="menuIcon"><MenuIcon /></IconButton>
    </div>
  );
}
