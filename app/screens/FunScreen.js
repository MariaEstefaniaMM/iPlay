import React from 'react';
import { Image, FlatList, Modal, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Container,  Header, DeckSwiper, Thumbnail, Left, ListItem, CheckBox, Body, Icon, Button, Content, Text, Card, CardItem } from 'native-base';
import { CheckBoxComponent } from '../components/CheckBoxComponent';

//import { getinfo } from '../api/fetch.js'


export class FunScreen extends React.Component {
  endPoint = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0';
  key = 'ffb107a6defb4eafba55d8d54d95bcbc';

  list = [ 'age', 'gender', 'smile', 'facialHair', 'glasses', 
           'emotion', 'hair','makeup', 'blur', 'exposure', ];

  images = [
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/355164/pexels-photo-355164.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/316680/pexels-photo-316680.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/34667/person-human-male-man.jpg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&h=350',
  ]; 

  cards = [
    {
      name: 'One',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
        name: 'Two',
        image: 'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&h=350',
      },
  ];

  constructor(props) {
    super(props);
    this.state = {
      photo: this.images[0],
      base64: '',
      arrayParams: [],
      modalVisible: false,
    };
  }

  static navigationOptions = {
    title: 'FunScreen',
  };

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  sendRequest() {
    alert(this.state.arrayParams.join(','));
    fetch(
      this.endPoint +
        '/detect?returnFaceAttributes=' +
        this.state.arrayParams.join(','),
      {
        method: 'POST',
        body: JSON.stringify({ url: this.state.photo }),
        headers: {
          'Content-type': 'application/json',
          'Ocp-Apim-Subscription-Key': this.key,
        },
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        alert(JSON.stringify(responseJson[0].faceAttributes));
        console.log(responseJson[0].faceAttributes);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

  puchToArray = param => {
    let tmp = this.state.arrayParams;
    tmp.push(param);
    this.setState({ arrayParams: tmp });
  };

  removeFromArray = param => {
    let tmp = this.state.arrayParams;
    let index = tmp.indexOf(param);
    if (index > -1) {
      tmp.splice(index, 1);
      this.setState({ arrayParams: tmp });
    }
  };

  pickImage = () => {};

  render() {
    return (
    <Container>
        <Content>
          <Card>
              <TouchableHighlight>
                  <CardItem header button onPress={() => { this.setModalVisible(true);}}>
                        <Body>
                            <Text>Pick an image</Text>
                            </Body>
                        </CardItem>
                    </TouchableHighlight>
                    <CardItem cardBody button onPress={() => alert('This is Card Body')}>
                        <Image source={{ uri: this.state.photo }} style={{ height: 200, width: null, flex: 1 }}/>
                        </CardItem>
                </Card>
                <FlatList  data={this.list} renderItem={({ item }) => (
                    <CheckBoxComponent item={item} checkedTrue={param => { this.puchToArray(param); }}
                        checkedFalse={param => { this.removeFromArray(param); }}
                        /> )}
                    />
                    <Button iconLeft onPress={() => this.sendRequest()}>
                        <Icon name="eye" />
                        <Text>Find Out!</Text>
                        </Button>
            </Content>
            <Modal animationType="fade" transparent={false} presentationStyle= "pageSheet" visible={this.state.modalVisible}
                    onRequestClose={() => {  console.log('Modal has been closed.');}}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <TouchableHighlight
                                onPress={() => { this.setModalVisible(!this.state.modalVisible);}}>
                                <Text>Hide Modal</Text>
                                </TouchableHighlight>
                                <View>
                                <DeckSwiper ref={(c) => this._deckSwiper = c} dataSource={this.cards} 
                                            renderEmpty={() => <View style={{ alignSelf: "center" }}> <Text>Over</Text></View>} 
                                            renderItem={item =>
                                                <Card style={{ elevation: 3 }}>
                                                    <CardItem cardBody>
                                                        <Image style={{ height: 300, flex: 1 }} source={{uri: item.image}} />
                                                        </CardItem>
                                                    <CardItem>
                                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                                    <Text>{item.name}</Text>
                                                    </CardItem>
                                        </Card>
                                    }
                                 />
                                </View>
                                <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                                    <Icon name="arrow-back" />
                                    <Text>Swipe Left</Text>
                                </Button>
                                <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                                    <Icon name="arrow-forward" />
                                        <Text>Swipe Right</Text>
                                 </Button>
                            </View>
                        </View>
                    </Modal>
             </Container>
    );
  }
}
