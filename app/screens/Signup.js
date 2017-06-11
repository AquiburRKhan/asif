import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Signup extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Signup',
        headerTitle: 'Signup',
        headerStyle: {backgroundColor: '#0080ff'},
        headerTitleStyle: {color:'#ffffff'}
    });
    constructor(props) {
        super(props);
        this.state = { user: '' };
        this.state = { company: '' };
        this.state = { password: '' };
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.heading}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email,Number,Unique ID"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={(user) => this.setState({user})}
                    value={this.state.user}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Company"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={(company) => this.setState({company})}
                    value={this.state.company}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    input: {
        width: 250,
        textAlign: 'center',
        padding: 10
    },
    heading: {
        fontSize: 24,
        color: '#72bcd4'
    }
});
