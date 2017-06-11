import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, TextInput,Button } from 'react-native';

export default class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Asif',
        headerStyle: {backgroundColor: '#0080ff'},
        headerTitleStyle: {color:'#000'}
    });
    constructor(props) {
        super(props);
        this.state = { 
			user: '',
			company: '',
			password: ''
		};
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
                <Button
					onPress={() => console.log(this.state)}
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
