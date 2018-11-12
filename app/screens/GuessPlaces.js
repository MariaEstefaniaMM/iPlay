import React from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

export class GuessPlaces extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: null
        }
      }

      componentDidMount(){
          return fetch('https://facebook.github.io/react-native/movies.json')
         /* return fetch(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`)*/
          .then((res) => res.json())
          .then((resJson) =>{
            this.setState({
                loading: false,
                dataSource: resJson.movies,
            })
          })
          .catch((err)=>{
            console.log(err);
          }) 
      }

    static navigationOptions = {
        title: 'Guess The Places',
    };

    render() {

        if(this.state.loading){
            return (
                <View style={styles.container}>
                <Text>Descargando!</Text>
                </View>
            );
        }else{
            let movies = this.state.dataSource.map((val,key) =>{
                return <View key={key} style={styles.item}><Text>{val.title}</Text><Text>{val.releaseYear}</Text></View>
                //return <View key={key} style={styles.item}><Text>{val.track_list}</Text></View>
            });
            //{movies}
            /*<FlatList
                data = {this.state.dataSource}
                renderItem={
                    ({item}) => {<Text>{item.status_code}</Text>}
                }
                />*/
            return (
                <View style={styles.container}>              
                {movies}
                <Button style={styles.button}
                      title="Back to Choose"
                      onPress={() => {
                        this.props.navigation.replace('Choose');
                       }}
                     />
                </View>
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
    button: {
      backgroundColor: "rgba(92, 99,216, 1)",
      width: 80,
      height: 45,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5,
      shadowOpacity: 0.5
    },
    item:{
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    }
});

