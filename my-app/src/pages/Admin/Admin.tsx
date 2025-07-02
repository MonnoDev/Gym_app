import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Admin.css';
import Nav from "../../components/Nav/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUsers, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Admin: React.FC = () => {

    return (
        <div>
            <Nav/>
            <div>
                <p>Gym admin panel</p>
            
                <div className="adminPanelItems">
                    <div className="adminBlue">
                        <Link to="/users">Manage Users</Link>
                        <FontAwesomeIcon icon={faUsers}/>
                    </div>
                    <div className="adminGreen">
                        <Link to="/createmembership">Create Membership</Link>
                        <FontAwesomeIcon icon={faDumbbell} />
                    </div>
                    <div className="adminPink">
                        <Link to="/createuser">Create User</Link>
                        <FontAwesomeIcon icon={faUserPlus}/>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Admin;
