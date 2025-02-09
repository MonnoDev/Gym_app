import React from "react";
import { User } from "../../api/user";
import { Membership } from "../../api/membership";

import "./Card.css"

type CardProps = {
  user?: User;
  membership?: Membership;
};

const Card: React.FC<CardProps> = ({ user, membership }) => {

  if (user) {

    const { fname, lname, email, phoneNumber, dateOfBirth, gender, city, address, bankAccount, password, info } = user;
    const membershipName = info && info.length > 0 ? info[0].name : "No Membership Info";

    return (
      <div className="container">
      <div className="cardContainer">
        <h2 className="cardTitle">{`${fname} ${lname}`}</h2>
        <p className="cardContent">Email: {email}</p>
        <p >Phone number: {phoneNumber}</p>
        <p >Date of birth: {dateOfBirth}</p>
        <p >Gender: {gender}</p>
        <p >City: {city}</p>
        <p >Adress: {address}</p>
        <p >Password: {password}</p>
        <p >Repeat password: {password}</p>
        <p >Bank account: {bankAccount}</p>
        <p>Membership: {membershipName}</p>
      </div>
      </div>
    );
  }

  if (membership) {
    const { name, price, descripcion } = membership;
    return (
      <div className="container">
      <div className="cardContainer">
        <h2 className="cardTitle">{name}</h2>
        <p className="cardContent">Price: {price}</p>
        <p className="cardContent">Description: {descripcion}</p>
      </div>
      </div>
    );
  }

  return null;
};

export default Card;
