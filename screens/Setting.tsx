import { SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SSBar } from '../assets/Class'
import { clearAllDemoSets, clearAllSets, clearWeekly, loadAllDemoSets } from '../data/storageFunc'

export default function Setting() {
  return (
    <SafeAreaView>
      <SSBar />
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
    </SafeAreaView>
  )}