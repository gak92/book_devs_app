/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postSignupDetails } from '../../store/user/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication);
  const navigate = useNavigate();

  const signupUser = (e) => {
    e.preventDefault();
    if (fullName === '' || email === '' || password === '') return;

    dispatch(postSignupDetails({
      fullName, email, password, confirmPassword,
    }));
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  if (user.signedUp) {
    navigate('/', { replace: true });
  }

  return (
    <section className="Auth-form-container" onSubmit={signupUser}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>

          <div className="text-center">
            Already registered?
            {' '}
            <span className="link-primary">
              <NavLink to="/login">
                Sign In
              </NavLink>
            </span>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              required
              id="fullname"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
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
              placeholder="Password"
              required
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Confirm Password"
              required
              id="confirm_password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </div>
      </form>
    </section>
  );
};

export default Register;
