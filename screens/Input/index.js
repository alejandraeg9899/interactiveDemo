import React, { Component } from 'react';
import { Image  } from 'react-native';
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

const cardImage = require("../../assets/whatsapp.png");

export default class InputUser extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

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
          </View>
          <View style={{ padding: 30, paddingBottom: 0 }}>
            <Form>
              <Item regular last style={{ borderRadius: 10, marginBottom: 10 }}>
                <Input
                  placeholder="Nombre"
                  autoCapitalize="none"
                />
              </Item>

              <Item regular last style={{ borderRadius: 10, marginBottom: 10 }}>
                <Input
                  placeholder="Correo"
                  autoCapitalize="none"
                />
              </Item>
              <Item regular last style={{ borderRadius: 10, marginBottom: 10 }}>
                <Input
                  placeholder="Teléfono"
                  autoCapitalize="none"
                />
              </Item>
              <Item regular last style={{ borderRadius: 10, marginBottom: 10 }}>
                <Input
                  placeholder="Dirección"
                  autoCapitalize="none"
                />
              </Item>
              <Item regular last style={{ borderRadius: 10, marginBottom: 10 }}>
                <Input
                  placeholder="Fecha de Nacimiento"
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
              <Text onPress={() => this.props.navigation.navigate('Home')}>Guardar</Text>
            </Button>
          </View>

        </Content>
      </Container>
    );
  }
}
