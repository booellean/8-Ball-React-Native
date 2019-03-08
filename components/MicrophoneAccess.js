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

  onStartButtonPress(){
    console.log("MicrophoneAccess button was pressed!");
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onStartButtonPress()} style={{flex: 1}}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.eightBall}
          />
        </TouchableOpacity>
      </View>
    );
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
