export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

export function requestDog() {
  return { type: REQUEST_IMAGE };
}

export function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

// export function fetchDog() {
//   return (dispatch) => {
//     dispatch(requestDog());
//     return fetch('https://dog.ceo/api/breeds/image/random')
//       .then((r) => r.json()
//         .then(
//           (json) => dispatch(getImage(json)),
//           (error) => dispatch(failedRequest(error)),
//         ));
//   };
// }

export const fetchDog = () => async (dispatch) => {
  dispatch(requestDog());
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    dispatch(getImage(data));
  } catch (e) {
    dispatch(failedRequest(e));
  }
}