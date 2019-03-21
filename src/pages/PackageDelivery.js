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
    Row, ListItem,CheckBox, Picker, Textarea, Switch} from 'native-base'
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
                    <View style={{flex:1, flexDirection:'column', padding:10}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{ flex:10}}>
                                <Item floatingLabel>
                                    <Label>Delivey Location</Label>
                                    <Input />
                                    <Icon type="FontAwesome5" name="map-marker-alt"></Icon>

                                </Item>
                            </View>
                            <View style={{ flex:1,flexDirection:'column-reverse'}}>
                                    <Switch value={true} />
                            </View>
                        </View>
                        <View style={{marginTop:20}} >
                            <Item floatingLabel>
                            <Label>Item</Label>
                                <Input placeholder="" />
                            </Item>
                        </View>
                        <View style={{marginTop:20, borderColor:'black'}} >
                            {/* <Text>Type</Text> */}
                            <Label>Select Item Type</Label>
                            <Picker
                                note
                                mode="dropdown">
                                <Picker.Item label="" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </View>
                        <View style={{marginTop:20}} >
                            <Label>Item Description</Label>
                            <Textarea  rowSpan={5} bordered />
                                               
                        </View>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <View style={{ flex:9}}>
                                <Item floatingLabel>
                                    <Label>Estimated Value</Label>
                                    <Input numeric />

                                </Item>
                            </View>
                            <View style={{ flex:1,justifyContent:'flex-end'}}>
                                    <Text>USD</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column', marginTop:20}}>
                        <Label>Dimension*</Label>
                        <View style={{flexDirection:'row'}}>
                            <View style={{ flex:1}}>
                                    <Item regular>
                                        <Input />
                                    </Item>
                                </View>
                                <View style={{ flex:1}}>
                                        <Text>X</Text>
                                </View>
                                <View style={{ flex:1}}>
                                    <Item regular>
                                        <Input numeric />
                                    </Item>                           
                                </View>
                                <View style={{ flex:1}}>
                                        <Text>X</Text>
                                </View>
                                <View style={{ flex:1}}>
                                    <Item regular>
                                        <Input numeric />
                                    </Item>                            
                                </View>
                            </View>

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