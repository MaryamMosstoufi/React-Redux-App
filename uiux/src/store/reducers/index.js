import {
  API_CALL_START,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  NEW_REQUEST
} from './../actions';

export const initialState = {
  getUrl: 'https://lambdaschool.com',
  apiCall: {
    isLoading: false,
    snapshot: {},
    error: ''
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_REQUEST:
      return {
        ...state,
        getUrl: action.payload
      }
    case API_CALL_START:
      return {
        ...state,
        isLoading: true
      };
    case API_CALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        snapshot: action.payload,
        error: ''
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
  
};

