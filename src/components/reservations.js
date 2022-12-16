import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MDBCard, MDBCardBody, MDBCardImage, MDBIcon,
} from 'mdb-react-ui-kit';
import { fetchReservations, deleteReservation } from '../store/reservations/reservations';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);

  const reservationStatus = useSelector((state) => state.reservations.status);
  const authState = useSelector((state) => state.authentication);
  const userAuth = localStorage.getItem('userAuth');

  useEffect(() => {
    dispatch(fetchReservations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };

  return (
    <>
      { (userAuth || authState.loggedIn) ? (
        <div className="overflow-scroll vh-100">
          <div className="d-flex justify-content-between flex-wrap mt-5 mx-5 gap-4 align-items-center">
            { (reservationStatus === 'succeeded' && reservations.length === 0) && (
            <h1 className="text-center my-auto">You have no reservations</h1>
            )}
            {reservations.map((reservation) => (
              <MDBCard style={{ backgroundColor: '#fff', height: '28rem' }} className="mb-4" key={reservation.id}>
                <MDBCardBody className="text-center">

                  {/* display reservation name */}
                  <h5 className="fw-bold mb-3">
                    {reservation.name}
                  </h5>
                  <div className="mt-3 mb-4">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle"
                      fluid
                      style={{ width: '100px' }}
                    />
                  </div>

                  {/* display developer info */}
                  <div className="d-flex align-items-center justify-content-between mb-3 flex-column">
                    <p className="fw-bold mb-0">Developer</p>
                    <p className="small mb-0">
                      <MDBIcon fas icon="user" />
                      {` ${reservation.developer.name}`}
                    </p>
                  </div>

                  <h5 className="fw-bold mb-3">
                    {reservation.developer.title}
                  </h5>

                  <div className="d-flex align-items-center justify-content-between mb-3 flex-column">
                    <p className="fw-bold mb-0">Reserved on</p>
                    <p className="small mb-0">
                      <MDBIcon fas icon="calendar-alt" />
                      {` ${convertDate(reservation.created_at)}`}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="fw-bold mb-0">City:</p>
                    <p className="small mb-0">
                      <MDBIcon fas icon="city" />
                      {` ${reservation.city}`}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteReservation(reservation.id))}
                  >
                    Delete
                  </button>
                </MDBCardBody>
              </MDBCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <h1 className="text-center">Please login to view your reservations</h1>
        </div>
      )}
    </>
  );
};

export default Reservations;
