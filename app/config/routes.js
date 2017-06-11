import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import LogPayment from '../screens/LogPayment';

export const Tabs = StackNavigator({
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    },
    Home: {
        screen: Home
    },
    LogPayment: {
        screen: LogPayment
    }
});