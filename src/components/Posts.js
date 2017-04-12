import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default class Posts {
  render() {
    return (
      <ul>
        {this.props.posts.map(post =>
          <li key={post.id}>{post.title}</li>,
          )}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    id,
}
}

Posts = connect(mapStateToProps)(Posts);
