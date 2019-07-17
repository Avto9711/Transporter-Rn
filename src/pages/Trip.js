
import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView, FlatList, Image, Alert, TouchableHighlight, Platform} from 'react-native';
import globalColors from '../utils/colors'
import ImagePicker from 'react-native-image-crop-picker';
import {Header,Left,Icon, Container, Content,Body,Title,
    Right, Button, Text, Form, 
    Item,
    Input, 
    Label, Switch, DatePicker, Picker, Textarea} from 'native-base'

import DateTimePicker from '@react-native-community/datetimepicker';
import { Divider} from 'react-native-elements';
class Trip extends Component{
    static navigationOptions = {
        title: 'Trips',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="plane"/>
    };
    constructor(props){
        super(props);
        this.state = {
            date: new Date('2020-06-12T14:42:42'),
            mode: 'date',
            show: true,        
        }

    }

    setDate = (event, date) => {
        date = date || this.state.date;
    
        this.setState({
          show: Platform.OS === 'ios' ? true : false,
          date,
        });
      }
    
      show = mode => {
        this.setState({
          show: true,
          mode,
        });
      }
    
      datepicker = () => {
        this.show('date');
      }
    
      timepicker = () => {
        this.show('time');
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
                            <View>
                                <Button onPress={this.datepicker} title="Show date picker!" />
                                </View>
                                <View>
                                <Button onPress={this.timepicker} title="Show time picker!" />
                                </View>
                                                { this.state.show && <DateTimePicker value={this.state.date}
                                                            mode={this.state.mode}
                                                            is24Hour={true}
                                                            display="default"
                                                            onChange={this.setDate} />
                                                }
                                
                            </View>
                            <View style={{marginTop:20}}>
                                <Text style={{alignSelf:'flex-start',position:'absolute', fontWeight:'bold'}}>Willing to bring</Text>
                                <Icon style={{alignSelf:'flex-end'}} onPress={console.log(5)} type="EvilIcons" name="plus"></Icon>
                                <Divider style={{marginTop:5}}/>
                            </View>


                            <View style={{marginTop:20}} >
                              <Item floatingLabel>
                            <Label>Item</Label>
                                <Input placeholder="" />
                            </Item>
                        </View>
                        <View style={{marginTop:20, borderColor:'black'}} >
                            {/* <Text>Type</Text> */}
                            {/* <Label>Select Item Type</Label> */}
                            <Picker
                                note
                                mode="dropdown"
                                selectedValue={this.state.selectedItemType}
                                onValueChange={this.onItemTypeValueChange}>
                                    {/* {this.state.itemTypes.map(item=> <Picker.Item key={item.id} label={item.name} value={item.id} /> )} */}
                                
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" /> 
                            </Picker>
                        </View>
                        <View style={{marginTop:20}} >
                            <Label>Item Description</Label>
                            <Textarea 
                            value={this.state.itemDescription} 
                            onChangeText={console.log(4)} 
                            rowSpan={5} bordered />
                                               
                        </View>
                        <View style={{flexDirection:'column', marginTop:20}}>
                        <Label>Dimension*</Label>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={{ flex:5, }}>
                                    <Item regular>
                                        <Input  name="width" onChangeText={console.log("d")} value={6} numeric keyboardType='numeric' />
                                    </Item>
                                </View>
                                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                                        <Text>X</Text>
                                </View>
                                <View style={{ flex:5}}>
                                    <Item regular>
                                        <Input name="height" onChangeText={console.log("d")}  keyboardType='numeric' value={6} numeric />
                                    </Item>                           
                                </View>
                                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                                        <Text>X</Text>
                                </View>
                                <View style={{ flex:5}}>
                                    <Item regular>
                                        <Input name="deep" onChangeText={console.log("d")} keyboardType='numeric' value={6}/>
                                    </Item>
                                </View>
                            </View>

                        </View>
                        <View style={{marginTop:20}}>
                            <View style={{ flex:9}}>
                                <Item floatingLabel>
                                    <Label>Weigth *</Label>
                                    <Input keyboardType='numeric' value={5}  numeric />

                                </Item>
                            </View>
                        </View>
                        
                            <View style={{marginTop:20}} >
                                <Button onPress={this.showAlert} full style={{backgroundColor: globalColors.baseBlue}}><Text> Save </Text></Button>
                            </View>
                        <View style={{marginTop:20}}>
                                <Divider style={{marginTop:5}}/>
                        </View>                          
                    </View>
                    </ScrollView>
                </Content>

            </Container>
        )

    }
}

export default Trip