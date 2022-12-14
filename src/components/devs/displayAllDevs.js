import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import DevelopersComponent from './developersComponent';
import { getDevelopers } from '../../store/developers';

function DisplayAllDevs() {
  const dispatch = useDispatch();

  const userAuth = localStorage.getItem('userAuth');

  const fetchDevelopers = async () => {
    const response = await axios
      .get('http://127.0.0.1:3000/api/v1/developers',
        {
          headers: {
            Authorization: userAuth,
          },
        })
      .then((res) => res.data)
      .catch((error) => error.message);
    dispatch(getDevelopers(response));
  };

  useEffect(() => {
    fetchDevelopers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content">
      <h1>Here is Developers listing...</h1>
      <div className="d-flex">
        <DevelopersComponent />
      </div>
    </div>
  );
}

export default DisplayAllDevs;
