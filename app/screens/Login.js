import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';


export default class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Login',
        headerTitle: 'Login',
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
                    style={{width: 250,textAlign: 'center',padding: 10,marginBottom: 10, height: 50}}
                    placeholder="Enter Password"
                    placeholderTextColor="#a9a9a9"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <Button
                    style={styles.buttonStyle}
                    onPress={() => navigate('Home')}
                >Login</Button>
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
        width: 250,
        textAlign: 'center',
        padding: 10,
        height: 50
    },
    heading: {
        fontSize: 24,
        color: '#72bcd4'
    },
    links: {
        color: '#0080ff',
        marginTop: 10
    },
    buttonStyle: {
        color: '#ffffff',
        backgroundColor: '#428bca',
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30

    }
});
