/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import './styles.css';
import { fetchDevelopersDetails } from '../store/developersDetails/developersDetails';

const DevDtails = () => {
  const dispatch = useDispatch();
  const { dId } = useParams();
  const devDetails = useSelector((state) => state.developerDetails.developersDetails.find((devDetails) => devDetails.id === Number(dId)));

  useEffect(() => {
    dispatch(fetchDevelopersDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!devDetails) {
    return (
      <div className="content">
        <h3>Not Found</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <br />
      <br />
      <div className="row">
        <div className="col-lg-6 col-sm-5 devImage d-flex justify-content-center align-items-center">
          <img
            width="60%"
            src={devDetails.image}
            alt="Developer"
            style={{
              borderRadius: '50%', width: '300px', height: '300px', objectFit: 'cover',
            }}
          />
        </div>
        <div className="col-lg-6 col-sm-7 devDetails">
          <h3>
            { devDetails.name }
          </h3>
          <h4>
            { devDetails.title }
            <hr />
          </h4>
          <p>
            { devDetails.description }
          </p>
          <p>
            Expected Salary :
            { devDetails.salary_exp }
          </p>
          <hr />
          <br />
          <div className="row rating">
            <CircularProgressbar
              value={(devDetails.rating / 5) * 100}
              text={`${(devDetails.rating / 5) * 100}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: '#96bf10',
                textColor: '#fff',
                pathColor: '#fff',
                trailColor: 'transparent',
              })}
            />
          </div>
          <p> Developer Evaluation</p>
          <hr />
          <Link to="add_reservation" relative="path">
            <button type="button" className="btn" style={{ backgroundColor: '#96bf10', color: '#fff' }}>
              Reserve
              {' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevDtails;
