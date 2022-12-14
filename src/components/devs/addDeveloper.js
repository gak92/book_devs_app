import React, { useState, useEffect } from "react";
import "./addDeveloper.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDev } from "../../store/developers/devs/devActions";

function AddDeveloper() {
  const [state, setState] = useState({
    name: "",
    image: [],
    description: "",
    title: "",
    salary: "",
    rating: "",
    valid: false,
  });

  const handle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   if (name && image && title && description && salary && rating) {
  //     setValid(true);
  //   } else {
  //     setValid(false);
  //   }
  // }, [name, image, title, description, salary, rating]);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("salary_exp", salary);
    formData.append("rating", rating);
    formData.append("user_id", 1);

    dispatch(addDev(formData));
    Navigate("/developers");
  };

  // handle image upload
  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={submitHandle} className="addDeveloper">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          placeholder="Developer Name"
          onChange={handle}
        />
      </div>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          id="photo"
          placeholder="Developer Picture"
          onChange={handleUploadImage}
          multiple
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Developer Description"
          onChange={handle}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Developer Title"
          onChange={handle}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          id="salary"
          placeholder="Developer Salary"
          onChange={handle}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          id="rating"
          placeholder="Developer Rating"
          onChange={handle}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Developer
      </button>
    </form>
  );
}

export default AddDeveloper;
