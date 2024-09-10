import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SaveViewWithColorStatusBar, SSBar, TopNavLib } from '../assets/Class'
import styles from '../assets/stylesheet'

export default function Library() {
  return (
    <View style={[styles.flex1]}>
      <SSBar />
      <TopNavLib
      >

      </TopNavLib>
    </View>
  )
}