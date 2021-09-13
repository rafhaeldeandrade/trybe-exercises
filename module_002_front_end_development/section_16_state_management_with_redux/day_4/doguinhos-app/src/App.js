import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './redux/actions';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={ fetchDog }
            type="button"
          >
            Novo Doguinho
          </button>
          {src.length > 0 && <img style={{ width: '100%' }} src={ src } alt="dog" /> }
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.mainReducer.imagePath,
  isFetching: state.mainReducer.isFetching});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
