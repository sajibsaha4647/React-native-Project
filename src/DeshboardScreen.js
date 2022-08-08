import {View, Text} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

// import Fire from '../Fire';
export default function DeshboardScreen({route}) {
  const result = useSelector(state => state.Login);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(result.successData.additionalUserInfo.profile, 'here  result');
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Chatid')
      .onSnapshot(documentSnapshot => {
        documentSnapshot.docChanges().forEach(change => {
          if (change.type == 'added') {
            let dataitem = change.doc.data();
            dataitem.createdAt = dataitem.createdAt.toDate();
            setMessages(previousMessages =>
              GiftedChat.append(previousMessages, dataitem),
            );
          }
        });
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const onSend = useCallback((messages = []) => {
    firestore()
      .collection('Chatid')
      .doc(Date.now().toString())
      .set(messages[0]);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
