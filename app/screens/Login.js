import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, TextInput,Button, AsyncStorage } from 'react-native';
import API from './../config/api'

export default class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Asif',
        headerStyle: {backgroundColor: '#0080ff'},
        headerTitleStyle: {color:'#000'}
    });
    constructor(props) {
        super(props);
        this.state = { 
			identifier: 'test1@rehive.com',
			company_id: 'test_company_1',
			password: 'test1'
		};
    }

    login(_state) {
        // Log in
        let response = API.login(_state)
            .then((response) => {
                // Store the auth token
                try {
                    AsyncStorage.setItem('@AsIf:token', response.data.token);
                } catch (error) {
                    console.log('Failed to save token: \n' + error)
                }
            })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.view}>
                <Text style={styles.heading}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email,Number,Unique ID"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize='none'
                    onChangeText={(identifier) => this.setState({identifier})}
                    value={this.state.identifier}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Company ID"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize='none'
                    onChangeText={(company_id) => this.setState({company_id})}
                    value={this.state.company_id}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="#a9a9a9"
                    autoCapitalize='none'
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <Button
					onPress={() => this.login(this.state)}
                    title="Login"
                />
                <Text onPress={() => navigate('Signup')} style={styles.links}>Don't have an account? Sign up</Text>
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
        height: 50,
        textAlign: 'center',
        padding: 10
    },
    heading: {
        fontSize: 24,
        color: '#72bcd4'
    },
    links: {
        color: '#0080ff',
        marginTop: 10
    }
});
