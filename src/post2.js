import React from 'react';
import { Link } from 'react-router-dom';

const post2 = () => (
  <form className="offset-col-sm-4 col-sm-12">
    <div className="form-group row" >
      <Link to="/">{'< Posts'}</Link>
    </div>
    <h3>{'Post 001'}</h3>
    <div className="form-group row">
      <label htmlFor="title" className="col-sm-1 col-form-label text-right">Title</label>
      <div className="col-sm-8">
        <li className="form-control" id="title" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="category" className="col-sm-1 col-form-label text-right">Category</label>
      <div className="col-sm-8">
        <li className="form-control" id="category" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="content" className="col-sm-1 col-form-label text-right">Content</label>
      <div className="col-sm-8">
        <li className="form-control" id="content" rows="3" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-8" />
      <button type="submit" className="btn btn-danger">Delete</button>
    </div>
  </form>
);

export default post2;
