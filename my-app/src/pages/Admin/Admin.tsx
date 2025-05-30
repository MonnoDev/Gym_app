import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Admin: React.FC = () => {

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
