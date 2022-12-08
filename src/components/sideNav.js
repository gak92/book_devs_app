// @flow
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userLogout } from '../store/user/auth';

const Sidenav = () => {
  const userAuth = localStorage.getItem('userAuth');
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.authentication);

  const logoutUser = () => {
    dispatch(userLogout(userAuth));
  };

  return (
    <nav className="sidenav">
      <ul>
        <li>
          <NavLink to="/">
            Developers
          </NavLink>
        </li>
        {authState.loggedIn ? (
          <li>
            <NavLink to="/login" onClick={() => logoutUser()}>
              Logout
            </NavLink>
          </li>
        )
          : (
            <>
              <li>
                <NavLink to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
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
