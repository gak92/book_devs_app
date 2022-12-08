import React from "react";
import { useSelector } from "react-redux";
import "./developersComponent.css";

function DevelopersComponent() {
  const developers = useSelector((state) => state.developer.developers);
  const renderList = developers.map((developer) => {
    const { id, name, image } = developer;
    return (
      <div class="container">
        <div class="card card0">
          <div class="border">
            <h2>{name} </h2>
            <img src={image}></img>
            <div class="icons">
              <i class="fa fa-codepen" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-github" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default DevelopersComponent;
