import {
  LOGIN_EMAIL_TYPES,
  LOGIN_PASSWORD_TYPES,
  LOGIN_API_REQUEST_TYPES,
  LOGIN_API_SUCCESS_TYPES,
  LOGIN_API_FAILED_TYPES,
} from './../../Types/AuthTypes/LoginTypes';

const initialState = {
  loading: false,
  successData: '',
  error: '',
};

const LoginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOGIN_EMAIL_TYPES:
      return {
        ...state,
        successData: actions.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
