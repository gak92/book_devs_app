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

  const sideNavDataGuest = [
    {
      id: 1, name: 'HOME', icon: 'home', link: '/home',
    },
    {
      id: 2, name: 'LOGIN', icon: 'key', link: '/login',
    },
    {
      id: 3, name: 'REGISTER', icon: 'user-plus', link: '/register',
    },
  ];

  const sideNavDataAdmin = [
    {
      id: 1, name: 'DEVELOPERS', icon: 'user', link: '/',
    },
    {
      id: 2, name: 'MY RESERVATIONS', icon: 'calendar', link: '/reservations',
    },
    {
      id: 3, name: 'ADD DEVELOPER', icon: 'plus', link: '/adddeveloper',
    },
    {
      id: 4, name: 'DELETE DEVELOPER', icon: 'trash', link: '/deletedeveloper',
    },
    {
      id: 5, name: 'Logout', icon: 'lock', link: '/login', onClick: logoutUser,
    },
  ];

  const sideNavDataUser = [
    {
      id: 1, name: 'DEVELOPERS', icon: 'user', link: '/',
    },
    {
      id: 2, name: 'MY RESERVATIONS', icon: 'calendar', link: '/reservations',
    },
    {
      id: 3, name: 'Logout', icon: 'lock', link: '/login', onClick: logoutUser,
    },
  ];

  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar className="sidebar" textColor="#000">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
          <a
            href="/"
            className="text-decoration-none brand"
            style={{ color: 'inherit' }}
          >
            BookaDeV
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {userAuth || authState.loggedIn ? (
              <>
                {authState.admin ? (
                  <>
                    {sideNavDataAdmin.map((item) => (
                      <NavLink exact to={item.link} key={item.id}>
                        <CDBSidebarMenuItem
                          icon={item.icon}
                          onClick={item.onClick}
                          backgroundColor="#f44336"
                        >
                          {item.name}
                        </CDBSidebarMenuItem>
                      </NavLink>
                    ))}
                  </>
                ) : (
                  <>
                    {sideNavDataUser.map((item) => (
                      <NavLink exact to={item.link} key={item.id}>
                        <CDBSidebarMenuItem
                          icon={item.icon}
                          onClick={item.onClick}
                          backgroundColor="#f44336"
                        >
                          {item.name}
                        </CDBSidebarMenuItem>
                      </NavLink>
                    ))}
                  </>
                )}
              </>
            ) : (
              <>
                {sideNavDataGuest.map((item) => (
                  <NavLink exact to={item.link} key={item.id}>
                    <CDBSidebarMenuItem
                      icon={item.icon}
                      onClick={item.onClick}
                      backgroundColor="#f44336"
                    >
                      {item.name}
                    </CDBSidebarMenuItem>
                  </NavLink>
                ))}
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
