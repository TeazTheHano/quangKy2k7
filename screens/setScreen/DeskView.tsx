import { View, Text, StatusBar, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import styles, { vw } from '../../assets/stylesheet'
import { Lex10RegAuto, Lex12BoldAuto, Lex14RegAuto, Lex16BlackAuto, Lex16RegAuto, Lex20BoldAuto, Pay24BlackLine122, TopNav2 } from '../../assets/Class'
import { deskCardEditIcon, deskMiniBlackCheckIcon, deskPracticeIcon, deskReviewIcon, notiBellIcon, sharpLeftArrow } from '../../assets/svgXml'
import { RootContext } from '../../data/store'
import { useNavigation } from '@react-navigation/native'
import clrStyle from '../../assets/componentStyleSheet'
import * as Progress from 'react-native-progress';
import { Card } from '../../data/data'

export default function DeskView({ route }: any) {
  const navigation = useNavigation()
  const [CURRENT_SETS, dispatch] = useContext(RootContext)

  const { deskItem } = route.params
  let Desk_ALL_REPEATED_TODAY = deskItem.cardList.filter((card: any) => card.repeatToday == false).length
  let Desk_ALL_MEMORIZED = deskItem.cardList.filter((card: any) => card.memorized == true).length

  function markAsMemorized() {

  }

  function swipeRight() {
    // when swipe right, alert to mark as memorized
    Alert.alert('Mark as memorized', 'Do you want to mark this card as memorized?', [
      {
        text: 'Yes',
        onPress: () => markAsMemorized()
      },
      {
        text: 'No',
        onPress: () => console.log('No')
      }
    ])
  }

  function renderCard() {
    if (deskItem.cardList.length > 0) {
      return (
        deskItem.cardList.map((cardItem: Card, index: number) => {
          return (
            <View key={index}
              style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.paddingV2vw, styles.paddingH2vw, styles.borderRadius2vw, styles.border1, { backgroundColor: cardItem.memorized ? clrStyle.black : clrStyle.white }]}>
              <View style={[styles.flexRowBetweenCenter, styles.gap1vw, { maxWidth: vw(50) }]}>
                {cardItem.memorized ? deskMiniBlackCheckIcon(vw(6), vw(6), clrStyle.white) : null}
                <Lex16RegAuto lineNum={2} style={{ color: !cardItem.memorized ? clrStyle.black : clrStyle.white, paddingLeft: cardItem.memorized ? 0 : vw(2) }}>{cardItem.front}</Lex16RegAuto>
              </View>
              <View style={[styles.flexRowBetweenCenter, styles.gap1vw, styles.flex1, { maxWidth: vw(40) }]}>
                <Lex16RegAuto lineNum={2} style={[styles.flex1, { color: clrStyle.neu3 }]}>{cardItem.back}</Lex16RegAuto>
                {deskCardEditIcon(vw(6), vw(6))}
              </View>
            </View>
          )
        }))
    }
    else {
      return (
        <View style={[styles.flexColCenter, styles.flex1]}>
          <Lex16BlackAuto>There is no card in this desk</Lex16BlackAuto>
        </View>
      )
    }
  }

  return (
    <View style={[styles.flex1, { backgroundColor: clrStyle.yellow }]}>
      <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'} barStyle={'light-content'} />
      <TopNav2
        title={CURRENT_SETS.current?.name as string}
        subTitle={deskItem.title}
        textColor='white'
        backGoundImage={CURRENT_SETS.current?.author?.imgAddress}
        leftIcon={sharpLeftArrow(vw(8), vw(8), 'white')}
        leftIconFnc={() => navigation.goBack()}
        rightIcon={notiBellIcon(vw(8), vw(8), 'white')}
        containerStyle={[styles.h20vh, styles.flexCol, styles.gap2vw, { justifyContent: 'flex-end' }]}
        darken={0.7}
      >
      </TopNav2>
      <ScrollView style={[styles.flex1]}>
        {/* yellow */}
        <View style={[styles.w100, styles.flexRowEvenlyCenter, styles.paddingV8vw]}>
          <TouchableOpacity
            onPress={() => { }}
            style={[styles.flexColStartCenter, styles.borderRadius10, styles.border2, styles.overflowHidden, { width: vw(40), height: vw(50), backgroundColor: clrStyle.white, }]}>
            {/* head */}
            <View style={[styles.borderRadius100, styles.paddingH1vw, styles.flexRowCenter, styles.margin2vw, { backgroundColor: clrStyle.redP, minWidth: vw(8), height: vw(8), }]}>
              <Lex14RegAuto style={[styles.textCenter, { color: clrStyle.white, }]}>{Desk_ALL_REPEATED_TODAY}</Lex14RegAuto>
            </View>
            {/* body */}
            <Pay24BlackLine122>Review</Pay24BlackLine122>
            <Lex10RegAuto style={{ color: clrStyle.neu1 }}>{Desk_ALL_REPEATED_TODAY} cards to review today</Lex10RegAuto>
            {deskReviewIcon(vw(30), vw(30))}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // TODO: navigate to practice screen
              Alert.alert('Practice', 'This feature is not available yet')
            }}
            style={[styles.flexColStartCenter, styles.borderRadius10, styles.border2, styles.overflowHidden, { width: vw(40), height: vw(50), backgroundColor: clrStyle.redA, }]}>
            {/* head */}
            <View style={[styles.borderRadius100, styles.paddingH1vw, styles.flexRowCenter, styles.margin2vw, { minWidth: vw(8), height: vw(8), }]}>
              <Lex14RegAuto style={[styles.textCenter, { color: clrStyle.white, }]}> </Lex14RegAuto>
            </View>
            {/* body */}
            <Pay24BlackLine122 style={{ color: clrStyle.white }}>Practice</Pay24BlackLine122>
            <Lex10RegAuto style={{ color: clrStyle.neu1 }}> </Lex10RegAuto>
            {deskPracticeIcon(vw(30), vw(30))}
          </TouchableOpacity>
        </View>

        {/* white */}
        <View style={[styles.flex1, styles.padding8vw, styles.bgcolorWhite, styles.flexCol, styles.gap3vw]}>
          <View style={[styles.flexRowStartCenter]}>
            <Lex20BoldAuto>Flashcard:</Lex20BoldAuto>
            {deskMiniBlackCheckIcon(vw(6), vw(6))}
            <Lex16BlackAuto>{Desk_ALL_MEMORIZED}<Lex16RegAuto style={{ color: clrStyle.neu3 }}>/10 cards memoried</Lex16RegAuto></Lex16BlackAuto>
          </View>
          <Progress.Bar progress={Desk_ALL_MEMORIZED / deskItem.cardList.length} width={vw(84)} height={vw(2)} color={Desk_ALL_MEMORIZED / deskItem.cardList.length == 1 ? clrStyle.yellow : clrStyle.black} borderWidth={1} borderColor={clrStyle.black} unfilledColor={'#D9D9D9'} />
          {renderCard()}
        </View>
      </ScrollView>
    </View >
  )
}