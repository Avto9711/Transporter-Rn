import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base'

class PackageDelivery extends Component{
    static navigationOptions = {
        title: 'Package for delivery',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="plus"/>
    };

    render(){   
        return (
            <View><Text>PackageDelivery Page</Text></View>
        )

    }
}

export default PackageDelivery