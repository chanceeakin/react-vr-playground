import React from 'react'
import {
  AppRegistry,
  View,
  AmbientLight
} from 'react-vr'
import Square from './app/components/square'

class vr_1 extends React.Component {
  render () {
    return (
      <View>
        <Square
          translate={{translate: [-2, -2, -2]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [-1, -1, -2]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [0, 0, -2]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [1, 1, -2]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [2, 2, -2]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [-2, 3, -1]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [-1, 4, -1]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [0, 5, -1]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [1, 6, -1]}}
          rotateX={{rotateX: -90}}
        />
        <Square
          translate={{translate: [2, 7, -1]}}
          rotateX={{rotateX: -90}}
        />
        <AmbientLight intensity={50} />
      </View>
    )
  }
};

AppRegistry.registerComponent('vr_1', () => vr_1)
