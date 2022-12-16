import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
