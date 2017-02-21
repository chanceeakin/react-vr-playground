import React from 'react'
import { View, Image, asset } from 'react-vr'

// gah. I'm struggling.

class Square extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const {translate, rotateX} = this.props
    return (
      <View style={{ transform: [translate, rotateX] }}>
        <Image
          source={asset('TRON_TileX1.png')}
          style={{width: 1, height: 1}}
        />
      </View>
    )
  }
}

module.exports = Square
