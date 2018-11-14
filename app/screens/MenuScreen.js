import React from 'react';
import { Image } from 'react-native';
import { Container,  Icon, Button, Card, CardItem, Content } from 'native-base';

export class MenuScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Menu',
    headerLeft: (
            <Button transparent>
                <Icon name='menu'/>
            </Button>
    ),
  };

  render() {
    return (
      <Container>
        <Content padder>
        <Card>
            <CardItem cardBody button onPress={() => this.props.navigation.navigate('MusicScreen')}>
                <Image source={{uri: 'spiro.png'}} style={{height: 200, width: null, flex: 1}}/>       
            </CardItem>
        </Card>
        <Card>
            <CardItem cardBody button onPress={() => this.props.navigation.navigate('FunScreen')}>
                <Image source={{uri: 'spiro.png'}} style={{height: 200, width: null, flex: 1}}/>  
            </CardItem>
        </Card>
            
        </Content>
      </Container>
    );
  }
}