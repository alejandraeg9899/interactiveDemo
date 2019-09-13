import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Root } from "native-base";

import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';
StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily);

import Home from './screens/home';
import InputUser from './screens/Input'
import Login from './screens/login'

class HomeScreen extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}



const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Login:{
    screen:Login
  },
  Input:{
    screen:InputUser
  }
},{
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
