import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base'

class TransporterBoard extends Component{
    static navigationOptions = {
        title: 'Transporter Board',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="address-book-o"/>
    };


    render(){   
        return (
            <View><Text>TransporterBoard Page</Text></View>
        )

    }
}

export default TransporterBoard