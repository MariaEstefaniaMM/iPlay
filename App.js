import React from 'react';
import { createStackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import { MenuScreen } from './app/screens/MenuScreen';
import { FunScreen } from './app/screens/FunScreen';
import { MusicScreen } from './app/screens/MusicScreen';
import { TrackScreen } from './app/screens/TrackScreen';

const RootStack = createStackNavigator(
  {
    MenuScreen: {
      screen: MenuScreen,
    },
    MusicScreen: {
      screen: MusicScreen,
    },
    FunScreen: {
      screen: FunScreen,
    }, 
    TrackScreen: {
      screen: TrackScreen,
    }   
  },
  {
    initialRouteName: 'MenuScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
