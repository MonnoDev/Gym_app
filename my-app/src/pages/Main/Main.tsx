import React, { useEffect, useState } from "react";
import { getMemberships } from "../../api/membership";
import Loading from "../../components/Loading/Loading";
import { Membership } from "../../api/membership";
import Card from "../../components/Card/Card";
import HeroImage from "../../images/hero.jpg"
import Nav from "../../components/Nav/Nav";
import Information from "./MainSubPages/Information/Information";
import "./Main.css";
import Maps from "./MainSubPages/Maps/Maps";

const Main: React.FC = () => {
  const [membership, setMembership] = useState<Membership[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getMemberships()
      .then((response) => {
        setMembership(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Nav/>
      <div>
        <div className="heroImage">
        <img src={HeroImage} alt="Hero" />
        </div>
      </div>
      <Information/>

      <Maps/>

      {isLoading ? (
        <Loading message="Loading memberships..."  />
      ) : (
        <div className="memberhipCards">
          {membership.map((membershipItem, index) => ( 
            <Card key={index} membership={membershipItem} />
          ))}
        </div>
      )}
      </div>
  );
};

export default Main;
