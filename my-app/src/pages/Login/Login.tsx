import React, { useState } from "react";
import { User, getUsers } from "../../api/user";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
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
          setUser(existingUser);
          localStorage.setItem("user", JSON.stringify(existingUser));
          setError("");
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

        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            }}
          >
            Cancel
          </button>
          <button type="submit" className="blue">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
