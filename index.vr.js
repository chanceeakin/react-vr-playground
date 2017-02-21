import React from 'react'
import {
  AppRegistry,
  View,
  AmbientLight
} from 'react-vr'
import Square from './app/components/square'

class vr_1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grid: []
    }
  }

  makeGrid () {
    for (var h = -2; h < 1; h++) {
      for (var i = -2; i < 3; i++) {
        this.state.grid.push(
          <Square
            translate={{translate: [i, i, h]}}
            rotateX={{rotateX: -90}}
          />
        )
      }
    }
  }

  render () {
    this.makeGrid()
    return (
      <View>
        {this.state.grid}
        <AmbientLight intensity={50} />
      </View>
    )
  }
};

AppRegistry.registerComponent('vr_1', () => vr_1)
