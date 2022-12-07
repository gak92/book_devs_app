import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postLoginDetails } from '../../store/user/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication);

  // console.log("user: ", user);

  const loginUser = (e) => {
    e.preventDefault();
    if(email === '' || password === '') return

    console.log("Email: ", email);
    console.log("Password: ", password);
    dispatch(postLoginDetails({email, password}));
    setEmail('');
    setPassword('');
  };

  if(user.loggedIn) {
    return <Navigate replace to="/" />;
  }

  return (
    <section className="Auth-form-container" onSubmit={loginUser}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
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

        </div>
      </form>
    </section>
  );
};

export default Login;