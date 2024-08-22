import { View, Text, SafeAreaView, Image, ImageStyle, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Lex10RegAuto, Lex12BoldAuto, Lex16RegAuto, Pay16RegAuto, Pay20BlackLine122, Pay24BlackLine122, SaveViewWithColorStatusBar, TopNav2 } from '../../assets/Class'
import styles, { vw } from '../../assets/stylesheet'
import { useNavigation } from '@react-navigation/native'
import { RootContext } from '../../data/store'
import { imgSourceHandle } from '../../assets/component'
import { deskAddIcon, deskCheckIcon, deskNaviIcon, deskYellowIcon, notiBellIcon, sharpLeftArrow } from '../../assets/svgXml'
import clrStyle from '../../assets/componentStyleSheet'

import * as Progress from 'react-native-progress';
import { Desk } from '../../data/data'

export default function SetView() {
  const navigation = useNavigation()
  const [CURRENT_SETS, dispatch] = useContext(RootContext)

  function setPreView() {
    let ALL_REPEATED_TODAY = CURRENT_SETS.current?.deskList.map(desk => desk.cardList.filter(card => card.repeatToday).length).reduce((a, b) => a + b, 0)
    let ALL_MEMORIZED = CURRENT_SETS.current?.deskList.map(desk => desk.cardList.filter(card => card.memorized).length).reduce((a, b) => a + b, 0)
    let ALL_DESK_COMPLETE = CURRENT_SETS.current?.deskList.filter(desk => desk.cardList.filter(card => card.repeatToday).length == desk.cardList.length).length
    let ALL_CARD = CURRENT_SETS.current?.deskList.map(desk => desk.cardList.length).reduce((a, b) => a + b, 0)

    let data = [
      [ALL_REPEATED_TODAY, ALL_CARD, clrStyle.neu6, <Lex10RegAuto style={[styles.textCenter, styles.w100, styles.marginTop1vw, { color: clrStyle.white }]}>cards of this set need to <Lex10RegAuto style={{ color: clrStyle.neu6 }}>repeat today</Lex10RegAuto></Lex10RegAuto>],
      [ALL_MEMORIZED, ALL_CARD, clrStyle.orange, <Lex10RegAuto style={[styles.textCenter, styles.w100, styles.marginTop1vw, { color: clrStyle.white }]}>cards <Lex10RegAuto style={{ color: clrStyle.orange }}>memorized</Lex10RegAuto> for all time</Lex10RegAuto>],
      [ALL_DESK_COMPLETE, CURRENT_SETS.current?.deskList.length, clrStyle.yellow, <Lex10RegAuto style={[styles.textCenter, styles.w100, styles.marginTop1vw, { color: clrStyle.white }]}>desks <Lex10RegAuto style={{ color: clrStyle.yellow }}>completed</Lex10RegAuto></Lex10RegAuto>],
    ]
    return (
      <View style={[styles.flexRowBetweenCenter, styles.gap1vw]}>
        {data.map((item, index) => {
          return (
            <View key={index} style={[styles.flexColStartCenter, styles.flex1, styles.h100]}>
              <Pay24BlackLine122 style={{ color: item[2] }}>{item[0]}<Pay16RegAuto style={{ color: clrStyle.neu3 }}>/{item[1]}</Pay16RegAuto></Pay24BlackLine122>
              <Progress.Bar progress={item[0] / item[1]} width={vw(19)} color={item[2]} borderWidth={0} unfilledColor={clrStyle.white} />
              {item[3]}
            </View>
          )
        })}
      </View>
    )
  }

  function deskPreview() {
    if (CURRENT_SETS.current) {
      return (
        <View style={[styles.w100, styles.flexRowEvenlyCenter, styles.flexWrap, styles.marginTop8vw, { rowGap: vw(8) }]}>
          {CURRENT_SETS.current.deskList.map((desk: Desk, index: number) => {
            let process = desk.cardList.filter(card => card.repeatToday).length
            let bgColor = desk.cardList.length - process ? clrStyle.yellow : clrStyle.neu6;
            return (
              <TouchableOpacity
                onPress={() => { navigation.navigate('DeskView', { deskItem: desk }) }}
                key={index} style={[styles.flexColStartCenter, styles.borderRadius10, styles.positionRelative, styles.marginTop4vw, { width: vw(40), height: vw(50), backgroundColor: bgColor, }]}>
                {/* head */}
                <View style={[styles.positionAbsolute, { top: -vw(4) }]}>
                  {bgColor == clrStyle.yellow ?
                    <View style={[styles.borderRadius100, styles.paddingH1vw, styles.flexRowCenter, { backgroundColor: clrStyle.redP, minWidth: vw(8), height: vw(8), borderWidth: 2, borderColor: bgColor, }]}>
                      <Lex12BoldAuto style={[styles.textCenter, { color: clrStyle.white, }]}>!{desk.cardList.length - process}</Lex12BoldAuto>
                    </View>
                    :
                    deskCheckIcon(vw(8), vw(8))
                  }
                </View>
                {/* body */}
                <View style={[styles.flexColBetweenCenter, styles.marginTop8vw, styles.flex1, styles.marginBottom2vw, styles.paddingH2vw]}>
                  <Pay20BlackLine122>{desk.title}</Pay20BlackLine122>
                  {bgColor == clrStyle.yellow ?
                    deskNaviIcon(vw(20), vw(20))
                    :
                    deskYellowIcon(vw(20), vw(20))
                  }
                  <Progress.Bar progress={process / desk.cardList.length} width={vw(19)} color={clrStyle.black} borderWidth={0} unfilledColor={clrStyle.neu3} />
                  <Lex10RegAuto>{process}/{desk.cardList.length}</Lex10RegAuto>
                </View>
              </TouchableOpacity>
            )
          })}

          <TouchableOpacity
            onPress={() => {
              // TODO: add new desk
            }}
            style={[styles.flexColCenter, styles.borderRadius10, styles.positionRelative, { width: vw(40), height: vw(50), borderWidth: 2, borderColor: clrStyle.neu6 }]}>
            <Lex16RegAuto style={[styles.textCenter, styles.positionAbsolute, styles.top4vw, styles.w70]}>Create a new desk</Lex16RegAuto>
            {deskAddIcon(vw(14), vw(14))}
          </TouchableOpacity>

          {CURRENT_SETS.current.deskList.length % 2 == 0 ?
            <View style={[{ width: vw(40), height: vw(50) }]}>
            </View> : null}
        </View>
      )
    } else {
      return null;
    }
  }

  return (
    <View style={[styles.flex1, styles.bgcolorWhite]}>
      <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'} barStyle={'light-content'} />
      <TopNav2
        title='Set View'
        subTitle={CURRENT_SETS.current?.name as string}
        textColor='white'
        backGoundImage={CURRENT_SETS.current?.author?.imgAddress}
        leftIcon={sharpLeftArrow(vw(8), vw(8), 'white')}
        leftIconFnc={() => navigation.goBack()}
        rightIcon={notiBellIcon(vw(8), vw(8), 'white')}
        containerStyle={[styles.h30vh, styles.flexCol, styles.gap2vw, { justifyContent: 'flex-end' }]}
        darken={0.7}
      >
        {setPreView()}
      </TopNav2>
      <ScrollView style={[styles.flex1,]}>
        {deskPreview()}
      </ScrollView>
    </View >
  )
}