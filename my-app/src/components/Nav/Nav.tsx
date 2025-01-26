import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../routes/const";
import Button from "../Button/Button";
import Gym from "../../images/Gym_.png";
import "./Nav.css"

  const Nav: React.FC = () => {
    return (
      <div className="nav-container">
        <img src={Gym} alt="Gym" />
        <div>
            <Link to={LOGIN_ROUTE}>Log in</Link>
            <Link to={REGISTER_ROUTE}>Register</Link>
        </div>
      </div>
    );
  };
  
export default Nav;