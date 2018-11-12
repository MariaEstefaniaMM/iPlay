import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './app/screens/HomeScreen';
import { ChooseScreen } from './app/screens/ChooseScreen';
import { GuessPlaces } from './app/screens/GuessPlaces';
import { MusicScreen } from './app/screens/MusicScreen';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Choose: ChooseScreen,
  GuessP: GuessPlaces,
  Music: MusicScreen
},
  {
    initialRouteName: 'Home',
  }
);
