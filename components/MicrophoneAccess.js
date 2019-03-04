import React from 'react';
import Voice from 'react-native-voice';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class MicrophoneAccess extends React.Component {
  // static microphone = {
  //   access: false,
  // };

  // async storeItem(key, item) {
  //   try {
  //       //we want to wait for the Promise returned by AsyncStorage.setItem()
  //       //to be resolved to the actual value before returning the value
  //       var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
  //       return jsonOfItem;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

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
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }
  onStartButtonPress(e){
    Voice.start('en-US');
  }
  componentDidMount(){
    console.log("The Component mounted, something can happen");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
