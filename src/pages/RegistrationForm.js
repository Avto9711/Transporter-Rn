import React from 'react';
import {View,Text, FormLabel, FormInput,TextInput, TouchableOpacity, Image} from 'react-native';
import globalStyle from '../utils/styles'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { saveUserToken } from '../actions/actions';
import { connect } from 'react-redux';

class RegistrationForm extends React.Component {

    _signInAsync = () => {
        this.props.saveUserToken()
            .then(() => {
                this.props.navigation.navigate('App');
            })
            .catch((error) => {
                this.setState({ error })
            })
    };

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
                <TouchableOpacity style={[globalStyle.opacityButton, {marginVertical: 40, alignSelf:"center"}]} onPress={() => {this._signInAsync();}} >
                    <Text style={globalStyle.buttonTextOpacity} >Create account</Text>
                </TouchableOpacity>
              </Form>
            </Content>
          </Container>
        );
    }
}

const mapStateToProps = state => ({
  token: state.token,
});


const mapDispatchToProps = function(dispatch) {
  return {
    saveUserToken: () => dispatch(saveUserToken())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

