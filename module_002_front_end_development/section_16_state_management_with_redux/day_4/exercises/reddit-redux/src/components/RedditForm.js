import React, { Component } from 'react'
import { setPostsThunk } from '../redux/actions';
import { connect } from 'react-redux';

class RedditForm extends Component {
  constructor() {
    super();
    this.state = {
      currentSubreddit: 'reactjs',
    }
  }

  componentDidMount = () => {
    const { currentSubreddit } = this.state;
    const { setPosts } = this.props;
    setPosts(currentSubreddit)
  }

  handleOnChange = ({ target: { value }}) => {
    this.setState(({ currentSubreddit: value }), () => {
      const { currentSubreddit } = this.state;
      const { setPosts } = this.props;
      setPosts(currentSubreddit);
    });
  }

  handleBtn = () => {
    const { currentSubreddit } = this.state;
    const { setPosts } = this.props;
    setPosts(currentSubreddit);
  }

  render() {
    const { currentSubreddit } = this.state;
    return (
      <>
      <p>Current subreddit: { currentSubreddit }</p>
      <form>
        <select
          onChange={ this.handleOnChange }
          name="currentSubreddit"
          value={ currentSubreddit }
        >
          <option value="reactjs">Reactjs</option>
          <option value="frontend">Frontend</option>
        </select>
        <button type="button" onClick={ this.handleBtn }>Refresh</button>
      </form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPosts: (payload) => dispatch(setPostsThunk(payload))
});

export default connect(null, mapDispatchToProps)(RedditForm);
