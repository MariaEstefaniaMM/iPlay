import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import { Button } from 'react-native-elements';

export class MusicScreen extends React.Component {

    constructor(props) {
        super(props);
      }

    static navigationOptions = {
        title: 'Music',
    };

    render() {
        return (
            <View style={styles.container}>
            <Text>Music Screen!</Text>
            <Button style={styles.button}
              title="Back to choose"
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
    }
});

