import React, { Component } from 'react';
import {  View, StyleSheet, Image } from 'react-native';
import {
  Container,Button,Text,Header,Title,Left,Icon,Body,Right,Content } from 'native-base';

class Card extends Component {
  render() {
    return (
      <View style={styles.imagen}>
        <View style={styles.imagen}>
          <Image source={this.props.imagen} style={{width: 50, height: 50}}/>
          
        </View>
        <Content>
        <Button iconRight light>
          <Text>{this.props.nombre}</Text>
          <Icon name='trash' />
        </Button>
        </Content>
      </View>
    );
  }
}

export default class ListaUsuarios extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.inferior}>
        { this.props.lista.map(
          ({
          id,
          nombre,
         telefono,
         cumple,
         correo,
         direccion,
        imagen
         })=>(
          <Card
              key = {id}
            //  onPress={this._onPressButton}
             nombre={nombre}
              imagen={imagen}
            />

        )) }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  inferior: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'yellow',
    flexDirection: 'column'
  },
  imagen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  nombre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'green',
    flexDirection: 'row'
  },
  icono: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'green',
    flexDirection: 'row'
  }
});
