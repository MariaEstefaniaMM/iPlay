import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';

export class HomeScreen extends React.Component {

    constructor(props) {
      super(props);
    }

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
            <Image
              style={{width: 300, height: 300}}
              source={require('C:/Users/administrador/iPlay/assets/imgs/logo.png')}
              />
            <Button style={styles.button}
              title="START" 
              onPress={() => {
                this.props.navigation.replace('Choose');
               }}
             />
            </View>
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
      width: 80,
      height: 45,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5,
      shadowOpacity: 0.5
    }
});

