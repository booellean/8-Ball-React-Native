import React from 'react';
import Voice from 'react-native-voice';
import {
  Image,
  TouchableOpacity,
  Text,
  StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class MicrophoneAccess extends React.Component {
  // static microphone = {
  //   access: false,
  // };

  // render() {
  //   return (
  //     <ScrollView style={styles.container}>
  //       {/* Go ahead and delete ExpoLinksView and replace it with your
  //          * content, we just wanted to provide you with some helpful links */}
  //       <ExpoLinksView />
  //     </ScrollView>
  //   );
  // }
  constructor(props) {
    super(props)
    // Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    // Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    // Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }
  onStartButtonPress(e){
    // Voice.start('en-US');
    console.log("The component function was called");
  }
  componentDidMount(){
    console.log("The Component mounted, something can happen");
  }
  render() {
    return (
        // <TouchableOpacity onPress={this.onStartButtonPress()} style={{flex: 1}}>
        //   <Image
        //     source={require('../assets/images/icon.png')}
        //     style={styles.eightBall}
        //   />
        // </TouchableOpacity>
        <div>
          This is a test to render to DOM!
        </div>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   eightBall: {
//     flex: 1,
//     maxWidth: 400,
//     marginTop: -150,
//     resizeMode: 'contain',
//   },
// });
