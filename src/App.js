import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';


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
        <Text>An app</Text>
      </View>
    )
  }
}

export default App;