import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import DevelopersComponent from "./developersComponent";
import { getDevelopers } from "../../redux";

function DisplayAllDevs() {
  const developers = useSelector((state) => state.developer.developers);

  const dispatch = useDispatch();

  const fetchDevelopers = async () => {
    const response = await axios
      .get("http://127.0.0.1:3000/api/v1/developers")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
      });
    dispatch(getDevelopers(response));
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  console.log("developers:", developers);
  return (
    <div>
      <h1>Here is Developers listing...</h1>
      <div className="d-flex">
        <DevelopersComponent />
      </div>
    </div>
  );
}

export default DisplayAllDevs;
