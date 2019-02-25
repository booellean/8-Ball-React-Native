import React from 'react';
import { Text } from 'react-native';

export class AmaticBold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'amatic-bold' }]} />;
  }
}

export class AmaticRegular extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'amatic-regular' }]} />;
  }
}

export class Annie extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'annie' }]} />;
  }
}
