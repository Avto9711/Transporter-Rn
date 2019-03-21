import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView, FlatList} from 'react-native';
import globalColors from '../utils/colors'
import {Header,Left,Icon, Container, Content,Body,Title,
    Right, Button, Text, Form, 
    Item,
    Input, 
    Label, 
    Grid,
    Col, 
    Row, ListItem,CheckBox, Picker, Textarea, Switch, SwipeRow,List} from 'native-base'
class PackageDelivery extends Component{
    static navigationOptions = {
       
    };  

    constructor(props){
        super(props)
        this.state = {
            data:["hola", "adios"]
        }
    }


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
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={{ flex:5, }}>
                                    <Item regular>
                                        <Input />
                                    </Item>
                                </View>
                                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                                        <Text>X</Text>
                                </View>
                                <View style={{ flex:5}}>
                                    <Item regular>
                                        <Input numeric />
                                    </Item>                           
                                </View>
                                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                                        <Text>X</Text>
                                </View>
                                <View style={{ flex:5}}>
                                    <Item regular>
                                        <Input numeric />
                                    </Item>                            
                                </View>
                            </View>

                        </View>
                        <View style={{marginTop:20}}>
                            <View style={{ flex:9}}>
                                <Item floatingLabel>
                                    <Label>Weigth *</Label>
                                    <Input numeric />

                                </Item>
                            </View>
                        </View>
                    <View style={{marginTop:20}} >
                    
                        <View style={{flexDirection:'row', fontSize:10}}>
                            <Label>Pictures </Label> 
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:10}}>
                            <View style={{backgroundColor:'red', height:100, width:100}}></View>                                               
                            <View style={{backgroundColor:'blue', height:100, width:100}}></View>                                               
                            <View style={{backgroundColor:'black', height:100, width:100}}></View>   
                        </View>
                                            
                    </View>
                    <View style={{marginTop:20, flexDirection:'column'}}>
                        <Label>Referral Links <Icon type="EvilIcons" name="plus"></Icon> </Label>     
                        <View style={{justifyContent:'space-between', flexDirection:'column', flex:1}}>
                            <List>
                                <FlatList
                                    data={this.state.data}
                                    keyExtractor={(data)=> data }
                                    renderItem={({data})=>
                                        <SwipeRow
                                        rightOpenValue={-75}
                                        right={
                                        <Button danger onPress={() => alert("Trash")}>
                                            <Icon active name="trash" />
                                        </Button>
                                        }
                                        body={
                                        <View style={{ flex: 1 }}>
                                                <Item regular style={{marginBottom:2, marginTop:2}}>
                                                    <Input />
                                                </Item>
                                        </View>
                                        }
                                    />
                                    }
                                />                  
                            </List>


{/* 
                                                 <SwipeRow
                                style={{ backgroundColor: "#9370DB" }}
                                rightOpenValue={-75}
                                right={
                                <Button danger onPress={() => alert("Trash")}>
                                    <Icon active name="trash" />
                                </Button>
                                }
                                body={
                                <View style={{ flex: 1 }}>
                                        <Item regular style={{marginBottom:2, marginTop:2}}>
                                            <Input />
                                        </Item>
                                </View>
                                } */}
                            {/* /> */}


                            {/* <Item regular style={{marginBottom:2, marginTop:2}}>
                                    <Input />
                                <Icon type="EvilIcons" name="trash" ></Icon>
                            </Item>
                            <Item regular style={{marginBottom:2, marginTop:2}}>
                                <Input />
                                <Icon type="EvilIcons" name="trash" ></Icon>
                            </Item> */}
                        </View>


                                                
                    </View>

                    <View style={{marginTop:20}} >
                            <Label>Delivery Notes</Label>
                            <Textarea  rowSpan={5} bordered />
                                               
                    </View>
                    <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between'}} >
                            <CheckBox  checked={false} />
                            <Text style={{fontSize:15}}>Purchase Package through the app (Only on US)</Text>
                    </View>

                    <View style={{marginTop:20}} >
                         <Button full style={{backgroundColor: globalColors.baseBlue}}><Text> Save </Text></Button>
                    </View>

                    </View>


                </ScrollView>


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