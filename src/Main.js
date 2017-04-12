import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const defaultProps = {
  id: 0,
  title: '',
};

const Main = props => (

  <fieldset className="form-group">
    <form className="offset-col-sm-2 col-sm-8">
      <div className="form-group row">
        <label htmlFor="category" className="col-sm-2 col-form-label ">Posts</label>
        <div className="form-group row">
          <div className="col-sm-4" />
          <button type="submit" className="btn btn">
            <Link to="/newPost">New Post</Link></button>
        </div>
      </div>
      <ul>
        <div className="form-group row">
          <div className="col-sm-8">
            <li className="form-control" id="category1">
              <Link to="/post/001" key={props.id}>{props.title}</Link></li>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-8">
            <li className="form-control" id="category2">
              <Link to="/post/001" key={props.id}>{props.title}</Link></li>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-8">
            <li className="form-control" id="category3" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-8">
            <li className="form-control" id="category4" />
          </div>
        </div>
      </ul>
    </form>
  </fieldset>
);

Main.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
Main.defaultProps = defaultProps;

export default Main;
