import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE } from "../../routes/const";
import Button from "../Button/Button";
import Gym from "../../images/Gym_.png";
import "./Nav.css";

const Nav: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminFlag = sessionStorage.getItem("admin");
    setIsAdmin(adminFlag === "true");
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Gym} alt="Gym" />
      </div>
      <div className="buttonContainer">
        {isAdmin ? (
          <>
            <Button onClick={() => {
              sessionStorage.removeItem("admin");
              window.location.reload();
            }}><Link to={MAIN_ROUTE}>Log out</Link></Button>
          </>
        ) : (
          <>
            <Link to={LOGIN_ROUTE}><Button>Log in</Button></Link>
            <Link to={REGISTER_ROUTE}><Button>Register</Button></Link>

          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
