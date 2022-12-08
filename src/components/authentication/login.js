/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postLoginDetails } from '../../store/user/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    if (email === '' || password === '') return;

    dispatch(postLoginDetails({ email, password }));
    setEmail('');
    setPassword('');
  };

  if (user.loggedIn) {
    navigate('/', { replace: true });
  }

  return (
    <section className="Auth-form-container" onSubmit={loginUser}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          {/* if there is error when signing in */}
          {user.error && (
            <div className="alert alert-danger" role="alert">
              {user.error.message === 'Request failed with status code 401' ? (
                <p>Invalid email or password</p>
              ) : (
                <p>{user.error.message}</p>
              )}
            </div>
          )}

          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <div className="text-center mt-3">
            Don&apos;t have an account?
            {' '}
            <span className="link-primary">
              <NavLink to="/register">
                Sign Up
              </NavLink>
            </span>
          </div>

        </div>
      </form>
    </section>
  );
};

export default Login;
