import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Container, Header, Content, CardItem, Body } from 'native-base';

export class ChooseScreen extends React.Component {

    constructor(props) {
        super(props);
      }

    static navigationOptions = {
        title: 'Choose',
    };

    //Iimage  = IMAGEN DE LA API

    render() {
        return (
            <Card title='Choose an API:'>
            <CardItem header>
            <Image
              style={{width: 270, height: 100}}
              source={require('C:/Users/administrador/iPlay/assets/imgs/logo.png')}
              />
            </CardItem>
            <CardItem>
            <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 5, width: 100,}}
                    title='API MOVIE'
                    onPress={() => {
                        this.props.navigation.replace('GuessP');
                       }}
                 />
            </CardItem>
            <CardItem>
            <Image
              style={{width: 270, height: 100}}
              source={require('C:/Users/administrador/iPlay/assets/imgs/logo.png')}
              />
            </CardItem>
            <CardItem footer>
            <Button
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 5, width: 100,}}
                    title='API MUSIC'
                    onPress={() => {
                        this.props.navigation.replace('Music');
                       }}
                 />
            </CardItem>
         </Card>
           /* image={require('C:/Users/administrador/iPlay/assets/imgs/logo.png')}>
                 */
        );
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
    }
});

