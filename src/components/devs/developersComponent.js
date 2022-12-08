import React from 'react';
import { useSelector } from 'react-redux';
import './developersComponent.css';

function DevelopersComponent() {
  const developers = useSelector((state) => state.developer.developers);
  const renderList = developers.map((developer) => {
    const { id, name, image } = developer;
    return (
      <div className="container" key={id}>
        <div className="card card0">
          <div className="border">
            <h2>{name}</h2>
            <img src={image} alt="developer" />
            <div className="icons">
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
              <i className="fa fa-github" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default DevelopersComponent;
