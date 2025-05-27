import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../routes/const";
import Button from "../Button/Button";
import Gym from "../../images/Gym_.png";
import "./Nav.css"

  const Nav: React.FC = () => {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={Gym} alt="Gym" />
        </div>
        <div className="buttonContainer">
          <Button><Link to={LOGIN_ROUTE}>Log in</Link></Button>
          <Button><Link to={REGISTER_ROUTE}>Register</Link></Button>
        </div>
      </nav>
    );
  };
  
export default Nav;