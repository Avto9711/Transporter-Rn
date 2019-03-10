import React from 'react';
import {
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import { connect } from 'react-redux';
import { removeUserToken } from '../actions/actions';

import {Header,Left,Icon, Container, Content,Body,Title,Right, Button, Text} from 'native-base'

import globalColors from '../utils/colors'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Screen',
        drawerIcon: ()=>    <Icon name="home"/>
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
                            <Title>Home Screen</Title>
                        </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle={{flex:1,alignItems:'center', justifyContent:'center'}}>
                        <View >
                            <Button style={{alignSelf:"center" }} 
                            success={true} 
                            onPress={this._signOutAsync} >
                            <Text>
                                        Im done, take me oute
                                </Text>
                            </Button>
                            <Text>  Here is the user token {this.props.token.token}</Text>
                        </View>
                </Content>

            </Container>

        );
    }

    _signOutAsync =  () => {
        this.props.removeUserToken()
            .then(() => {
                this.props.navigation.navigate('Auth');
            })
            .catch(error => {
                this.setState({ error })
            })
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});

const mapStateToProps = state => ({
    token: state.token,
});

const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);