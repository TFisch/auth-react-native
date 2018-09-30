import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import {
  firebaseKey,
  firebaseAuthDomain,
  firebaseDatabaseURL,
  firebaseProjectId,
  firebaseStorageBucket,
  firebaseMessagingSenderId
} from './api/api'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: firebaseKey,
      authDomain: firebaseAuthDomain,
      databaseURL: firebaseDatabaseURL,
      projectId: firebaseProjectId,
      storageBucket: firebaseStorageBucket,
      messagingSenderId: firebaseMessagingSenderId
    }
    )
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;