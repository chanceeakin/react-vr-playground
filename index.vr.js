import React from 'react'
import {
  AppRegistry,
  asset,
  PointLight,
  Pano,
  Text,
  View,
  NativeModules,
  AmbientLight
} from 'react-vr'
import Grid from './app/components/grid'
import Box from './app/components/box'

const CubeModule = NativeModules.CubeModule;

class vr_1 extends React.Component {
  render () {
    return (
      <View>
        <Grid
          translate={{ translate: [0, 0, -1] }}
          rotateX={{ rotateX : -90 }}
        />
      <Box />
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_1', () => vr_1);
