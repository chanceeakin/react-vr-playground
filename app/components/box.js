import React from 'react'
import { View, Text } from 'react-vr'

class Box extends React.Component {
  render () {
    return (
      <View style={{flexDirection: 'row', height: 1, padding: 0.2, transform: [{translate: [0, 0, -2]}]}}>
        <View style={{backgroundColor: 'blue', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text>It actually worked.</Text>
      </View>
    )
  }
}

module.exports = Box
