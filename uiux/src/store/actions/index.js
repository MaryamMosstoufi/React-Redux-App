import axios from 'axios';
import { ACCESS_KEY } from './../../config';

export const NEW_REQUEST = 'NEW_REQUEST';

export function  newRequest(newUrl) {
  console.log('action', newUrl);
  return {
    type: NEW_REQUEST,
    payload: newUrl 
  }
}

export const API_CALL_START = 'API_CALL_START';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const apiCall = (props) => {
  return dispatch => {
    dispatch({ type: API_CALL_START });
    axios
      .get('https://api.apiflash.com/v1/urltoimage?access_key='+ ACCESS_KEY + '&url=' + props + '&response_type=json&ttl=864000')
      .then(res => {
        dispatch({ type: API_CALL_SUCCESS, payload: res.data.url });
      })
      .catch(err => {
        dispatch({ type: API_CALL_FAILURE, payload: err.message });
      });
  };
};