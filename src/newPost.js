import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function createWarning(funcName) {
  return () => console.warn(`${funcName} is not defined`);
}

const newPost = props => (
  <form className="offset-col-sm-4 col-sm-12">
    <div className="form-group row" >
      <Link to="/">{'< Posts'}</Link>
    </div>
    <h3>Posts</h3>
    <div className="form-group row">
      <label htmlFor="title" className="col-sm-1 col-form-label text-right">Title</label>
      <div className="col-sm-8">
        <input className="form-control" id="title" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="category" className="col-sm-1 col-form-label text-right">Category</label>
      <div className="col-sm-8">
        <input className="form-control" id="category" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="content" className="col-sm-1 col-form-label text-right">Content</label>
      <div className="col-sm-8">
        <textarea className="form-control" id="content" rows="3" />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-8" />
      <button type="submit" className="btn btn-primary">submit</button>
    </div>
  </form>
    );

newPost.defaultProps = {
  onPost: createWarning('onPost'),
};

newPost.propTypes = {
  onPost: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


export default connect;
