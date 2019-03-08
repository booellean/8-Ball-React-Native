import React from 'react';
import Voice from 'react-native-voice';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet } from 'react-native';

export class MicrophoneAccess extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.welcomContainer}>
        <TouchableOpacity onPress={this._onStartButtonPress} style={{flex: 1}}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.eightBall}
          />
        </TouchableOpacity>
      </View>
    );
  }

  _onStartButtonPress(){
    console.log("MicrophoneAccess button was pressed!");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
welcomeContainer: {
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 20,
},
  eightBall: {
    flex: 1,
    maxWidth: 400,
    marginTop: -150,
    resizeMode: 'contain',
  },
});
