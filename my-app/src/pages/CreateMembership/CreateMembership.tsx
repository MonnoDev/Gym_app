import React, { useState } from "react";
import { postMembership } from "../../api/membership";
import { Membership } from "../../api/membership";

const CreateMembership: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMembership: Membership = {
      name,
      price,
      descripcion,
    };
    
    try {
      await postMembership(newMembership);
      setName("");
      setPrice("");
      setDescripcion("");
    } catch (err) {
      console.log("Error creating user:", err);
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name<span>*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="price">
          Price<span>*</span>
        </label>
        <input
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label htmlFor="descripcion">
          Descripcion<span>*</span>
        </label>
        <input
          type="descripcion"
          name="descripcion"
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />

        <div className="buttons">
          <button
            type="button"
            className="white"
            onClick={() => {
            }}
          >
            Cancel
          </button>
          <button type="submit" className="blue">
            New Membership
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMembership;
