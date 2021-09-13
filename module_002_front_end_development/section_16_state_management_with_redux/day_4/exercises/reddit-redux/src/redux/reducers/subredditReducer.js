import { SET_LOADING, SET_POSTS_ERROR, SET_POSTS_SUCCESS, SET_SUBREDDIT } from '../actions';

const INITIAL_STATE = {
  loading: false,
  posts: [],
  postsErrorMsg: '',
  currentSubreddit: '',
}

const subredditReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case SET_LOADING:
    return {
      ...state,
      loading: action.payload,
    }
  case SET_SUBREDDIT:
    return {
      ...state,
      currentSubreddit: action.payload,
    }
  case SET_POSTS_SUCCESS:
    return {
      ...state,
      posts: [...action.payload],
      loading: false,
    }
  case SET_POSTS_ERROR:
    return {
      ...state,
      loading: false,
      postsErrorMsg: action.payload,
    }
  default:
    return state;
  }
}

export default subredditReducer;