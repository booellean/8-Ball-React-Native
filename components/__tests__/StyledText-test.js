import 'react-native';
import React from 'react';
import { AmaticBold } from '../StyledText';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AmaticBold>Snapshot test!</AmaticBold>).toJSON();

  expect(tree).toMatchSnapshot();
});
