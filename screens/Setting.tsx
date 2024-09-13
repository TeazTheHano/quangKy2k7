import { SafeAreaView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SSBar } from '../assets/Class'
import { clearAllDemoSets, clearAllSets, clearWeekly, loadAllDemoSets, removeUser } from '../data/storageFunc'

import { getAuth } from 'firebase/auth'
import styles from '../assets/stylesheet'

export default function Setting() {
  return (
    <SafeAreaView style={[styles.flex1]}>
      <StatusBar translucent />
      <View style={[styles.flex1, { marginTop: StatusBar.currentHeight }]}>
        <TouchableOpacity
          onPress={clearWeekly}>
          <Text>Clear Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={loadAllDemoSets}>
          <Text>get demo set</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={clearAllDemoSets}>
          <Text>clear all demo set</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={clearAllSets}>
          <Text>clear all sets</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            removeUser();

          }}>
          <Text>clear user aka log-out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}