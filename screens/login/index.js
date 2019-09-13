import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Button,
  Item,
  Label,
  Input,
  Form,
  View,
  Text,
  KeyboardAvoidView,
  TextInput
} from "native-base";

import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';
StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily);

const cardImage = require("../../assets/whatsapp.png");

// import { AsyncStorage } from 'react-native';

import { withNavigation } from 'react-navigation';

//import { NativeModules } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Login extends Component {

  render() {


    return (
      <Container>
        <Content>
          <View style={{
            marginTop: 50,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image
              source={cardImage}
              style={{width: 50, height: 50}}
            />
          <Text>{this.props.username}</Text>
          </View>
          <View style={{ padding: 30, paddingBottom: 0 }}>
            <Form>
              <Item regular last style={{ borderRadius: 10, marginBottom: 10 }}>
                <Input
                  placeholder="Correo electrónico"
                  autoCapitalize="none"
                />
              </Item>

            </Form>
          </View>

          <View style={{ paddingHorizontal: 30 }}>
            <Button block primary
              style={{
                marginTop: 35,
                backgroundColor: "#FF2D2D",
                borderRadius: 0
              }}


            >
              <Text onPress={() => this.props.navigation.navigate('Input')}>ACCEDER</Text>
            </Button>
          </View>

        </Content>
      </Container>
    );
  }
}
