import React from "react";
import { User } from "../../api/user";
import { Membership } from "../../api/membership";

type CardProps = {
  user?: User;
  membership?: Membership;
};

const Card: React.FC<CardProps> = ({ user, membership }) => {

  if (user) {

    const { fname, lname, email, info } = user;
    const membershipName = info && info.length > 0 ? info[0].name : "No Membership Info";

    return (
      <div className="cardContainer">
        <h2 className="cardTitle">{`${fname} ${lname}`}</h2>
        <p className="cardContent">Email: {email}</p>
        <p>Membership: {membershipName}</p>
      </div>
    );
  }

  if (membership) {
    const { name, price, descripcion } = membership;
    return (
      <div className="cardContainer">
        <h2 className="cardTitle">{name}</h2>
        <p className="cardContent">Price: {price}</p>
        <p className="cardContent">Description: {descripcion}</p>
      </div>
    );
  }

  return null;
};

export default Card;
