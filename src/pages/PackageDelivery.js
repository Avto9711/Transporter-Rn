import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView, FlatList, Image, Alert, TouchableHighlight} from 'react-native';
import globalColors from '../utils/colors'
import ImagePicker from 'react-native-image-crop-picker';
import {Header,Left,Icon, Container, Content,Body,Title,
    Right, Button, Text, Form, 
    Item,
    Input, 
    Label, 
    Grid,
    Col, 
    Row, ListItem,CheckBox, Picker, Textarea, Switch, SwipeRow,List} from 'native-base'



function renderItemReferralLink(item,deleteReferralinkItem){
        return   <SwipeRow
        rightOpenValue={-75}
        right={
        <Button danger onPress={() =>{ deleteReferralinkItem(item.itemId);} }>
            <Icon active name="trash" />
        </Button>
        }
        body={
        <View style={{ flex: 1 }}>
                <Item  regular style={{marginBottom:2, marginTop:2}}>
                    <Input value={item.text} />
                </Item>
        </View>
        }
    />
    }
class PackageDelivery extends Component{
    static navigationOptions = {
       
    };  

    constructor(props){
        super(props)
        this.state = {
            referralLinks:[{itemId:1,text:'https://example.com'}, {itemId:2,text:'https://www.ebay.com/'}],
            Image1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEUAAAD///9/f3+/v7/f399fX18fHx8/Pz+fn59jyQpqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACHElEQVR4nO3VTWsaURSA4ZP5uOMy13v8WI40tF06bTBbp1riMtL8gClNocuE0q4VLP3bvXfGQGIlYMGxi/eBeIZ4Ql7GmVEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB/ExWzm+ao3HnnbPrCX50fq2er0NI1R0+ykvBfX8pKjpyVusqUzek6IOtrceSsuC/ysKoPD8ha2xayOrnZLEJWPdLio7G2CllJ/3L1Xf25vNBcTDHRZkPkx+2RszrD8HrnirHPqsdoVt6sw299lr51w9ueRLrp+jdn2mzI8a+tzLo3IpsqHfisMIxWyXj7ISZdsXnmJOkbJ6M81maxhSz5Vtpr6Yp88FlhRP7kTB+z+lJWohLlRqWoMm0W28gS88n+1PncSWnCCBfb4yXvh78P1N95r1TmYrTeaCdLZPnbWqtSZmHE539nfbELDXVab7SRlUz9z1UvHJZZGPvOVvHav/gbVeuNNrJCxdnEXzK//IcYRmcgnelOln8wNNdWvdFGVuSf8uu8qNKeLwjD33ifVztZZRWpLFex1httZIXvRJWH5rlVj/XM3sfuWdZo8b7MYzffLraRFRXOP8EvF1W4eMKIiivJ5s+y0nKyHMvmWpuNNrIOYNypC/a4uE+Hp27YY7m6G5y6YY/E2vGpG/Ywm3enTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Jf+ABh/R+zTl92rAAAAAElFTkSuQmCC",
            Image2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEUAAAD///9/f3+/v7/f399fX18fHx8/Pz+fn59jyQpqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACPUlEQVR4nO3VwW8SQRTH8ddlWTh2mCn0uMRGPbLS0CsjmHKEqPc11sQjjYlnSNb4b/tmlyaWogmNEzx8Pwm8Dfs2/Nh5O4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA8STFbNkd+78zZ9I8XZdWsjJRnp3DeNke/xUrP5a+xUlv0o6Zq2zLzy2NjDfPkMmqslv7q+82xsYpSXPRY3TyrFiFWXdrFu8yYMsRK+9ebb07v5ZXLJSsmrukQmT+dxH+rWy/GnS1G+kV1Gc78chs+1Vjutb38cCGJq3p6cuaaDpGPEvludYx9JVKV7YHGCiVzZTraLWLaE5N3rKT9zOo8tVzTGESeLfnqza30RN5qrFASvTnTh1h98WGKkjxzOk8d1zQGw7hPou5B7813N59b8VkoYdgeRl6Lr5frywun85S5uiNc1HXryLFEVj+NMU58J5TW+dNYn83ChXSu7gg/xU/iRkqn+rq5CIe+E8qhu1W81Dd9UF3dEZoiT1ad4myiI/NDFzGU7kC6071YujE0s1V36KnVJnKsRHf5bV6U7QtNEIo+eJ82e7F8mTiN0nJ1h9TbaWT6n+jkvtm36rKdmXXLPoo1XIx93rLzXaOu93g8jhsrKazu4NeLMgxPKElxI535o1htP1mNpLp1TYeITr6JG+sImT11ggOu1u3Yz99zrDZ3g1NnOCA1ZnTqDAdk1ZtTRwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Jd+AfFXTEtoBIyvAAAAAElFTkSuQmCC",
            Image3:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEUAAAD///9/f3+/v7/f399fX18fHx8/Pz+fn59jyQpqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACQ0lEQVR4nO3WwYvaQBTH8bdJTDzumFH3GOnS9mjaxb06Na0elfYPyLJb6HGXQs8Klv7bfZPswq61BYXBHr4f0BfMC/wyzkwiAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAcaJytmyP3M6Zs+lfL8rKRR0qUKu0Lm+PnsVKzuWfsR5yNwiaqpPXqVseGmtTRxdBY8V61w/rQ2MtJM2Dx+oW6XbhYzWlU35Mjal9rGRwtf5udSwvbSFpObFth8jP0LG6zZ9xl5djjdWU0cwtN/5XjWXf5hdf+hLZbU9Pzmzb0VzXDxorM/kbkW3dGWosX1JbJ+PHPzHpiSmyXJKBDs6oiG3b6O/DFEFjyTdn5tIT+aCxfIl0cKZPsQbiarESFamVss5s26huzKewsST9bH7YqsrFpb74yfY05bXoOrAiX19ZqSS1TUdz1W0vcCyR1S9jjBWX+RKf/xnr1iysT2ebjvZmwk75ZKqf62b+usyXfaNVvtYvXag2ayd6NhcdvJB8irNJz695l/rSHUp3uhNLN4Z2bjUdOlSaLuxoRbrLb4qy7vQ1gS+68G7WO7FcHVlZrWPbdOipqo4Czy19Jlp9xjX7VlM2M3Mf5y9ijRbvXRHn1WOjzsaZm4aNFZW57uBX+kbg2hKV15JVL2J13GQ1lu3cth36JHCh3yAOEHj1HefyvhP2reE4q/Xd8NQZ9kiMGZ86wx7p9t2pIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/ku/AfmgTgUbnWwzAAAAAElFTkSuQmCC",
            selectedItemType:null,
            itemTypes:[{name:'Select item type',id:0},{name:'Electronic Device',id:1}, {name:'Shoes',id:2}, {name:'Food',id:3}],
            estimatedValue:null,
            itemDescription:null,
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
                            <Title>Delivery</Title>
                        </Body>
                        <Right/>
                        
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
                            {/* <Label>Select Item Type</Label> */}
                            <Picker
                                note
                                mode="dropdown"
                                selectedValue={this.state.selectedItemType}
                                onValueChange={this.onItemTypeValueChange}>
                                    {this.state.itemTypes.map(item=> <Picker.Item key={item.id} label={item.name} value={item.id} /> )}
{/*                                 
                                
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" /> */}
                            </Picker>
                        </View>
                        <View style={{marginTop:20}} >
                            <Label>Item Description</Label>
                            <Textarea 
                            value={this.state.itemDescription} 
                            onChangeText={this.itemDescriptionChange.bind(this)} 
                            rowSpan={5} bordered />
                                               
                        </View>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <View style={{ flex:9}}>
                                <Item floatingLabel>
                                    <Label>Estimated Value</Label>
                                    <Input keyboardType='numeric' onChangeText={this.estimatedValueChange.bind(this)} value={this.state.estimatedValue} numeric />

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
                                        <Input  name="width" onChangeText={this.changeDimensionValue.bind(this, "width")} value={this.state.itemDimension.width} numeric keyboardType='numeric' />
                                    </Item>
                                </View>
                                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                                        <Text>X</Text>
                                </View>
                                <View style={{ flex:5}}>
                                    <Item regular>
                                        <Input name="height" onChangeText={this.changeDimensionValue.bind(this, "height")}  keyboardType='numeric' value={this.state.itemDimension.height} numeric />
                                    </Item>                           
                                </View>
                                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                                        <Text>X</Text>
                                </View>
                                <View style={{ flex:5}}>
                                    <Item regular>
                                        <Input name="deep" onChangeText={this.changeDimensionValue.bind(this,"deep")} keyboardType='numeric' value={this.state.itemDimension.deep}  numeric />
                                    </Item>                            
                                </View>
                            </View>

                        </View>
                        <View style={{marginTop:20}}>
                            <View style={{ flex:9}}>
                                <Item floatingLabel>
                                    <Label>Weigth *</Label>
                                    <Input keyboardType='numeric' value={this.state.itemDimension.width}  numeric />

                                </Item>
                            </View>
                        </View>
                    <View style={{marginTop:20}} >
                    
                        <View style={{flexDirection:'row', fontSize:10}}>
                            <Label>Pictures (up to 3) </Label> 
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly', marginTop:10}}>
                            
                            <TouchableHighlight onPress={()=>{ this.insertImage(1)}}>
                                <View  >
                                    <Image  source = {{ uri: this.state.Image1 }} style={{width: 100,height: 100, resizeMode: 'center' }}  />
                                </View> 
                            </TouchableHighlight>
 
                            <TouchableHighlight onPress={()=>{ this.insertImage(2)}}>
                                <View >
                                    <Image  source = {{ uri: this.state.Image2 }} style={{width: 100,height: 100, resizeMode: 'center' }}  />
                                </View> 
                            </TouchableHighlight>          

                            <TouchableHighlight onPress={()=>{ this.insertImage(3)}}>
                                <View >
                                    <Image  source = {{ uri: this.state.Image3 }} style={{width: 100,height: 100, resizeMode: 'center' }}  />
                                </View> 
                            </TouchableHighlight>                                             
                        </View>
                                            
                    </View>
                    <View style={{marginTop:20, flexDirection:'column'}}>
                        <Label>Referral Links <Icon onPress={this.insertReferralinkItem.bind(this)} type="EvilIcons" name="plus"></Icon> </Label>     
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

                    <View style={{marginTop:20}} >
                            <Label>Delivery Notes</Label>
                            <Textarea value={this.state.deliveryNotes} onChangeText={this.onDeliveryNotesChange.bind(this)}  rowSpan={5} bordered />
                                               
                    </View>
                    <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between'}} >
                            <CheckBox  checked={false} />
                            <Text style={{fontSize:15}}>Purchase Package through the app (Only on US)</Text>
                    </View>

                    <View style={{marginTop:20}} >
                         <Button onPress={this.showAlert} full style={{backgroundColor: globalColors.baseBlue}}><Text> Save </Text></Button>
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