import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base';
import Usuario from '../Usuario'
import ListaUsuarios from '../LotsOfGreetings'

import * as Font from 'expo-font';
import {StyleSheet} from 'react-native';
StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily);

const Usuarios = [{
  id:0,
  correo: 'usaera@gmail.com',
  telefono: 434567887,
  direccion: 'casa #12',
  cumple: '09/09/78',
  nombre: 'usera',
  imagen:{
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
},
{
  id:1,
  correo: 'userb@gmail.com',
  telefono: 434567887,
  direccion: 'casa #12',
  cumple: '09/09/78',
  nombre: 'useerb',
  imagen:{
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
},
{
  id:2,
  correo: 'userc@gmail.com',
  telefono: 434567887,
  direccion: 'casa #12',
  cumple: '09/09/78',
  nombre: 'userc',
  imagen:{
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
}
]

export default class Home extends Component {





  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
          </Header>
            <Content>
                  <Usuario
                  correo={Usuarios[0].correo}
                  telefono={Usuarios[0].telefono}
                  direccion={Usuarios[0].direccion}
                  cumple={Usuarios[0].cumple}
                />
                < ListaUsuarios lista={Usuarios} />
          </Content>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  global: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  superior: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'green',
    flexDirection: 'row'
  },
  inferior: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'yellow',
  },
  imagen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'green',
    flexDirection: 'column'
  },
  datos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'green',
    flexDirection: 'column'

  },
  personal: {
    fontSize: 12,
    textAlign: 'center',
    margin: 2,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
