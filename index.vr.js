import React from 'react'
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr'
import Box from './app/components/box'

class vr_1 extends React.Component {
  render () {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <Text
          style={{
            backgroundColor:'blue',
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
        <Box />
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_1', () => vr_1);
