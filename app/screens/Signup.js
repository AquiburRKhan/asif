import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Platform, AsyncStorage } from 'react-native';
import API from './../config/api'
import Button from 'react-native-button';

export default class Signup extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Signup',
        headerTitle: 'Signup',
        headerStyle: {backgroundColor: '#0080ff'},
        headerTitleStyle: {color:'#ffffff'}
    });
    constructor(props) {
        super(props);
        this.state = {
            first_name: 'johan',
            last_name: 'du',
            email: 'johan@rehive.com',
            company_id: 'test_company_1',
            password1: 'Test1234',
            password2: 'Test1234'
		};
    }

    async register(state, navigate) {
        let response = await API.register(state)
        if ( await response.status == 'success') {
            try {
                AsyncStorage.setItem('@AsIf:token', response.data.token);
                navigate('Home')
            } catch (error) {
                console.log('Failed to save token: \n' + error)
            }
        } else {
            // TODO: Need some way to show the error
            console.log(response.message)
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.view}>
                <Text style={styles.heading}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize='none'
                    onChangeText={(first_name) => this.setState({first_name})}
                    value={this.state.first_name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize='none'
                    onChangeText={(last_name) => this.setState({last_name})}
                    value={this.state.last_name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize='none'
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize='none'
                    onChangeText={(password1) => this.setState({password1})}
                    value={this.state.password1}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize='none'
                    onChangeText={(password2) => this.setState({password2})}
                    value={this.state.password2}
                />
                <Button
                    style={styles.buttonStyle}
                    onPress={() => this.register(this.state, navigate)}
                >Login</Button>
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
    },
    input: {
        ...Platform.select({
            android: {
                width: 250
            }
        }),
        height: 50,
        textAlign: 'center',
        padding: 10
    },
    heading: {
        fontSize: 24,
        color: '#72bcd4'
    },
    buttonStyle: {
        color: '#ffffff',
        backgroundColor: '#428bca',
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30
    }
});
