import React, { Component } from 'react'
import {
  Platform,
  StyleSheet
} from 'react-native'
import Video from 'react-native-video'

class VideoIOS extends Component {
  render () {
    return (
      <Video
        resizeMode='cover'
        source={{uri: 'turntable-loop-1920x500-h264-512kbps-h264'}}
        style={styles.backgroundVideo}
      />
    )
  }
}

class VideoAndroid extends Component {
  render () {
    return (
    <Video
      repeat
      resizeMode='cover'
      source={ require('../assets/video/vid.mp4') }
      style={styles.backgroundVideo}
    />
    )
  }
}


export default class BackgroundVideo extends Component {
  render () {
    return Platform.OS === 'ios' ? <VideoIOS /> : <VideoAndroid />
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    height: 400,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})