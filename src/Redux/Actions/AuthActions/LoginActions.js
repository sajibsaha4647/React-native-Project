import {
  LOGIN_EMAIL_TYPES,
  LOGIN_PASSWORD_TYPES,
  LOGIN_API_REQUEST_TYPES,
  LOGIN_API_SUCCESS_TYPES,
  LOGIN_API_FAILED_TYPES,
} from './../../Types/AuthTypes/LoginTypes';

import {
  Dimensions,
  View,
  Text,
  Image,
  Platform,
  ActivityIndicator,
  ToastAndroid,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import {ToastMessageAction} from './../ToastMessages/ToastMessageAction';
import {GetpersonalProfileData} from './../TripActions/GetprofilePersonalDataActions';

export const Login_email_actions = email => {
  return {
    type: LOGIN_EMAIL_TYPES,
    payload: email,
  };
};
