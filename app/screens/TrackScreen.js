import React from 'react';
import { Image, FlatList, Modal, TouchableHighlight, View, StyleSheet} from 'react-native';
import { Container, ListItem, CheckBox, Body, Icon, Button, Content, Text, Card,  CardItem } from 'native-base';
import { CheckBoxComponent } from '../components/CheckBoxComponent';

export class TrackScreen extends React.Component {
  
  constructor(props) {
        super(props);
        this.state = {
            lyric:''
        }
  }

  static navigationOptions = {
    title: '',
  };

  key = '96384730799bd06d19347d09c5d4a7ae';
  endPoint = 'http://api.musixmatch.com/ws/1.1/';
  methodGetLyric = 'track.lyrics.get?track_id=';

  //const { navigation } = this.props;
  item = this.props.navigation.getParam('item');

  componentDidMount(){
        return fetch(this.endPoint+this.methodGetLyric+this.item.track.track_id+'&apikey='+this.key)
        .then(response => response.json())
        .then(responseJson => {
            alert(JSON.stringify(responseJson.message.body.lyrics.lyrics_body))
            console.log(responseJson);
            this.setState({ 
                lyric: responseJson.message.body.lyrics.lyrics_body
            });
          })
          .catch(err => 
            console.log(err));
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={{ uri: this.item.track.album_coverart_100x100 }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
          <Text>Track name: {this.item.track.track_name}</Text>
          <Text>Track rating: {this.item.track.track_rating}</Text>
          <Text>Number of favourite: {this.item.track.num_favourite}</Text>
          <Text>Album name: {this.item.track.album_name}</Text>
          <Text>Lyric: {this.state.lyric}</Text>
          <Text>Url: {this.item.track.track_share_url}</Text>
          <Text>First release date: {this.item.track.first_release_date}</Text>
          <Text>Updated at: {this.item.track.updated_time}</Text>
        </Content>
      </Container>
    );
  }
}

