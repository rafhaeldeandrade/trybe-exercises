import React, { Component } from 'react'
import { connect } from 'react-redux';

class RedditResult extends Component {
  render() {
    const { loading, posts, postsErrorMsg } = this.props;
    if (loading) return <p>Loading...</p>;
    if (postsErrorMsg) return <p>{ postsErrorMsg }</p>;
    if (!loading) return (
      <ul>
        {posts.map((post, index) => (
          <li key={index}><a href={`https://reddit.com${post.data.permalink}`}>{post.data.title}</a> by {post.data.author}</li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.reddit.loading,
  posts: state.reddit.posts,
  postsErrorMsg: state.reddit.postsErrorMsg,
});

export default connect(mapStateToProps, null)(RedditResult);
