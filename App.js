/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import HomeView from './src/HomeView';
import LoginView from './src/RegisterView';
import RegisterView from './src/RegisterView';

type Props = {};
export default class App extends Component<Props> {


  render() {

    return (
      <Router>
      <Stack key="root">
        <Scene key="home" component={HomeView} hideNavBar={true}/>
        <Scene key="login" component={LoginView} title="Login" hideNavBar={true}/>
        <Scene key="register" component={RegisterView} title="Register"/>
      </Stack>
    </Router>
    );

  }
}

