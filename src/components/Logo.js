
import React, { Component } from 'react';

import  {StyleSheet, Image, Text, View}  from 'react-native';


type Props = {};

export default class Logo extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
            <Image  style={styles.logo}  source={require("../images/logo.png")}  />
            <Text style={styles.logoText}>Welcome to Transporter </Text>

        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    logo: {
        width: 90,
        height: 90
    },
    logoText:{
        fontSize: 20,
        color: "#ffff",
        marginVertical: 15,
    }
});
