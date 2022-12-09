// @flow
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userLogout } from '../store/user/auth';
import Logo from '../logo.png';

const Sidenav = () => {
  const userAuth = localStorage.getItem('userAuth');
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.authentication);

  const logoutUser = () => {
    dispatch(userLogout(userAuth));
  };

  return (
    <nav className="sidebar">
      <div className="logo">
        <img width="30%" src={Logo} alt="Logo" />
        <hr />
      </div>
      <NavLink to="/">Home Page</NavLink>
      {authState.loggedIn ? (
        <>
          <NavLink to="/developers">Developers</NavLink>
          <NavLink to="/adddeveloper">Add Developer</NavLink>
          <NavLink to="/reservations">My Reservations</NavLink>
          <NavLink to="/deletedeveloper">Delete Developer</NavLink>
          <NavLink to="/login" onClick={() => logoutUser()}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </nav>
  );
};

export default Sidenav;
