import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Lex16RegAuto, SSBar, TopNavLib, ViewRowBetweenCenter } from '../assets/Class'
import { notiBellIcon } from '../assets/svgXml'
import styles, { vh, vw } from '../assets/stylesheet'
import { useNavigation } from '@react-navigation/native'
import clrStyle from '../assets/componentStyleSheet'

export default function NewFeed() {
  const navigation = useNavigation()

  const [pannel, setPannel] = React.useState(0)

  return (
    <SSBar trans barColor={'rgba(0,0,0,0)'} barContentStyle='dark-content' notMargin>

      <TopNavLib
        title={'Library'}
        textColor='black'
        rightIcon={notiBellIcon(vw(8), vw(8), 'black')}
        containerStyle={[styles.flexCol, styles.gap2vw, { justifyContent: 'flex-start', paddingTop: Platform.OS === 'ios' ? vh(5) : StatusBar.currentHeight }]}
        lighten={0.7}
      >
        <ViewRowBetweenCenter customStyle={[styles.w100]}>
          <TouchableOpacity
            style={[styles.padding3vw, styles.w50, styles.borderRadius20, { backgroundColor: pannel === 0 ? clrStyle.black : 'rgba(0,0,0,0)' }]}
            onPress={() => setPannel(0)}>
            <Lex16RegAuto style={[styles.textCenter, { color: pannel === 0 ? clrStyle.white : clrStyle.black }]}>Recently posted</Lex16RegAuto>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.padding3vw, styles.w50, styles.borderRadius20, { backgroundColor: pannel === 1 ? clrStyle.black : 'rgba(0,0,0,0)' }]}
            onPress={() => setPannel(1)}>
            <Lex16RegAuto style={[styles.textCenter, { color: pannel === 1 ? clrStyle.white : clrStyle.black }]}>Connenting</Lex16RegAuto>
          </TouchableOpacity>
        </ViewRowBetweenCenter>
      </TopNavLib>
    </SSBar>
  )
}