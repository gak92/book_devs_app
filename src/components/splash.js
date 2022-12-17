import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Splash() {
  return (
    <div className="home-page">
      <div className="home-page-content py-5">
        <h1
          className="text-center py-5"
          style={{ color: '#', textShadow: '2px 2px #000' }}
        >
          <b>Book a Developer</b>
        </h1>
        <p
          className="text-center mx-5 fs-3 fw-bold"
          style={{ color: '#96bf10', textShadow: '2px 2px #FFF' }}
        >
          Book a Developer is a web application that allow users to book a
          developer for a specific time and date. Users espectially recriuters
          can book a developer for an interview.
        </p>
      </div>
      <h3
        className="text-center my-3 fs-4 fw-bold"
        style={{ color: '#FFF', textShadow: '2px 2px #000' }}
      >
        Before you book a developer you must register or login
      </h3>
      {/* login or register buttons */}
      <div className=" d-flex justify-content-center">
        <div className="row">
          <div className="col-6">
            <NavLink
              to="/login"
              className="btn btn-block btn-outline"
              style={{ backgroundColor: '#96bf10', color: 'white' }}
            >
              Login
            </NavLink>
          </div>
          <div className="col-6">
            <NavLink
              to="/register"
              className="btn btn-block outline"
              style={{ backgroundColor: '#96bf10', color: 'white' }}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
