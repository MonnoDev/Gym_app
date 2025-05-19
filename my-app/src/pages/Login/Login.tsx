import React, { useState } from "react";
import { User, getUsers } from "../../api/user";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
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
          const id: string = existingUser._id!;
          sessionStorage.setItem("userId", id);
          sessionStorage.setItem("admin", existingUser.admin?.toString() || "false");
          if (existingUser.admin) {
            navigate("/admin");
          } else {
            navigate("/profile");
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
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Enter your Email"
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <input
            placeholder="Enter your Password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex-row">
          <div>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label>Remember me</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit" type="submit">Sign In</button>
        {error && <p className="error">{error}</p>}

        <p className="p">Don't have an account? <span className="span">Sign Up</span></p>
        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google" type="button">
            Google
          </button>
          <button className="btn apple" type="button">
            Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
