import React, { useState } from "react";
import { User, getUsers, postUsers } from "../../api/user";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const doesUserExist = (users: User[], email: string) => {
    return users.some((u) => u.email === email);
  };

  const onRegister = async () => {
    try {
      const allUsers = await getUsers();
      if (doesUserExist(allUsers, email)) {
        setError("Email is already taken.");
        setSuccess("");
        return;
      }

      const newUser: User = {
        email,
        password,
      };

      const createdUser = await postUsers(newUser);
      localStorage.setItem("user", JSON.stringify(createdUser));
      setSuccess("User registered successfully.");
      setError("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message || "An error occurred during registration.");
      setSuccess("");
    }
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <div className="card">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">
          Email Address<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
            setSuccess("");
          }}
          required
        />

        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
            setSuccess("");
          }}
          required
        />

        <div className="buttons">
          <button
            type="button"
            className="white"
            onClick={() => {
              setEmail("");
              setPassword("");
              setError("");
              setSuccess("");
            }}
          >
            Cancel
          </button>
          <button type="submit" className="blue">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
