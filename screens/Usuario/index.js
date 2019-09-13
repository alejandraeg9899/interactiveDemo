import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

export default class Perfil extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.superior}>
        <View style={styles.imagen}>
          <Image source={pic} style={{width: 193, height: 110}}/>
        </View>
        <View style={styles.datos}>
          <Text style={styles.personal}>{this.props.correo}</Text>
          <Text style={styles.personal}>{this.props.telefono}</Text>
          <Text style={styles.personal}>{this.props.direccion}</Text>
          <Text style={styles.personal}>{this.props.cumple}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  superior: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'green',
    flexDirection: 'row'
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
  }
});
