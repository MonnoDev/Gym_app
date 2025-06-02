import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Admin.css';
import Nav from "../../components/Nav/Nav";

const Admin: React.FC = () => {

    return (
        <div>
            <Nav/>
            <p>Gym admin panel</p>
            <ul className="adminPanelItems">
                    <li><Link to="/users">Manage Users</Link></li>
                    <li><Link to="/createmembership">Create Membership</Link></li>
                    <li><Link to="/createuser">Create User</Link></li>
            </ul>
        </div>
    );
};

export default Admin;
