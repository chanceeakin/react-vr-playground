import React from 'react'
import {
  AppRegistry,
  View,
  Pano,
  asset,
  AmbientLight
} from 'react-vr'
import Grid from './app/components/grid'
import Box from './app/components/box'
import Square from './app/components/square'

class vr_1 extends React.Component {
  render () {
    return (
      <View>
        <Square
          translate={{ translate: [0, -1, -2]}}
          rotateX = {{ rotateX: -90 }}
        />
      <AmbientLight intensity={5}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_1', () => vr_1);
