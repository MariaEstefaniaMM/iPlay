import React from 'react';
import { Container, ListItem, CheckBox, Body, Icon, Button, Content, Text, Card, CardItem } from 'native-base';

export class CheckBoxComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { checked:false
                       };
    }

    toggleChange = () => {
     if (!this.state.checked){ 
         this.props.checkedTrue(this.props.item)
     } else {
         this.props.checkedFalse(this.props.item)
     }
     this.setState({ checked: !this.state.checked })
    };

    render() {
        console.log(this.props.item)
        let item = this.props.item;
        return (
          <Content>
            <ListItem>
            <CheckBox checked={this.state.checked} onPress={() => this.toggleChange()}/>
                        <Body>
                          <Text>{this.props.item}</Text>
                        </Body>
            </ListItem>
          </Content>
        );
    }
}