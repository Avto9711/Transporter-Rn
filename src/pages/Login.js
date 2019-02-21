import React, {Component} from 'react';
import {StyleSheet,StatusBar, Text, View} from 'react-native';

import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'

export default class Login extends Component<{}> {
  render() {
    return (
        <View styles={styles.container}>
            <Logo />
            <LoginForm />
            <View style={styles.signupTextContainer}>
                <Text style={styles.signupText}>Do not have an account yet? </Text>
                <Text style={styles.signupLinkText}>SignUp</Text>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
      backgroundColor : "#2196f3",
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
        color: '#ffff',
        fontSize: 14,
        fontWeight: '500',
    }
  });
  