import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';
import { userLogout } from '../store/user/auth';
import '../App.css';

const Sidenav = () => {
  const userAuth = localStorage.getItem('userAuth');
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.authentication);

  const logoutUser = () => {
    dispatch(userLogout(userAuth));
  };

  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar className="sidebar" textColor="#000">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Book a Developer
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {userAuth || authState.loggedIn ? (
              <>
                <NavLink exact to="/">
                  <CDBSidebarMenuItem icon="user">
                    DEVELOPERS
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to="/reservations"
                >
                  <CDBSidebarMenuItem icon="calendar">
                    MY RESERVATIONS
                  </CDBSidebarMenuItem>
                </NavLink>
                {authState.admin ? (
                  <>
                    <NavLink
                      exact
                      to="/adddeveloper"
                    >
                      <CDBSidebarMenuItem icon="plus">
                        ADD DEVELOPER
                      </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                      exact
                      to="/deletedeveloper"
                    >
                      <CDBSidebarMenuItem icon="trash">
                        DELETE DEVELOPER
                      </CDBSidebarMenuItem>
                    </NavLink>
                  </>
                ) : null}
                <NavLink exact to="/login">
                  <CDBSidebarMenuItem
                    icon="lock"
                    onClick={logoutUser}
                    backgroundColor="#f44336"
                  >
                    Logout
                  </CDBSidebarMenuItem>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink exact to="/home">
                  <CDBSidebarMenuItem icon="home">HOME</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/login">
                  <CDBSidebarMenuItem icon="key">LOGIN</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/register">
                  <CDBSidebarMenuItem icon="user-plus">
                    REGISTER
                  </CDBSidebarMenuItem>
                </NavLink>
              </>
            )}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            {authState.loggedIn ? (
              <div>
                <div>
                  <strong>{authState.name}</strong>
                </div>
                <div>
                  <small>{authState.email}</small>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <strong>Guest</strong>
                </div>
              </div>
            )}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidenav;
