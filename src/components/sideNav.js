// @flow
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userLogout } from '../store/user/auth';


const Sidenav = () => {
	const authuser = localStorage.getItem('userAuth');
	const dispatch = useDispatch();

  return (
    <nav className="sidenav">
        <ul>
            <li>
                <NavLink to="/" >
                    Developers
                </NavLink>
            </li>
						{authuser ? 
							(<li>
                <NavLink to="/login" onClick={() => dispatch(userLogout(authuser))} >
                    Logout
                </NavLink>
            	</li>) 
							: 
							(<>
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
							</>)
						}
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