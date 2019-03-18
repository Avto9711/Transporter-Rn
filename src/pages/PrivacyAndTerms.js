import React, {Component} from 'react';
import {View} from 'react-native';
import globalColors from '../utils/colors'
import {Header,Left,Icon, Container, Content,Body,Title,Right, Button, Text} from 'native-base'
class PrivacyAndTerms extends Component{
    static navigationOptions = {
       
    };


    render() {
        return (
            <Container style={{flex:1}}>
                <Header style={{backgroundColor: globalColors.baseBlue}} androidStatusBarColor={globalColors.baseBlue}>
                        <Left>
                            <Button 
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                            >
                            <Icon name="ios-menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Privacy And Terms</Title>
                        </Body>
                </Header>
                <Content>
  
                </Content>

            </Container>)}

    
}

export default PrivacyAndTerms