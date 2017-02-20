import React from 'react'
import { View, Text } from 'react-vr'

class Grid extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const {translate, rotateX} = this.props
    return (
      <View style={{flexDirection: 'row', height: 1, padding: 0.2, transform: [translate, rotateX]}}>
        <Text>The Grid</Text>
      </View>
    )
  }
}

module.exports = Grid
