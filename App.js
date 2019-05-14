import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Platform, StyleSheet, Text, View,
  AppRegistry,
  TouchableOpacity,
  Linking,} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import MainPage from './MainPage';




export default class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  componentDidMount() {
    setTimeout(() => {
      // go to Home page
      SplashScreen.hide();
  }, 1000)
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      
  }
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  render() {
    
    
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <MainPage/>
        
        {/* <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => App);
