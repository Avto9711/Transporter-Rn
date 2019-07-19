
import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView, FlatList, Image, Alert, TouchableHighlight, Platform} from 'react-native';
import globalColors from '../utils/colors'
import ImagePicker from 'react-native-image-crop-picker';
import {Header,Left,Icon, Container, Content,Body,Title,
    Right, Button, Text, Form, 
    Item,
    Input, 
    Label, Switch, DatePicker, Picker, Textarea} from 'native-base'

import { Divider} from 'react-native-elements';
class Trip extends Component{
    static navigationOptions = {
        title: 'Trips',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="plane"/>
    };
    constructor(props){
        super(props);
        this.state = {
            willingBringItems:[
                {
                itemId:1,
                itemName:'Play Station 4',
                categoryId:1,
                categoryName:'VideoGames',
                itemDescription:'A gaming console',
                dimensions:{
                    width:"50",
                    height:"25",
                    deep:"6"
                },
                itemWeight:"8"
            },
            {
                itemId:2,
                itemName:'Play Station 5',
                categoryId:1,
                categoryName:'VideoGames',
                itemDescription:'A gaming console',
                dimensions:{
                    width:"50",
                    height:"25",
                    deep:"6"
                },
                itemWeight:"8"
            }
        ]     
        }
        this.removeItem = this.removeItem.bind(this);

    }
    insertItemBring(){
        //When using React, you should never mutate the state directly. 
        //If an object (or Array, which is an object too) is changed, you should create a new copy.
        const {willingBringItems } = this.state;
        this.setState(state  => ({
            willingBringItems:  [ {itemId:willingBringItems.length + 1,
                itemName:null,
                categoryId:null,
                categoryName:null,
                itemDescription:null,
                dimensions:{
                    width:"0",
                    height:"0",
                    deep:"0"
                },
                itemWeight:null
            }, ...willingBringItems]
        }));
    }
    removeItem(itemId){
        debugger;
                //When using React, you should never mutate the state directly. 
        //If an object (or Array, which is an object too) is changed, you should create a new copy.
        const {willingBringItems } = this.state;
        this.setState(state  => ({
            willingBringItems:  willingBringItems.filter(x=> x.itemId != itemId )
        }));
    }

    setDate = (event, date) => {
        date = date || this.state.date;
    
        this.setState({
          show: Platform.OS === 'ios' ? true : false,
          date,
        });
      }
    
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }

    render(){   
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
                            <Title>Trip Page</Title>
                        </Body>
                        <Right/>
                        
                </Header>
                <Content contentContainerStyle={{flex:1, padding:10}} >
                    <ScrollView>

                    <View style={{flex:1, flexDirection:'column', padding:10}}>
                        <View style={{flexDirection:'row'}}>
                                <View style={{ flex:10}}>
                                    <Item floatingLabel>
                                        <Label>From</Label>
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
                                <Label>To</Label>
                                    <Input placeholder="" />
                                </Item>
                            </View>
                            <View style={{marginTop:20}} >
                                <Label style={{marginBottom:15}}>Time of arrival</Label>

                                <View style={{flexDirection:'row'}}>
                                    <View style={{ flex:5 }}>
                                    <Label>Hour</Label>

                                        <Item regular>
                                            <Input  name="Hour" onChangeText={console.log("d")} value={"13"} numeric keyboardType='numeric' />
                                        </Item>
                                    </View>
                                    <View style={{ flex:1,alignItems:'center',justifyContent:'center' }}>
                                            <Text style={{fontSize:20, fontWeight:'bold'}}>:</Text>
                                    </View>

                                    <View style={{ flex:5}}>
                                    <Label>Minutes</Label>

                                        <Item regular >
                                            <Input name="Minutes" onChangeText={console.log("d")}  keyboardType='numeric' value={"30"} numeric />
                                        </Item>                           
                                    </View>

                                </View> 
                                <Divider style={{marginTop:15}}/>

                                    {/* <Input placeholder="" /> */}

                            </View>

                            <View style={{marginTop:20}}>


                                <Text style={{alignSelf:'flex-start',position:'absolute', fontWeight:'bold'}}>Willing to bring</Text>
                                <Icon style={{alignSelf:'flex-end'}} onPress={this.insertItemBring.bind(this)} type="EvilIcons" name="plus"></Icon>
                            </View>

                            <View style={{marginTop:20}}>
                                    {this.state.willingBringItems.map((itemWiling,index)=> 
                                    <View key={index} style={{
                                    borderColor:'#cecece', 
                                    borderWidth:1, 
                                    padding:10,
                                    borderRadius:3,
                                    paddingBottom:15,
                                    elevation:1.5,
                                    shadowOffset: { width: 5, height: 5 },
                                    shadowColor: "grey",
                                    shadowOpacity: 1,
                                    shadowRadius: 10,
                                    marginTop:8
                                    }}>
                                    <Text onPress={()=>{this.removeItem(itemWiling)}} style={{textAlign:'center', fontWeight:'bold',position:'absolute',color:'white', borderRadius:50, width:25,height:25, backgroundColor:'red', left:-8,top:-10}}>X</Text>

                                        <WillingToBringItem  item={itemWiling} number={(index + 1)}/>
                                    </View>
                                    )}
                                <Divider style={{marginTop:15}}/>

                            </View>

                            <View style={{marginTop:20}} >
                                <Button onPress={this.showAlert} full style={{backgroundColor: globalColors.baseBlue}}><Text> Save </Text></Button>
                            </View>
                    </View>
                    </ScrollView>
                </Content>

            </Container>
        )

    }
}

function WillingToBringItem({item, number}){
    return (
        <React.Fragment>
                <View style={{marginTop:20}} >
                                    <Text style={{position:'absolute', right:2}}>{number}</Text>
                    <Item floatingLabel>
                    <Label>Item</Label>
                    <Input value={item.itemName} placeholder="" />
                    </Item>
                </View>
                <View style={{marginTop:20, borderColor:'black'}} >

                    <Picker
                        note
                        mode="dropdown">
                            {/* {this.state.itemTypes.map(item=> <Picker.Item key={item.id} label={item.name} value={item.id} /> )} */}
                        
                        <Picker.Item label="Video Games" value="key1" />
                        <Picker.Item label="Cellphones" value="key2" />
                    </Picker>
                </View>
                <View style={{marginTop:20}} >
                    <Label>Item Description</Label>
                    <Textarea 
                    value={item.itemDescription} 
                    onChangeText={console.log(4)} 
                    rowSpan={3} bordered />
                                    
                    </View>
            <View style={{flexDirection:'column', marginTop:20}}>
                <Label>Dimension*</Label>
                <View style={{flexDirection:'row', marginTop:10}}>
                    <View style={{ flex:5, }}>
                        <Item regular>
                            <Input  name="width" onChangeText={console.log("d")} value={item.dimensions.width} numeric keyboardType='numeric' />
                        </Item>
                    </View>
                    <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text>X</Text>
                    </View>
                    <View style={{ flex:5}}>
                    <Item regular>
                        <Input name="height" onChangeText={console.log("d")}  keyboardType='numeric' value={item.dimensions.height} numeric />
                    </Item>                           
                    </View>
                    <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text>X</Text>
                    </View>
                    <View style={{ flex:5}}>
                        <Item regular>
                            <Input name="deep" onChangeText={console.log("d")} keyboardType='numeric' value={item.dimensions.deep}/>
                        </Item>
                    </View>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <View style={{ flex:9}}>
                    <Item floatingLabel>
                        <Label>Weigth *</Label>
                        <Input keyboardType='numeric' value={item.itemWeight}  numeric />

                    </Item>
                </View>
            </View>
        </React.Fragment>);
}

export default Trip
