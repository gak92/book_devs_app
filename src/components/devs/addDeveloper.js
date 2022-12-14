import React, { useState, useEffect } from 'react';
import './addDeveloper.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDev } from '../../store/developers/devs/devActions';

function AddDeveloper() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [rating, setRating] = useState('');
  /* eslint-disable no-unused-vars */
  const [valid, setValid] = useState(false);
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (name && image && title && description && salary && rating) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [name, image, title, description, salary, rating]);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('title', title);
    formData.append('salary_exp', salary);
    formData.append('rating', rating);
    formData.append('user_id', 1);

    dispatch(addDev(formData));
    Navigate('/developers');
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
          onChange={(e) => {
            setName(e.target.value);
          }}
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
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Developer Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          id="salary"
          placeholder="Developer Salary"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          id="rating"
          placeholder="Developer Rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Developer
      </button>
    </form>
  );
}

export default AddDeveloper;
