import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Asif',
        headerTitle: 'Asif',
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
                <Button
                    containerStyle={styles.buttonContainer}
                    style={styles.logButton}
                    onPress={() => navigate('LogPayment')}>Log Payment</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logButton: {
        color: '#ffffff',
        backgroundColor: '#428bca',
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        marginTop: 10

    },
    buttonContainer: {
        alignSelf: 'stretch'
    }
});
