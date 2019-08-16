import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView, FlatList, Image, Alert, TouchableHighlight} from 'react-native';
import globalColors from '../utils/colors'
import ImagePicker from 'react-native-image-crop-picker';
import { SliderBox } from 'react-native-image-slider-box';
import {Header,Left,Icon, Container, Content,Body,Title,
    Right, Button, Text, Form, 
    Item,
    Input, 
    Label, 
    Grid,
    Col, 
    Row, ListItem,CheckBox, Picker, Textarea, Switch, SwipeRow,List,Thumbnail} from 'native-base'

import { Divider, AirbnbRating } from "react-native-elements";


function renderItemReferralLink(item,deleteReferralinkItem){
        return   <SwipeRow
        rightOpenValue={-75}
        body={
        <View style={{ flex: 1 }}>
                <Item  regular style={{marginBottom:2, marginTop:2}}>
                    <Input editable={false} value={item.text} />
                </Item>
        </View>
        }
    />
    }
class PackageDeliveryDetail extends Component{
    static navigationOptions = {
       
    };  

    constructor(props){
        super(props)
        this.state = {
            referralLinks:[{itemId:1,text:'https://example.com'}, {itemId:2,text:'https://www.ebay.com/'}],
            images: [
                'https://source.unsplash.com/1024x768/?nature',
                'https://source.unsplash.com/1024x768/?water',
                'https://source.unsplash.com/1024x768/?girl',
                'https://source.unsplash.com/1024x768/?tree'
              ],
            selectedItemType:null,
            itemTypes:[{name:'Select item type',id:0},{name:'Electronic Device',id:1}, {name:'Shoes',id:2}, {name:'Food',id:3}],
            estimatedValue:null,
            itemDescription:"Lorem Ipsum ",
            itemDimension:{
                width:null,
                height:null,
                deep:null
            },
            deliveryNotes:null
        }
        this.deleteReferralinkItem =  this.deleteReferralinkItem.bind(this);
        this.onItemTypeValueChange = this.onItemTypeValueChange.bind(this);
        this.onItemTypeValueChange = this.estimatedValueChange.bind(this)
    }


    onItemTypeValueChange(value){
        this.setState(state=>({
            selectedItemType:value
        }))
    }

    estimatedValueChange(value, val){
        console.log(value)
        this.setState(state=>({
            estimatedValue:value
        }))
    }

    changeDimensionValue(field, value){
        this.setState(state=>({
            itemDimension: {
                [field]:value
            }
        }))
    }

    itemDescriptionChange(value){
        this.setState(state=>({
            itemDescription:value
        }))
    }
    onDeliveryNotesChange(value){
        this.setState(state=>({
            deliveryNotes:value
        }))
    }
    insertImage = (imageNumber)=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            this.setState(state=>({
                ['Image' + imageNumber]: image.path
            }));
          });
    }
    deleteReferralinkItem(itemId){
        //When using React, you should never mutate the state directly. 
        //If an object (or Array, which is an object too) is changed, you should create a new copy.
        const {referralLinks } = this.state;
        this.setState(state  => ({
            referralLinks:  referralLinks.filter(x=> x.itemId != itemId )
        }));

     }
     insertReferralinkItem(){
        //When using React, you should never mutate the state directly. 
        //If an object (or Array, which is an object too) is changed, you should create a new copy.
        const {referralLinks } = this.state;
        this.setState(state  => ({
            referralLinks:  [...referralLinks, {itemId:state.referralLinks.length + 1,text:null }]
        }));

     }


     componentWillUpdate(nextProps, nextState){
     }

    showAlert = ()=>{
        Alert.alert(
            'Send Package',
            'Information',
            [
              {text: JSON.stringify(this.state), onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
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
                            <Title>Package for Delivery</Title>
                        </Body>
                        <Right/>
                        
                </Header>
                <Content contentContainerStyle={{flex:1, padding:10}} >
                <ScrollView>
                    <View style={{flex:1, flexDirection:'column', padding:10}}>
                        <View style={{flexDirection:'row'}}>
                            <SliderBox
                                    images={this.state.images}
                                    onCurrentImagePressed={index =>
                                        console.warn(`image ${index} pressed`)
                                    }
                                />
                        </View>
                        <View style={{marginTop:10}} >
                            <Text>Item: Playstation 4</Text>
                            {/* <Item floatingLabel>
                            <Label>Item</Label>
                                <Input placeholder="" />
                            </Item> */}
                        </View>
                        <View style={{marginTop:10, borderColor:'black'}} >
                            <Text>Delivery Location: Santo Domingo, Dominican Rep.</Text>
                        </View>
                        <View style={{marginTop:10}} >
                            <Text>Published Time: 1d ago</Text>
                        </View>


                        <View style={{marginTop:30}} >
                            <Text style={{fontWeight:'bold'}}>About the item</Text>
                        </View>
                        <Divider style={{marginTop:5, height: 1, backgroundColor: "#cecece" }} />
                        <View style={{marginTop:10}} >
                            <Text>Item Type : VideoGames</Text>
                        </View>
                        <View style={{marginTop:10}} >
                            <Text>Estimated Value : 400USD</Text>
                            <Text style={{fontSize:10}}>Minimun Security Deposit : 200USD </Text><Text style={{color:'blue',fontSize:10}}>Why?</Text>
                        </View>
                        <View style={{marginTop:10}} >
                            <Text>Dimension : 13 x 42 x 25" (Medium)</Text>
                        </View>
                        <View style={{marginTop:10}} >
                            <Text>Weight : 2 Pounds(s) (Medium)</Text>
                        </View>
                        <View style={{marginTop:10}} >
                        <Text>Item Description.</Text>
                            <View style={styles.multiLineTextcontainer}>
                                <Text style={styles.paragraph}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</Text>
                            </View>
                        </View>
                        <View style={{marginTop:30}} >
                            <Text style={{fontWeight:'bold'}}>Delivery Notes</Text>
                        </View>
                        <Divider style={{marginTop:5, height: 1, backgroundColor: "#cecece" }} />
                        <View style={styles.multiLineTextcontainer}>
                            <Text style={styles.paragraph}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."}</Text>
                        </View>
                        <View style={{marginTop:30}} >
                            <Text style={{fontWeight:'bold'}}>Referral Links</Text>
                                <View style={{justifyContent:'space-between', flexDirection:'column', flex:1}}>
                                <List>
                                    <FlatList
                                        data={this.state.referralLinks}
                                        keyExtractor={(item,index)=> item.itemId.toString() }
                                        renderItem={({item,index})=>renderItemReferralLink(item,this.deleteReferralinkItem)}
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
                    </View>

                    <View style={{marginTop:30}} >
                            <Text style={{fontWeight:'bold'}}>About the recipient</Text>
                        </View>
                        <Divider style={{marginTop:5, height: 1, backgroundColor: "#cecece" }} />
                    <List>
                          <ListItem avatar>
                            <Left>
                              <Thumbnail source={{ uri: 'https://scontent.flrm1-1.fna.fbcdn.net/v/t1.0-9/61321713_10220091030693879_5542567377507450880_n.jpg?_nc_cat=100&_nc_oc=AQmLeAkBtHnb8I-v8-Ynm7PLnb7iT0iXoRhWlek0KEto8SvQj8EzduQGf2enTWy1v2o&_nc_ht=scontent.flrm1-1.fna&oh=348f35b7a138649adf9d63e0a9c7cb72&oe=5DDA5005'  }} />
                            </Left>
                            <Body style={{alignContent:'flex-start'}}>
                              <Text>Israel Rivera, Kissimee Florida</Text>
                              <AirbnbRating
                               
                                onFinishRating={this.ratingCompleted}
                                count={5}
                                defaultRating={3}
                                size={25}
                                showRating={false}
                                
                                        />   
                            </Body>
                            <Right>
                               <Text style={{fontSize:15}}></Text>
                            </Right>
                          </ListItem>
                        </List>
                        <View style={{marginTop:30}} >
                            <Text style={{fontWeight:'bold'}}>Actions</Text>
                        </View>
                        <Divider style={{marginTop:5, height: 1, backgroundColor: "#cecece" }} />
                        <View style={{marginTop:20}}>
                            <Button  full style={{backgroundColor: globalColors.baseBlue}}><Text> Contact Recipient </Text></Button>

                        </View>
                        <View style={{marginTop:5}}>
                            <Button  full style={{backgroundColor: globalColors.baseBlue}}><Text> Start Transport Process </Text></Button>

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
    multiLineTextcontainer: {
        padding: 8,
      },
      paragraph: {
        justifyContent:'center'
      },
})

export default PackageDeliveryDetail