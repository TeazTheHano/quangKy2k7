import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SSBar, TopNavLib } from '../assets/Class'
import { clearAllDemoSets, clearAllSets, clearWeekly, loadAllDemoSets, removeUser } from '../data/storageFunc'

import { getAuth } from 'firebase/auth'
import styles, { vh, vw } from '../assets/stylesheet'
import { notiBellIcon } from '../assets/svgXml'

export default function Setting() {
  return (
    <SSBar trans barColor={'rgba(0,0,0,0)'} barContentStyle='dark-content' notMargin>

      <TopNavLib
        title={'Library'}
        textColor='black'
        rightIcon={notiBellIcon(vw(8), vw(8), 'black')}
        containerStyle={[styles.flexCol, styles.gap2vw, { justifyContent: 'flex-start', paddingTop: Platform.OS === 'ios' ? vh(5) : StatusBar.currentHeight }]}
        lighten={0.7}
      >
      </TopNavLib>
      <View style={[styles.flex1,]}>
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
    </SSBar>
  )
}