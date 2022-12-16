import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DevelopersComponent from './developersComponent';
import { getDevelopers } from '../../store/developers';

function DisplayAllDevs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevelopers());
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
