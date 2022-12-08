import React from 'react';
import './addDeveloper.css';

function AddDeveloper() {
  return (
    <form className="addDeveloper">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Developer Name
        </label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="photo" className="form-label">
          Developer Picture
        </label>
        <input type="text" className="form-control" id="photo" />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Developer Description
        </label>
        <input type="text" className="form-control" id="description" />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Developer Title
        </label>
        <input type="text" className="form-control" id="title" />
      </div>

      <div className="mb-3">
        <label htmlFor="salary" className="form-label">
          Developer Salary
        </label>
        <input type="number" className="form-control" id="salary" />
      </div>

      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Developer Rating
        </label>
        <input type="number" className="form-control" id="rating" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddDeveloper;
