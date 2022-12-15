import React from 'react';
import './developersComponent.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon,
} from 'mdb-react-ui-kit';

function DeveloperCard({ developer }) {
  const {
    id, name, rating, title,
  } = developer;

  return (
    <MDBCard style={{ backgroundColor: '#fff', height: '30rem' }} className="mb-4">
      <MDBCardBody className="text-center">
        <div className="mt-3 mb-4">
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            className="rounded-circle"
            fluid
            style={{ width: '100px' }}
          />
        </div>
        <MDBTypography tag="h4">{title}</MDBTypography>
        <MDBCardText tag="h3" className="text-muted mb-2">
          {name}
        </MDBCardText>
        <ul className="mb-2 list-unstyled d-flex flex-row" style={{ color: '#96bf10' }}>
          { rating >= 1 ? <li><MDBIcon fas icon="star fa-xs" /></li> : <li><MDBIcon far icon="star fa-xs" /></li> }
          { rating >= 2 ? <li><MDBIcon fas icon="star fa-xs" /></li> : <li><MDBIcon far icon="star fa-xs" /></li> }
          { rating >= 3 ? <li><MDBIcon fas icon="star fa-xs" /></li> : <li><MDBIcon far icon="star fa-xs" /></li> }
          { rating >= 4 ? <li><MDBIcon fas icon="star fa-xs" /></li> : <li><MDBIcon far icon="star fa-xs" /></li> }
          { rating >= 5 ? <li><MDBIcon fas icon="star fa-xs" /></li> : <li><MDBIcon far icon="star fa-xs" /></li> }
        </ul>
        <div className="mb-4 pb-2">
          <MDBBtn outline floating>
            <MDBIcon fab icon="facebook" size="lg" />
          </MDBBtn>
          <MDBBtn outline floating className="mx-1">
            <MDBIcon fab icon="twitter" size="lg" />
          </MDBBtn>
          <MDBBtn outline floating>
            <MDBIcon fab icon="skype" size="lg" />
          </MDBBtn>
        </div>
        <button type="button" className="book-now-btn">
          <Link to={`/developers/${id}`} className="text-decoration-none">
            <MDBIcon far icon="clock me-2" />
            {' '}
            Book now
          </Link>
        </button>
      </MDBCardBody>
    </MDBCard>
  );
}

DeveloperCard.propTypes = {
  developer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default DeveloperCard;
