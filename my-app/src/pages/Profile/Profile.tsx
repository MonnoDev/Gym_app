import React, { useEffect, useState } from "react";
import { User, getUser} from "../../api/user";
import { Membership, getMembershipById } from "../../api/membership";
import './Profile.css'


const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>();
    const [membership, setMembership] = useState<Membership | null>();

    useEffect(() => {
        const id = sessionStorage.getItem("userId");
      
        if (id) {
          getUser(id)
            .then((userData) => {
              const fetchedUser = userData[0];
              setUser(fetchedUser);
      
              if (fetchedUser?.service_id) {
                getMembershipById(fetchedUser.service_id)
                  .then((membershipData) => setMembership(membershipData))
                  .catch((err) => console.error("Failed to fetch membership", err));
              }
            })
            .catch((err) => console.error("Failed to fetch user", err));
        }
      }, []);
      


    if(!user) return <p>Loading user data</p>

    return(
        <div>
            <h1>Hello, {user.fname}!</h1>
        <div className="profileCard">

        <div className="personalDetailsCard">
            <p>First name: {user.fname}</p>
            <p>Last name: {user.lname}</p>
            <p>Date of birth: {user.dateOfBirth}</p>
            <p>Gender: {user.gender}</p>
        </div>

        <div className="contactDeatilsCard">
            <p>Email: {user.email}</p>
            <p>Phone number: {user.phoneNumber}</p>
            <p>City: {user.city}</p>
            <p>Adress: {user.address}</p>
        </div>

        <div className="membershipDetailsCard">
            <p>Membership name: {membership?.name}</p>
            <p>Monthly membership price: {membership?.price}€</p>
        </div>
      </div> 
      </div>
    )
    
};


export default Profile;
