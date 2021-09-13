export const SET_LOADING = 'SET_LOADING';
export const SET_SUBREDDIT = 'SET_SUBREDDIT';
export const SET_POSTS_SUCCESS = 'SET_POSTS_SUCCESS';
export const SET_POSTS_ERROR = 'SET_POSTS_ERROR';

export const setLoading = (payload) => ({
  type: SET_LOADING, payload
});

export const setSubreddit = (payload) => ({
  type: SET_SUBREDDIT, payload
});

export const setPostsSuccess = (payload) => ({
  type: SET_POSTS_SUCCESS, payload
});

export const setPostsError = (payload) => ({
  type: SET_POSTS_ERROR, payload
});

export const setPostsThunk = (payload) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setSubreddit(payload));
  try {
    const URL = 'https://www.reddit.com/r'
    const res = await fetch(`${URL}/${payload}.json`)
    const data = await res.json();
    dispatch(setPostsSuccess(data.data.children));
  } catch (e) {
    dispatch(setPostsError(e.message));
  }
};
