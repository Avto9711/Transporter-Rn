import React, {Component} from 'react';
import {StyleSheet,StatusBar, Text, View, Button} from 'react-native';

import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'
import { withNavigation } from 'react-navigation';
import globalStyle from '../utils/styles'
import globalColors from '../utils/colors';
import  {AuthStack} from '../utils/screens'

 class Login extends Component {

  redirectToRegistrationForm = ()=>{
    this.props.navigation.navigate(AuthStack.RegistrationFormPage);
  }
  render() {
    return (
      <View style={globalStyle.container}>
       <View style={styles.container}>
            <Logo  textLabel="Transporter" textSize={40}  hiddenAditionalText={true}  />
            <LoginForm />
            <View style={styles.signupTextContainer}>
                <Text style={styles.signupText}>Do not have an account yet? </Text>
                <Text onPress={()=>{this.props.navigation.navigate(AuthStack.RegistrationFormPage)}} style={styles.signupLinkText}>SignUp</Text>
            </View>
        </View>
      </View>
 
    );
  }
}

export default withNavigation(Login)


const styles = StyleSheet.create({
  container:{
    backgroundColor : globalColors.baseContainerBlue,
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  },
    signupTextContainer:{
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginVertical: 20,
      flexDirection: 'row',
    },
    signupText:{
        color: 'rgba(255,255,255,0.6)'
    },
    signupLinkText:{
        color: globalColors.white,
        fontSize: 14,
        fontWeight: '500',
    }
  });
  