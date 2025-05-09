import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, getUser } from "../../api/user";
import CreateMembership from "../CreateMembership/CreateMembership";
import CreateUser from "../CreateUser/CreateUser";
import Users from "../Users/Users";

const Admin: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const id = sessionStorage.getItem("userId");
        const admin = sessionStorage.getItem("admin");

        if (id && admin === "true") {
            getUser(id)
                .then((userData) => {
                    const fetchedUser = userData[0];
                    setUser(fetchedUser);
                })
                .catch((err) => {
                    console.log('Failed to fetch');
                    navigate("/");
                });
        } else {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <p>Admin Panel</p>
            <ul>
                    <li><Link to="/users">Manage Users</Link></li>
                    <li><Link to="/createmembership">Create Membership</Link></li>
                    <li><Link to="/createuser">Create User</Link></li>
            </ul>
        </div>
    );
};

export default Admin;
