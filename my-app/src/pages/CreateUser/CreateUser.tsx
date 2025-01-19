import React, { useEffect, useState } from "react";
import { postUsers } from "../../api/user";
import { getMemberships } from "../../api/membership";
import { User } from "../../api/user";
import { Membership } from "../../api/membership";

const CreateUser: React.FC = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [serviceId, setServiceId] = useState<string>("");

  const [memberships, setMemberships] = useState<Membership[]>([]);
  useEffect(() => {
    getMemberships()
      .then((response) => {
        setMemberships(response);
      })
      .catch((error) => {
        console.error("Error fetching memberships:", error);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      fname,
      lname,
      email,
      service_id: serviceId,
      info: [],
    };

    try {
      await postUsers(newUser);
      setFname("");
      setLname("");
      setEmail("");
      setServiceId("");
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">
        First Name<span>*</span>
        </label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />

        <label htmlFor="lname">
        Last Name<span>*</span>
        </label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />

        <label htmlFor="email">
        Email Address<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="service_id">
        Change Membership<span>*</span>
        </label>
        <select
          name="service_id"
          id="service_id"
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
          required
        >
          <option value="">--Please choose an option--</option>
          {memberships.map((membership) => (
            <option key={membership._id} value={membership._id}>
              {membership.name}
            </option>
          ))}
        </select>

        <div className="buttons">
          <button type="button" className="white" onClick={() => {}}>
            Cancel
          </button>
          <button type="submit" className="blue">
            New User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
