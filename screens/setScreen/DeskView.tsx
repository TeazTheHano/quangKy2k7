
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Alert, Pressable, Vibration, Animated, Easing } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles, { vh, vw } from '../../assets/stylesheet'
import { Card2lineInput, Lex10RegAuto, Lex12BoldAuto, Lex14RegAuto, Lex16BlackAuto, Lex16RegAuto, Lex20BoldAuto, Pay24BlackLine122, SSBar, TopNav2, ViewColCenter, ViewRowEvenlyCenter } from '../../assets/Class'
import { AddCardIcon, AddIconInactive, checkIcon, deskCardEditIcon, deskMiniBlackCheckIcon, deskNaviIcon, deskPracticeIcon, deskReviewIcon, disableByDefaultIcon, doneEditIcon, notiBellIcon, sharpLeftArrow } from '../../assets/svgXml'
import { currentSetCurrentDesk, RootContext, setAsCurrent } from '../../data/store'
import { useNavigation } from '@react-navigation/native'
import clrStyle from '../../assets/componentStyleSheet'
import * as Progress from 'react-native-progress';
import { Card, Desk, SetFormat } from '../../data/data'
import { marginBottomForScrollView } from '../../assets/component'
import { SvgXml } from 'react-native-svg'
import { editDeskFnc, getDeskWithID, getSetWithID, removeCardFnc } from '../../data/storageFunc'

export default function DeskView({ route }: any) {
  const navigation = useNavigation()

  const [reFresh, setReFresh] = useState<boolean>(false)
  const [CURRENT_SETS, dispatch] = useContext(RootContext)
  const [theSet, setTheSet] = React.useState<SetFormat | null>(null)
  const [currentDesk, setCurrentDesk] = useState<Desk>(CURRENT_SETS.currentDesk as Desk)
  const [isDeskEdit, setIsDeskEdit] = useState<boolean>(false)

  const [showEdit, setShowEdit] = useState<string>('')

  const [Desk_ALL_REPEATED_TODAY, setDesk_ALL_REPEATED_TODAY] = useState<number>(0)
  const [Desk_ALL_MEMORIZED, setDesk_ALL_MEMORIZED] = useState<number>(0)

  // desk edit state
  const [DESKTITLE, setDESKTITLE] = useState<string>(currentDesk.title)
  const [currentTitle, setCurrentTitle] = useState<string>(currentDesk.title)
  const [DeskRepeat, setDeskRepeat] = useState<Array<'M' | 'T' | 'W' | 'TH' | 'F' | 'S' | 'SU' | 'all'>>(currentDesk.repeatSchedule as Array<'M' | 'T' | 'W' | 'TH' | 'F' | 'S' | 'SU' | 'all'>)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setIsDeskEdit(false)
      setShowEdit('')
      try {
        const ret = await getSetWithID(CURRENT_SETS.current?.id as string);
        if (ret && ret.id) {
          setTheSet(ret);
        } else {
          console.log('error at SetView.tsx');
          setTheSet(CURRENT_SETS.current);
        }
        const updatedSet = ret && ret.id ? ret : CURRENT_SETS.current;
        const desk = updatedSet?.deskList.find(desk => desk.title === currentDesk.title);
        if (desk) {
          setCurrentDesk(desk);
          dispatch(currentSetCurrentDesk(desk));
          if (desk.cardList.length > 0) {
            setDesk_ALL_REPEATED_TODAY(desk.cardList.filter(card => card.repeatToday).length);
            setDesk_ALL_MEMORIZED(desk.cardList.filter(card => card.memorized).length);
          } else {
            setDesk_ALL_REPEATED_TODAY(0);
            setDesk_ALL_MEMORIZED(0);
          }
        }
      } catch (error) {
        console.error('Error fetching set:', error);
      }
    });
    return unsubscribe;
  }, [navigation]);

  function onRefresh() {
    setReFresh(true);
    setTimeout(() => {
      setReFresh(false);
      navigation.navigate('DeskView' as never)
    }, 1000);
  }

  useEffect(() => {
    setShowEdit('')
  }, [isDeskEdit == true])

  function renderCard() {
    if (currentDesk.cardList.length > 0) {
      return (
        currentDesk.cardList.map((cardItem: Card, index: number) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate('AddCard', { cardIndex: index, type: 'view' })
              }}
              onLongPress={() => {
                setShowEdit(index.toString())
                Vibration.vibrate([50, 50, 0, 0])
              }}
              delayLongPress={500}

              style={[styles.flexRowBetweenCenter, styles.gap2vw, styles.paddingV2vw, styles.paddingH2vw, styles.borderRadius2vw, styles.border1, { backgroundColor: cardItem.memorized ? clrStyle.black : clrStyle.white, opacity: isDeskEdit && showEdit == index.toString() ? 0.1 : 1 }]} >
              <View style={[styles.flexRowBetweenCenter, styles.gap1vw, { maxWidth: vw(50) }]}>
                {cardItem.memorized ? deskMiniBlackCheckIcon(vw(6), vw(6), clrStyle.white) : null}
                <Lex16RegAuto lineNum={2} style={{ color: !cardItem.memorized ? clrStyle.black : clrStyle.white, paddingLeft: cardItem.memorized ? 0 : vw(2) }}>{cardItem.front}</Lex16RegAuto>
              </View>
              <View style={[styles.flexRowBetweenCenter, styles.gap1vw, styles.flex1, { maxWidth: vw(40) }]}>
                <Lex16RegAuto lineNum={2} style={[styles.flex1, { color: clrStyle.neu3 }]}>{cardItem.back}</Lex16RegAuto>
                <TouchableOpacity
                  style={[styles.overflowHidden, { width: showEdit == index.toString() ? vw(6) : 0.1, opacity: showEdit == index.toString() ? 1 : 0 }]}
                  disabled={showEdit == index.toString() ? false : true}
                  onPress={() => {
                    setShowEdit('')
                    navigation.navigate('AddCard', { cardIndex: index, type: 'edit' })
                  }}>
                  {deskCardEditIcon(vw(6), vw(6))}
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!isDeskEdit}
                  onPress={() => { removeCardFnc(CURRENT_SETS.current?.id as string, currentDesk.title, currentDesk.cardList[index].front, null, null); setShowEdit(index.toString()) }}
                  style={[{ display: isDeskEdit ? 'flex' : 'none', backgroundColor: clrStyle.white }]}
                >
                  {disableByDefaultIcon(vw(6), vw(6))}
                </TouchableOpacity>
              </View>

            </Pressable >
          )
        }))
    }
    else {
      return (
        <View style={[styles.flexColStartCenter, styles.flex1]}>
          <Lex16BlackAuto>There is no card in this desk</Lex16BlackAuto>
        </View>
      )
    }
  }

  function saveDeskEdit() {
    setIsDeskEdit(!isDeskEdit)
    if (isDeskEdit) {
      if (DESKTITLE != currentTitle || DeskRepeat != currentDesk.repeatSchedule) {
        let newDesk = currentDesk;
        newDesk.title = DESKTITLE;
        newDesk.repeatSchedule = DeskRepeat;
        editDeskFnc(newDesk, CURRENT_SETS.current?.id as string, currentDesk, setAsCurrent, null);
        setCurrentTitle(DESKTITLE);
        dispatch(currentSetCurrentDesk(newDesk));
        onRefresh();
      }
    }
  }

  return (
    <SSBar barContentStyle='light-content' trans barColor={'rgba(0,0,0,0)'} notMargin bgColor={clrStyle.yellow}>
      <TopNav2
        title={CURRENT_SETS.current?.name as string}
        subTitle={currentDesk.title}
        textColor='white'
        backGoundImage={CURRENT_SETS.current?.author?.imgAddress}
        leftIcon={sharpLeftArrow(vw(8), vw(8), 'white')}
        leftIconFnc={() => navigation.goBack()}
        rightIcon={CURRENT_SETS.current?.author.email == CURRENT_SETS.userInfo?.email ? isDeskEdit ? doneEditIcon(vw(8), vw(8), 'white') : deskCardEditIcon(vw(8), vw(8), 'white') : notiBellIcon(vw(8), vw(8), 'white')}
        rightIconFnc={() => { CURRENT_SETS.current?.author.email == CURRENT_SETS.userInfo?.email ? saveDeskEdit() : null }}
        containerStyle={[styles.h20vh, styles.flexCol, styles.gap2vw, { justifyContent: 'flex-end' }]}
        darken={0.7}
      />
      <ScrollView style={[styles.flex1, styles.positionRelative]}>
        {/* yellow */}
        <View style={[styles.w100, styles.flexRowEvenlyCenter, styles.paddingV8vw]}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('CardReview' as never) }}
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
        <View style={[styles.flex1, styles.padding8vw, styles.bgcolorWhite, styles.flexCol, styles.gap4vw, { minHeight: vh(80) }]}>
          <View style={[styles.flexRowStartCenter]}>
            <Lex20BoldAuto>Flashcard:</Lex20BoldAuto>
            {deskMiniBlackCheckIcon(vw(6), vw(6))}
            <Lex16BlackAuto>{Desk_ALL_MEMORIZED}<Lex16RegAuto style={{ color: clrStyle.neu3 }}>/{currentDesk.cardList.length} cards memoried</Lex16RegAuto></Lex16BlackAuto>
          </View>

          <View style={[styles.marginBottom2vw]}>
            <Progress.Bar progress={Desk_ALL_MEMORIZED / (currentDesk.cardList.length ? currentDesk.cardList.length : 1)} width={vw(84)} height={vw(2)} color={Desk_ALL_MEMORIZED / currentDesk.cardList.length == 1 ? clrStyle.yellow : clrStyle.black} borderWidth={1} borderColor={clrStyle.black} unfilledColor={'#D9D9D9'} />
          </View>

          {
            isDeskEdit ?
              <>
                <Card2lineInput
                  text1='Desk Title'
                  value2={DESKTITLE as string}
                  onChangeText2={(text: string) => setDESKTITLE(text)}
                  textColor1={clrStyle.neu5}
                  textColor2={clrStyle.black}
                  borderClr={clrStyle.neu6}
                  border
                  placeholder2='Max 100 characters'
                  isEdit={true}
                />
                <ViewColCenter customStyle={[styles.padding3vw, styles.flexRowBetweenCenter, styles.borderRadius2vw, { borderWidth: 1, borderColor: clrStyle.neu6 }]}>
                  <View style={[styles.flexCol, styles.gap3vw, styles.flex1]}>
                    <Lex16RegAuto style={[styles.paddingH1vw, { color: clrStyle.neu5 }]}>Choose your Repeat Schedule</Lex16RegAuto>
                    <ViewRowEvenlyCenter>
                      {(['M', 'T', 'W', 'TH', 'F', 'S', 'SU', 'all'] as Array<'M' | 'T' | 'W' | 'TH' | 'F' | 'S' | 'SU' | 'all'>).map((day, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              if (DeskRepeat.includes(day)) {
                                setDeskRepeat(DeskRepeat.filter((item) => item !== day))
                              } else {
                                setDeskRepeat([...DeskRepeat, day])
                              }
                            }}
                            style={[styles.padding2vw, styles.border1, styles.borderRadius10, { backgroundColor: DeskRepeat.includes(day) ? clrStyle.neu4 : null }]}>
                            <Lex14RegAuto>{day}</Lex14RegAuto>
                          </TouchableOpacity>
                        )
                      })}
                    </ViewRowEvenlyCenter>
                  </View>
                </ViewColCenter>
              </>
              : null
          }
          {renderCard()}
          {marginBottomForScrollView(2)}
        </View>
      </ScrollView>
      {!isDeskEdit ?
        <TouchableOpacity
          onPress={() => { navigation.navigate('AddCard' as never) }}
          style={[styles.positionAbsolute, { bottom: 0, right: 0, zIndex: 2 }]}>
          {AddCardIcon(vw(30), vw(30))}
        </TouchableOpacity> : null}
    </SSBar>
  )
}