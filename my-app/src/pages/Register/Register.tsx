import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, getUsers, postUsers } from "../../api/user";
import { getMemberships } from "../../api/membership";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import '../Login/Login.css';
import './Register.css';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [gender, setGender] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [membershipName, setMembershipName] = useState<string>("");
  const [memberships, setMemberships] = useState<any[]>([]);

  useEffect(() => {
    getMemberships()
      .then((response) => {
        setMemberships(response);
      })
      .catch((err) => {
        setError("Error fetching memberships: " + err.message);
      });
  }, []);

  const doesUserExist = (users: User[], email: string) => {
    return users.some((u) => u.email === email);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  const onRegister = async () => {
    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

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
        fname,
        lname,
        phoneNumber,
        dateOfBirth: dateOfBirth ? format(dateOfBirth, "yyyy-MM-dd") : "",
        gender,
        city,
        address,
        service_id: membershipName,
      };

      const createdUser = await postUsers(newUser);
      sessionStorage.setItem("userId", createdUser._id!);
      setSuccess("User registered successfully.");
      setError("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      setFname("");
      setLname("");
      setPhoneNumber("");
      setDateOfBirth(null);
      setGender("");
      setCity("");
      setAddress("");
      setMembershipName("");

      navigate("/chekout");
    } catch (err: any) {
      setError(err.message || "An error occurred during registration.");
      setSuccess("");
    }
  };

  return (
    <div className="card">
      <form className="form" onSubmit={onSubmitHandler}>
        <Form 
          label="First Name" 
          placeholder="First Name" 
          className="input" 
          type="text" value={fname} 
          onChange={(e) => setFname(e.target.value)} 
          required 
          />
          
        <Form 
          label="Last Name" 
          placeholder="Last Name" 
          className="input" 
          type="text" 
          value={lname} 
          onChange={(e) => setLname(e.target.value)} 
          required 
          />

        <Form 
          label="Phone Number" 
          placeholder="Phone number" 
          className="input" 
          type="text" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          required 
          />

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date: Date | null) => setDateOfBirth(date)}
            dateFormat="yyyy-MM-dd"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="Select Date of Birth"
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">--Select Gender--</option>
            <option>Female</option>
            <option>Male</option>
            <option>Rather not say</option>
          </select>
        </div>

        <Form 
          label="City" 
          placeholder="City" 
          className="input" 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          required 
          />

        <Form 
          label="Address" 
          placeholder="Address" 
          className="input" 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
        />

        <div className="form-group">
          <label htmlFor="membershipName">Membership</label>
          <select id="membershipName" value={membershipName} onChange={(e) => setMembershipName(e.target.value)} required>
            <option value="">--Select Membership--</option>
            {memberships.map((membership) => (
              <option key={membership._id} value={membership._id}>
                {membership.name}
              </option>
            ))}
          </select>
        </div>

        <Form 
          label="Email" 
          placeholder="Email" 
          className="input" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <Form 
          label="Password" 
          placeholder="Password" 
          className="input" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <Form 
          label="Repeat Password" 
          placeholder="Repeat Password" 
          className="input" 
          type="password" 
          value={repeatPassword} 
          onChange={(e) => setRepeatPassword(e.target.value)} 
          required 
        />

        {error && <div style={{ color: "red" }}>{error}</div>}
        {success && <div style={{ color: "green" }}>{success}</div>}

        <div className="buttons">
          <Button
            children="Cancel"
            onClick={() => {
              setEmail(email);
              setPassword(password);
              setRepeatPassword("");
              setError("");
              setSuccess("");
              setFname("");
              setLname("");
              setPhoneNumber("");
              setDateOfBirth(null);
              setGender("");
              setCity("");
              setAddress("");
              setMembershipName("");
            }}
          />
          <Button children="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
