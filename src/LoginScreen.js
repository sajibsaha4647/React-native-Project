import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {useNavigation} from '@react-navigation/native';
import {Login_email_actions} from './Redux';
import ToastMessage from './Redux/Actions/ToastMessages/ToastMessage';
// import {initializeApp} from 'firebase/app';
// import {getDatabase, get} from 'firebase/firestore';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');

  const Navigation = useNavigation();
  const dispatch = useDispatch();

  // const firebaseConfig = {
  //   apiKey: 'AIzaSyAfvmPvgbtoUJ3VEvRYkLRnxqGb-e4ztrI',

  //   authDomain: 'authchatsajib.firebaseapp.com',

  //   databaseURL: 'https://authchatsajib-default-rtdb.firebaseio.com',

  //   projectId: 'authchatsajib',

  //   storageBucket: 'authchatsajib.appspot.com',

  //   messagingSenderId: '560776194566',

  //   appId: '1:560776194566:web:09dc9a7e0eaa582e963187',

  //   measurementId: 'G-LN0K898QPB',
  // };

  // Initialize Firebase

  // initializeApp(firebaseConfig);

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'email',
      'public_profile',
      'user_friends',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  GoogleSignin.configure({
    webClientId:
      '560776194566-jmdnooe2b2aor0497saqa201nelcu5k5.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const getNavigatewithdata = e => {
    try {
      // const database = getDatabase();
    } catch (e) {}

    dispatch(Login_email_actions(e));
    navigation.navigate('DeshboardScreen');
    ToastMessage('Successfully login ');
  };

  return (
    <SafeAreaView style={{padding: 10}}>
      <View style={{marginVertical: 30}}>
        <TouchableOpacity
          onPress={() => {
            onFacebookButtonPress().then(e => {
              // console.warn(e);
              navigation.navigate('DeshboardScreen', {name: 'sajib'});
            });
          }}>
          <View
            style={{
              backgroundColor: '#000',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff'}}>Facebook login</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          onGoogleButtonPress().then(e => getNavigatewithdata(e));
        }}>
        <View
          style={{
            backgroundColor: '#000',
            alignItems: 'center',
            height: 50,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff'}}>Google login</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
