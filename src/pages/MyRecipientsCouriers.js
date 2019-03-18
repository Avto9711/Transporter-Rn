import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base'

class MyRecipientsCouriers extends Component{
    static navigationOptions = {
        title: 'My recipients/Couriers',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="list-ul"/>
    };

    render(){   
        return (
            <View><Text>MyRecipientsCouriers Page</Text></View>
        )

    }
}

export default MyRecipientsCouriers