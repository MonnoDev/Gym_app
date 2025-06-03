import React, { useState, useEffect } from "react";
import { User, getUsers } from "../../api/user";
import { useNavigate, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import Form from "../../components/Form/Form";
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const checkUser = (users: User[], checkingUser: { email: string; password: string }) => {
    return users.find(
      (u) => u.email === checkingUser.email && u.password === checkingUser.password
    );
  };


    useEffect(() => {
    if (loggedInUser) {
      sessionStorage.setItem("userId", loggedInUser._id!);
      sessionStorage.setItem("admin", loggedInUser.admin?.toString() || "false");

      if (loggedInUser.admin) {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    }
  }, [loggedInUser]);

  const onLogin = (checkingUser: { email: string; password: string }) => {
    getUsers()
      .then((allUsers: User[]) => {
        const existingUser = checkUser(allUsers, checkingUser);
        if (existingUser) {
          setLoggedInUser(existingUser);
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
        <Form
            label='Email'
            placeholder="Enter your Email"
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <Form
            label='Password'
            placeholder="Enter your Password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />

        <div className="flex-row">
          <div>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label>Remember me</label>
          </div>
          <span className="span"><Link to="/forgotPassword">Forgot password?</Link></span>
        </div>

        <button className="button-submit" type="submit">Sign In</button>
        {error && <p className="error">{error}</p>}

        <p className="p">Don't have an account? <span className="span"><Link to="/register">Sign Up</Link></span></p>
        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google" type="button">
            <FontAwesomeIcon icon={faGoogle} />
            Google
          </button>
          <button className="btn apple" type="button">
            <FontAwesomeIcon icon={faApple} />
            Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
