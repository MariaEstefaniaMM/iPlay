import React from 'react';
import { ListItem,Body, Button, Text, List, Left, Thumbnail, Right } from 'native-base';

export class TrackComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      console.log(this.props.item)
      return (
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: this.props.item.track.album_coverart_100x100 }} />
                  </Left>
                    <Body>
                      <Text>{this.props.item.track.track_name}</Text>
                      <Text note numberOfLines={1}>{this.props.item.track.artist_name}</Text>
                    </Body>
                    <Right>
                      <Button transparent onPress={() => this.props.navigation.navigate('TrackScreen', { item: this.props.item })}>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
        );
    }
}