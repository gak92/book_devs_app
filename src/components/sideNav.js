// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';


const Sidenav = () => {
  return (
    <nav className="sidenav">
        <ul>
            <li>
                <NavLink to="/" >
                    Developers
                </NavLink>
            </li>
            <li>
                <NavLink to="/login" >
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to="/register" >
                    Register
                </NavLink>
            </li>
            <li>
                <NavLink to="/adddeveloper">
                    Add Developer
                </NavLink>
            </li>
            <li>
                <NavLink to="/reservations">
                    My Reservations
                </NavLink>
            </li>
            <li>
                <NavLink to="/deletedeveloper">
                    Delete Developer
                </NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default Sidenav;