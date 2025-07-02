import React from "react";
import Gym from "../../images/Gym_.png";
import "./Footer.css";

const Footer: React.FC = () => {


  return (
    <div className="mainFooterContainer">
        <div className="mainInfo">
            <img src={Gym} alt="Gym" />
            <div>Number:</div>
            <div>Email:</div>
        </div>

        <div className="importInfo">
            <div>Prices</div>
            <div>Locations of the gyms</div>
            <div>FAQ </div>
            <div>T&C</div>
            <div>Contacts</div>
        </div>

        <div className="socialsInfo">
            <div>Instagram</div>
            <div>Facebook</div>
            <div>Youtube</div>
        </div>

        <div className="createdInfo">
            <div>2025</div>
            <div>Created by: MonoDev</div>
        </div>

    </div>

  );
};

export default Footer;