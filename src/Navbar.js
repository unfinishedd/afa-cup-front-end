import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EqualizerSharpIcon from '@mui/icons-material/EqualizerSharp';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HubIcon from '@mui/icons-material/Hub';
import InfoIcon from '@mui/icons-material/Info';

const Navbar1 = () => {
  return (
    <Navbar
      className="color-nav"
      variant="light"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Link to="/">
        <Navbar.Brand><HomeIcon />Home</Navbar.Brand>
      </Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="color-nav-link">
        <hr></hr>
          <Nav.Link href="/teams"><GroupsIcon />  Teams</Nav.Link><hr></hr>
          <Nav.Link href="/map"><LocationOnIcon />   Map </Nav.Link><hr></hr>
          <Nav.Link href="/tournament"><EmojiEventsIcon />   Tournament</Nav.Link><hr></hr>
          <Nav.Link href="/statistics"><EqualizerSharpIcon />   Statistics</Nav.Link><hr></hr>
          <Nav.Link href="/champions"><MilitaryTechIcon />   Champions</Nav.Link><hr></hr>
          <Nav.Link href="/sponsors"><HubIcon />   Sponsors</Nav.Link><hr></hr>
          <Nav.Link href="/about"><InfoIcon />   About</Nav.Link><hr></hr>
          <Nav.Link href="/admin"><AdminPanelSettingsIcon />   Admin</Nav.Link><hr></hr>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;
