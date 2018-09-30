import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBjYwADQQbS-V_COX_l8t70jkY1F3K8apo",
      authDomain: "auth-eec58.firebaseapp.com",
      databaseURL: "https://auth-eec58.firebaseio.com",
      projectId: "auth-eec58",
      storageBucket: "auth-eec58.appspot.com",
      messagingSenderId: "673942703536"
    })
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