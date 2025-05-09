import React, { useState } from "react";
import { User, getUsers } from "../../api/user";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [error, setError] = useState<string>("");

  const checkUser = (users: User[], checkingUser: { email: string; password: string }) => {
    return users.find(
      (u) => u.email === checkingUser.email && u.password === checkingUser.password
    );
  };

  const onLogin = (checkingUser: { email: string; password: string }) => {
    getUsers()
      .then((allUsers: User[]) => {
        const existingUser = checkUser(allUsers, checkingUser);
        if (existingUser) {
          if (existingUser._id && existingUser.admin) {
            const id: string = existingUser._id;
            const admin: string = existingUser.admin;
            sessionStorage.setItem("userId", id);
            sessionStorage.setItem("admin", admin)
            console.log("Logged in user ID:", id);
          } 
          if (existingUser._id && !existingUser.admin){
            const id: string = existingUser._id;
            sessionStorage.setItem("userId", id);
            console.log("Logged in user ID:", id);
          }        
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const checkingUser = { email, password };
    onLogin(checkingUser);
  };

  return (
    <div className="card">
      {error && <div style={{ color: "red" }}>{error}</div>}

      <form onSubmit={onSubmitHandler}>
        <Form
          label="Email adress"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="buttons">
          <Button
            children="Cancel"
            onClick={() => {
              setEmail("");
              setPassword("");
              setError("");
            }}
          />
          <Button
          children="Log in"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
