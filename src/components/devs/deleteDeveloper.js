import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDevelopers, deleteDev } from "../../store/developers/index";

const DeleteDeveloper = () => {
  const userAuth = localStorage.getItem("userAuth");

  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developer.developers);

  async function deleteDeveloperHandler(id) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: userAuth,
      },
    };

    await fetch(
      `http://localhost:3000/api/v1/developers/${id}`,
      requestOptions
    ).then(dispatch(deleteDev(id)));
  }

  useEffect(() => {
   dispatch(getDevelopers());
  }, [dispatch]);
  return (
    <div>
      <h2>Delete Developer</h2>
      <hr />
      <p>
        Would you like to delete your developer from our website? <br />
        You can do it with one click!
      </p>
      <table>
        <thead>
          <tr>
            <th>Developer Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {developers.map((dev) => (
            <tr key={dev.id}>
              <td>
                <p>{dev.name}</p>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteDeveloperHandler(dev.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteDeveloper;
