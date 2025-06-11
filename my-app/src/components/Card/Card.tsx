import React from "react";
import { User, deleteUser } from "../../api/user";
import { Membership } from "../../api/membership";

import "./Card.css";
import Button from "../Button/Button";

type CardProps = {
  user?: User;
  membership?: Membership;
  onDelete?: (id: string) => void;
};

const Card: React.FC<CardProps> = ({ user, membership, onDelete }) => {

  const handleDelete = async () => {
    if (user?._id) {
      try {
        await deleteUser(user._id);
        if (onDelete) {
          onDelete(user._id);
        }
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    }
  };

  if (user) {
    const { fname, lname, email, phoneNumber, dateOfBirth, gender, city, address, password, info } = user;
    const membershipName = info && info.length > 0 ? info[0].name : "No Membership Info";

    return (
      <div className="container">
        <div className="cardContainer">
          <h2 className="cardTitle">{`${fname} ${lname}`}</h2>
          <p className="cardContent">Email: {email}</p>
          <p>Phone number: {phoneNumber}</p>
          <p>Date of birth: {dateOfBirth}</p>
          <p>Gender: {gender}</p>
          <p>City: {city}</p>
          <p>Address: {address}</p>
          <p>Password: {password}</p>
          <p>Repeat password: {password}</p>
          <p>Membership: {membershipName}</p>
        </div>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    );
  }

  if (membership) {
    const { name, price, descripcion } = membership;
    return (
      <div className="containerMembership">
        <div className="cardContainer">
          <h2 className="cardTitle">{name}</h2>
          <p className="price">Price: {price}</p>
          <p className="desc">Description: {descripcion}</p>
          <Button>Register now</Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Card;
