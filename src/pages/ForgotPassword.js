import React, { Component } from 'react';
import {Text,TouchableOpacity, Alert} from 'react-native'
import {withNavigation} from 'react-navigation';
import globalStyle from '../utils/styles'

import {Grid, Col, Container, Content, H3, Label,Input,Item,Form} from 'native-base'
class ForgotPassword extends Component {
    state = {  }

    sendEmail = ()=>{
        Alert.alert(
            'Reset Password',
            'Please check your email to reset your password',
            [
              {text: 'Nice', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{alignContent:'center',  padding:15}}>
                    <H3 style={{textAlign:'center', marginVertical:15}}>Please, insert you E-mail to  recieve a mail for reset you password.</H3>
                    <Form>
                        <Item floatingLabel>
                            <Label>E-mail</Label>
                            <Input />
                        </Item>
                        <TouchableOpacity onPress={this.sendEmail} style={[globalStyle.opacityButton, {marginVertical: 40, alignSelf:'center'}]}>
                            <Text style={globalStyle.buttonTextOpacity}>Send Email</Text>
                        </TouchableOpacity> 
                </Form>
               
               </Content>
            </Container>

        );
    }
}


export default withNavigation(ForgotPassword);