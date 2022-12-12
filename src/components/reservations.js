import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, deleteReservation } from '../store/reservations/reservations';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const authState = useSelector((state) => state.authentication);

  useEffect(() => {
    dispatch(fetchReservations(authState.userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };

  return (
    <>
      { authState.loggedIn ? (
        <div>
          <h1 className="text-center mt-5">My Reservations</h1>
          <div className="d-flex justify-content-between flex-wrap mt-5 mx-5 gap-4">
            { reservations.length === 0 && (
            <h1 className="text-center">You have no reservations</h1>
            )}
            {reservations.map((reservation) => (
              <div className="card" style={{ width: '18rem' }} key={reservation.id}>
                <img src="./img/ellipse.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{reservation.name}</h5>
                  <p className="card-text">{reservation.city}</p>
                  <div className="d-flex justify-content-between mx-2">
                    <p className="card-text"><b>Reserved on:</b></p>
                    <p className="card-text">{convertDate(reservation.reservation_date)}</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteReservation(reservation.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
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
