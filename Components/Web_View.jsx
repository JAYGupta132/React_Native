import React from 'react'
import { View, Text, Platform } from 'react-native'
import { WebView } from 'react-native-webview'

export default function Web_View() {
  return (
    <WebView source={{uri: 'https://www.youtube.com/watch?v=4vVf18LXlOo&list=PL8p2I9GklV468O2wk-n8Q1KmtMhnHHj4C&index=37'}}/>
  )
}
