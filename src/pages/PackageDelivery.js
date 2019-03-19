import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import globalColors from '../utils/colors'
import {Header,Left,Icon, Container, Content,Body,Title,
    Right, Button, Text, Form, 
    Item,
    Input, 
    Label, 
    Grid,
    Col, 
    Row, ListItem,CheckBox} from 'native-base'
class PackageDelivery extends Component{
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
                            <Title>Package for delivery</Title>
                        </Body>
                        
                </Header>
                <Content contentContainerStyle={{flex:1, padding:10}} >
                <ScrollView>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{ flex:10}}>
                                <Item>
                                    <Input placeholder="Delivery Location" />
                                    <Icon type="FontAwesome5" name="map-marker-alt"></Icon>

                                </Item>
                            </View>
                            <View style={{ flex:1,justifyContent:'center'}}>
                                    <CheckBox checked={true} color="green"/>
                            </View>
                        </View>
                        <View style={{marginTop:20}} >
                            <Item>
                                <Input placeholder="Item" />
                            </Item>
                        </View>
                    </View>


                </ScrollView>


                {/* <Grid  >
                    <Row size={100}>
                        <Col size={100}>
                            <Row>
                                <Col  style={{backgroundColor:'white', padding:10}} size={90}>
                                <Item>
                                    <Input placeholder="Delivery Location" />
                                    <Icon active name='swap' />
                                </Item>

                                </Col>
                                <Col style={{padding:10}} size={10}>
                                <ListItem button >
                                <CheckBox color="red" />
                                    <Body>
                                        <Text>Daily Stand Up</Text>
                                    </Body>
                                </ListItem>
                                    {/* <Text  style={{position:'absolute', top:0, fontSize:10}}>Use My location</Text> */}
                                {/* </Col>
                            </Row>
                            <Row>
                                <Col style={{backgroundColor:'green'}}></Col>
                                <Col style={{backgroundColor:'red'}}></Col>
                            </Row>
                            <Row>
                                <Col style={{backgroundColor:'black'}}></Col>
                                <Col style={{backgroundColor:'white'}}></Col>
                            </Row>
                        </Col>
                    </Row> */}
                {/* </Grid>  */}



                {/* <Grid style={{flex:1}}>
                    <Row size={100} style={{backgroundColor:'red'}}>
                        <Col style={{backgroundColor:'blue'}}></Col>
                        <Col style={{backgroundColor:'green'}}></Col>
                    </Row>

                </Grid> */}
                    {/* <View style={{padding:10}} >
                        <Form style={{flex:1, flexDirection:'row'}} >
                        <View >
                            <Item stackedLabel >
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </View>

                        </Form>
                    </View> */}

            </Content>
            </Container>)}

    
}

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})

export default PackageDelivery