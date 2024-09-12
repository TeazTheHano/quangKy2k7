import { Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SaveViewWithColorStatusBar, SSBar, TopNav2, TopNavLib, ViewRowBetweenCenter, ViewRowCenter } from '../assets/Class'
import styles, { vh, vw } from '../assets/stylesheet'
import { adjustIcon, notiBellIcon, searchIcon, sharpLeftArrow } from '../assets/svgXml'
import { RootContext } from '../data/store'
import clrStyle from '../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'

export default function Library() {
  const navigation = useNavigation()
  const [CURRENT_SETS, dispatch] = React.useContext(RootContext)
  const [seachContent, setSearchContent] = React.useState('')

  return (
    <SSBar trans barColor={'rgba(0,0,0,0)'} barContentStyle='dark-content' notMargin>
      <TopNavLib
        title={'Library'}
        textColor='black'
        rightIcon={notiBellIcon(vw(8), vw(8), 'black')}
        containerStyle={[styles.flexCol, styles.gap2vw, { justifyContent: 'flex-start', paddingTop: Platform.OS === 'ios' ? vh(5) : StatusBar.currentHeight }]}
        lighten={0.7}
      >
        <ViewRowBetweenCenter customStyle={[styles.w100, styles.gap3vw]}>
          <TouchableOpacity>
            {adjustIcon(vw(10), vw(10))}
          </TouchableOpacity>
          <ViewRowBetweenCenter
            customStyle={[styles.flex1, styles.gap3vw, styles.borderRadius10, styles.h100, styles.shadowW0H0Black, styles.paddingH4vw, { backgroundColor: clrStyle.white, borderColor: clrStyle.neu3 }]}>
            {searchIcon(vw(5), vw(5), clrStyle.black)}
            <TextInput
              style={[styles.flex1, { color: clrStyle.black, fontSize: vw(3.5) }]}
              value={seachContent}
              onChangeText={(text) => setSearchContent(text as string)}
              placeholder='Search'
            />
          </ViewRowBetweenCenter>
        </ViewRowBetweenCenter>
      </TopNavLib>

    </SSBar>
  )
}