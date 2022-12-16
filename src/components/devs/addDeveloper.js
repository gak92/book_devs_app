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
  const [image, setImage] = useState('');

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
    setImage(e.target.value);
  };

  return (
    <div className="add-dev-container">
      <div className="login-box" onSubmit={submitHandle}>
        <form>
          <div className="user-box">
            <input
              className="form-control"
              type="text"
              required
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="name">name</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              required
              className="form-control"
              id="photo"
              onChange={handleUploadImage}
              multiple
            />
            <label htmlFor="photo">Image</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              className="form-control"
              required
              id="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="title">title </label>
          </div>

          <div className="user-box">
            <input
              type="text"
              required
              className="form-control"
              id="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label htmlFor="description">Description</label>
          </div>

          <div className="user-box">
            <input
              type="number"
              required
              id="salary"
              className="form-control"
              onChange={(e) => {
                setSalary(e.target.value);
              }}
            />
            <label htmlFor="salary">salary</label>
          </div>

          <div className="user-box">
            <input
              type="number"
              required
              id="rating"
              minLength={1}
              maxLength={5}
              className="form-control"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
            <label htmlFor="rating">rating</label>
          </div>
          {/* eslint_disable_anchor-is-valid */}
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            <button type="submit">Add Developer</button>
          </a>
        </form>
      </div>
    </div>
  );
}

export default AddDeveloper;
