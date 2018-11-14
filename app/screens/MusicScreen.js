import React from 'react';
import { StyleSheet, View, Image, Text, FlatList} from 'react-native';
import { Button, Container,Content, Header, Item, Input, Icon} from 'native-base';
import { TrackComponent } from '../components/TrackComponent';

export class MusicScreen extends React.Component {
    
    static navigationOptions = {
      title: 'Top 10 tracks',        
    };
        
    key = '96384730799bd06d19347d09c5d4a7ae';
    endPoint = 'http://api.musixmatch.com/ws/1.1/';
    methodGetTracks = 'chart.tracks.get?page=1';
    optionGetTracks = '&page_size=10&country=us&f_has_lyrics=1';
    methodSearch = 'track.search?q_track_artist=';
    optionSearch = '&page_size=10&country=us&f_has_lyrics=1';

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            track_list: [],
            track_list_search: [],
            search:''
        }
      }

      componentDidMount(){
        return fetch(this.endPoint+this.methodGetTracks+this.optionGetTracks+'&apikey='+this.key)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson.message.body.track_list);
            this.setState({ 
                loading: false,
                track_list: responseJson.message.body.track_list 
            });
          })
          .catch(err => 
            console.log(err));
      }

      sendRequest(){
        return fetch(this.endPoint+this.methodSearch+this.state.search+this.optionSearch+'&apikey='+this.key)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            this.setState({ 
                loading: false,
                track_list_search: responseJson.message.body.track_list 
            });
            console.log(this.state.track_list_search)
            if ((this.state.track_list_search).length==0){
                alert("No match");
                this.setState({search:''})
            }
          })
          .catch(err => 
            console.log(err));
      }

    render(){
        if(this.state.loading){
            return(
                <View style={styles.container}>
                <Text>Descargando!</Text>
                </View>
            );
        }else{
          this.displayList=this.state.search?this.state.track_list_search:this.state.track_list
          return (
            <Container>
                <Header searchBar rounded>
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search Track or Artist" onChangeText={(text) => this.setState({search: text})} value={this.state.search}/>
                    <Button transparent onPress={() => this.sendRequest()}>
                    <Icon name="ios-people" />
                  </Button>
                  </Item>
                </Header>
                <Content>
                <FlatList
                  data={this.displayList}
                  renderItem={({ item }) => (
                    <TrackComponent navigation={this.props.navigation} item={item}/>
                  )}
                />
                </Content>
              </Container>
              );
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

