
import React, { Component } from 'react';

import  {StyleSheet, TouchableOpacity, Text, TextInput, View}  from 'react-native';
import { withNavigation } from 'react-navigation';
import globalColors from '../utils/colors';

type Props = {};

 class LoginForm extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}  underlineColorAndroid="rgba(0,0,0,0)" placeholder="User name" placeholderTextColor={globalColors.white} />
            <TextInput style={styles.inputBox}  secureTextEntry={true} underlineColorAndroid="rgba(0,0,0,0)" placeholder="Password" placeholderTextColor={globalColors.white} />
            <TouchableOpacity style={styles.logginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 25,
        paddingHorizontal: 15,
        fontSize:16,
        color: globalColors.white,
        marginVertical: 10,
    },
    logginButton:{
        backgroundColor: globalColors.baseBlue,
        borderRadius: 25,
        marginVertical: 10,
        width: 300,
        paddingVertical: 12,
    },
    buttonText : {
        fontSize: 16,
        fontWeight: '500',
        color: globalColors.white,
        textAlign:"center"
    }
   
});

export default withNavigation(LoginForm)