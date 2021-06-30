import "./topbar.scss";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            ariuka.
          </a>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://github.com/Ariuka11">Ariuka11</a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/ariunbold-oyungerel/">
              Ariunbold
            </a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ariun1118@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
