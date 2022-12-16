import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import DeveloperCard from './developerCard';
import { getDevelopers } from '../../store/developers';

function DisplayAllDevs() {
  const dispatch = useDispatch();

  const userAuth = localStorage.getItem('userAuth');

  const navigate = useNavigate();

  if (!userAuth) {
    navigate('/login');
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 1050, itemsToShow: 3 },
  ];
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
    dispatch(getDevelopers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const developers = useSelector((state) => state.developer.developers);

  return (
    <section>
      <div>
        <h4 className="text-center my-5"><b>OUR DEVELOPERS</b></h4>
        <Carousel className="cards-container" breakPoints={breakPoints}>
          {developers.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default DisplayAllDevs;
