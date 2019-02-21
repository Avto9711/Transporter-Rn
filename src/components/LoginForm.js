
import React, { Component } from 'react';

import  {StyleSheet, TouchableOpacity, Text, TextInput, View}  from 'react-native';

type Props = {};

export default class LoginForm extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}  underlineColorAndroid="rgba(0,0,0,0)" placeholder="User name" placeholderTextColor="#ffff" />
            <TextInput style={styles.inputBox}  secureTextEntry={true} underlineColorAndroid="rgba(0,0,0,0)" placeholder="Password" placeholderTextColor="#ffff" />
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
        color: "#ffff",
        marginVertical: 10,
    },
    logginButton:{
        backgroundColor: "#0069c0",
        borderRadius: 25,
        marginVertical: 10,
        width: 300,
        paddingVertical: 12,
    },
    buttonText : {
        fontSize: 16,
        fontWeight: '500',
        color: "#ffff",
        textAlign:"center"
    }
   
});