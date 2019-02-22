import React, { Component } from 'react';
import {View,Text, FormLabel, FormInput,TextInput, TouchableOpacity, Image} from 'react-native';
import globalStyle from '../utils/styles'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
class RegistrationForm extends Component {
    state = {  }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container>
            <Content contentContainerStyle={{ padding:15}} >
              <Form>
                <Image source={require("../images/user.png")} style={{width: 90,height: 90, alignSelf:"center", marginVertical:15}}  />
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Last Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry={true}  />
                </Item>
                <Item floatingLabel >
                  <Label>Confirm Password</Label>
                  <Input  secureTextEntry={true} />
                </Item>
                <TouchableOpacity style={[globalStyle.opacityButton, {marginVertical: 40, alignSelf:"center"}]}>
                    <Text style={globalStyle.buttonTextOpacity}>Create account</Text>
                </TouchableOpacity>
              </Form>
            </Content>
          </Container>
        );
    }
}

export default RegistrationForm;