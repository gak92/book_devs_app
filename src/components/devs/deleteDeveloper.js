import React, { useEffect, useState } from "react";
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
    // <div>
    //   <h2>Delete Developer</h2>
    //   <hr />
    //   <p>
    //     Would you like to delete your developer from our website? <br />
    //     You can do it with one click!
    //   </p>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Developer Name</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {developers.map((dev) => (
    //         <tr key={dev.id}>
    //           <td>
    //             <p>{dev.name}</p>
    //           </td>
    //           <td>
    //             <button
    //               type="button"
    //               onClick={() => deleteDeveloperHandler(dev.id)}
    //             >
    //               Delete
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <div className="container-fluid d-flex flex-column align-items-center h-10 mb-5">
      <h2 className="text-center  mt-5 fw-bold fs-1 text-white text-uppercase">
        Delete Developer
      </h2>
      <hr />
      <p className="text-center  fs-6 text-white">
        Would you like to delete a Developer from our website? <br />
        You can do it with one click!
      </p>
      <table className="table w-50 table-hover">
        <thead>
          <tr>
            <th scope="col" className="text-white">
              Developer Name
            </th>
            <th scope="col" className="text-center text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {developers.map((dev) => (
            <tr className="room" key={dev.id}>
              <td>
                <p className="text-white mt-3" id="room-name">
                  {dev.name}
                </p>
              </td>
              <td className="text-center">
                <button
                  className="mt-2 btn btn-danger"
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
