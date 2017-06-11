import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default class LogPayment extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Log Payment',
        headerTitle: 'Log Payment',
        headerStyle: {backgroundColor: '#0080ff'},
        headerTitleStyle: {color:'#ffffff'}
    });
    constructor(props) {
        super(props);
    }



    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.view}>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
