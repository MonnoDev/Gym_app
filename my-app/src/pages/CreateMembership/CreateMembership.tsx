import React, { useState } from "react";
import { postMembership } from "../../api/membership";
import { Membership } from "../../api/membership";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

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
        <Form
          label="Name"
          placeholder="Name"
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Form
          label="Price"
          placeholder="Price"
          className="input"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <Form
          label="Descripcion"
          placeholder="Descripcion"
          className="input"
          type="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <div className="buttons">
          <Button
            children="Cancel"
            onClick={() => {
            }}
          />
          <Button
            children="New Membership"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateMembership;
