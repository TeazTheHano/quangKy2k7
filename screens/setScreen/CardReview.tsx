import { View, Text, Platform, Alert, TouchableOpacity, Image, ImageStyle } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootContext } from '../../data/store'
import { Lex10RegAuto, Lex12BoldAuto, Lex12RegAuto, Lex14BoldAuto, Lex16BoldAuto, Lex16RegAuto, Lex20BlackAuto, Lex20BoldAuto, Lex20RegAuto, Pay32BlackLine40, RoundBtn, SaveViewWithColorStatusBar } from '../../assets/Class'
import styles, { vh, vw } from '../../assets/stylesheet'
import clrStyle from '../../assets/componentStyleSheet'
import { afterReviewBackToSetIcon, afterReviewIcon, afterReviewPractiveIcon, againColorIcon, againIcon, easyColorIcon, easyIcon, goodColorIcon, goodIcon, hardColorIcon, hardIcon, reviewIcon, reviewNextIcon, xIcon } from '../../assets/svgXml'

export default function CardReview({ route }: any) {
  const navigation = useNavigation()

  const CARD_REVIEW_AGAIN: string = clrStyle.redA
  const CARD_REVIEW_HARD: string = clrStyle.green
  const CARD_REVIEW_GOOD: string = clrStyle.neu5
  const CARD_REVIEW_EASY: string = clrStyle.yellow

  const [CURRENT_SETS, dispatch] = useContext(RootContext)
  const [currentDesk, setCurrentDesk] = React.useState(CURRENT_SETS.currentDesk)

  const [cardNumber, setCardNumber] = React.useState<number>(0)
  const [currentCardIndex, setCurrentCardIndex] = React.useState<number>(0)
  const [currentCardStatus, setCurrentCardStatus] = React.useState<Array<1 | 2 | 3 | 4 | 5>>([])
  const [isFrontShow, setIsFrontShow] = React.useState<boolean>(true)
  const [isZoomPhoto, setIsZoomPhoto] = React.useState<boolean>(false)

  const [againNumber, setAgainNumber] = React.useState<number>(0)
  const [hardNumber, setHardNumber] = React.useState<number>(0)
  const [goodNumber, setGoodNumber] = React.useState<number>(0)
  const [easyNumber, setEasyNumber] = React.useState<number>(0)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setCurrentCardIndex(0);
      if (CURRENT_SETS.currentDesk) {
        setCurrentDesk(CURRENT_SETS.currentDesk);
        setCardNumber(CURRENT_SETS.currentDesk.cardList.length);
        setCurrentCardStatus(Array(CURRENT_SETS.currentDesk.cardList.length).fill(5));
        console.log(currentDesk?.cardList[currentCardIndex].imgAddress);
        resetCounter();
      } else {
        return Alert.alert('Error', 'No desk selected');
      }
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setAgainNumber(currentCardStatus.filter((status) => status === 1).length);
    setHardNumber(currentCardStatus.filter((status) => status === 2).length);
    setGoodNumber(currentCardStatus.filter((status) => status === 3).length);
    setEasyNumber(currentCardStatus.filter((status) => status === 4).length);

  }, [currentCardStatus, currentCardIndex]);

  function cardReviewProgressBar() {
    function bgColorPicker(index: number) {
      switch (currentCardStatus[index]) {
        case 1:
          return CARD_REVIEW_AGAIN;
        case 2:
          return CARD_REVIEW_HARD;
        case 3:
          return CARD_REVIEW_GOOD;
        case 4:
          return CARD_REVIEW_EASY;
        default:
          return clrStyle.neu3;
      }
    }

    return (
      <View style={[styles.flexRowBetweenCenter, styles.paddingH5vw, styles.paddingBottom5vw, styles.gap3vw, { paddingTop: Platform.OS == 'android' ? vw(2) : 0, backgroundColor: clrStyle.saoUnav }]}>
        <TouchableOpacity onPress={() => { navigation.goBack(); setCurrentCardIndex(0) }}>
          {xIcon(vw(9), vw(9))}
        </TouchableOpacity>
        <View style={[styles.flexCol, styles.justifyContentSpaceBetween, styles.flex1, styles.gap2vw]}>
          <View style={[styles.flexRowStartCenter, styles.gap1vw,]}>
            {reviewIcon(vw(4.5), vw(4.5))}
            <Lex12RegAuto>Review: <Lex12BoldAuto style={{ color: clrStyle.redA }}>{currentCardIndex}</Lex12BoldAuto>/{cardNumber}</Lex12RegAuto>
          </View>
          {/* progress bar */}
          <View style={[styles.flexRowBetweenCenter, styles.gap1vw]}>
            {currentCardStatus.map((cStatus, i) => (
              <TouchableOpacity
                onPress={() => { setCurrentCardIndex(i) }}
                key={i} style={[styles.flex1, styles.borderRadius100, { height: vw(3), backgroundColor: bgColorPicker(i), borderWidth: currentCardIndex == i ? 1 : 0, borderColor: clrStyle.neu1 }]} />
            ))}
          </View>
        </View>
      </View>
    )
  }

  function resetCounter() {
    setAgainNumber(0);
    setHardNumber(0);
    setGoodNumber(0);
    setEasyNumber(0);
  }

  function counterRender() {
    let clr = [CARD_REVIEW_AGAIN, CARD_REVIEW_HARD, CARD_REVIEW_GOOD, CARD_REVIEW_EASY];
    let txt = ['Again', 'Hard', 'Good', 'Easy'];
    let num = [againNumber, hardNumber, goodNumber, easyNumber];

    return (
      clr.map((color, index) => (
        <View key={index} style={[styles.flexColCenter, styles.gap1vw]}>
          <View style={[styles.borderRadius100, { backgroundColor: color, width: vw(3.5), height: vw(3.5) }]} />
          <Lex10RegAuto style={{ color: clrStyle.neu2 }}>{txt[index]}</Lex10RegAuto>
          <Lex20RegAuto style={{ color: clrStyle.black }}>{num[index]}</Lex20RegAuto>
        </View>
      ))
    )
  }

  function btnRender() {
    let icon = [againIcon(vw(10), vw(10)), hardIcon(vw(10), vw(10)), goodIcon(vw(10), vw(10)), easyIcon(vw(10), vw(10)), reviewNextIcon(vw(10), vw(10))];
    let txt = ['Again', 'Hard', 'Good', 'Easy'];
    let txt2 = [`<2 hours`, `<3 days`, `<4 days`, `7 days`];

    return (
      icon.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            let newStatus = currentCardStatus;
            newStatus[currentCardIndex] = index + 1 as 1 | 2 | 3 | 4 | 5;
            setCurrentCardStatus(newStatus);
            setCurrentCardIndex(currentCardIndex + 1);
          }}
          style={[styles.flexColCenter, styles.flex1, styles.h80]}>
          {icon}
          {txt[index] ? <Lex12RegAuto style={{ color: clrStyle.white }}>{txt[index]}</Lex12RegAuto> : null}
          {txt2[index] ? <Lex12RegAuto style={{ color: clrStyle.white }}>{txt2[index]}</Lex12RegAuto> : null}
        </TouchableOpacity>
      ))
    )
  }

  function reviewScreen() {
    return (
      <>
        {cardReviewProgressBar()}
        <View style={[styles.flex1, { backgroundColor: clrStyle.saoUnav, display: isZoomPhoto ? 'none' : 'flex' }]}>
          <View style={[styles.flex1, styles.overflowHidden, { backgroundColor: clrStyle.yellow, borderTopRightRadius: vw(5), borderTopLeftRadius: vw(5), paddingTop: vw(9), paddingBottom: vw(4) }]}>
            <View style={[styles.flex1, styles.positionRelative, styles.flexColBetweenCenter]}>
              <View style={[styles.flexRowCenter, styles.gap8vw, styles.borderRadius100, styles.w70, styles.paddingV2vw, styles.paddingH4vw, { backgroundColor: clrStyle.white, zIndex: 2 }]}>
                {counterRender()}
              </View>
              <View style={[styles.flexColBetweenCenter, styles.flex1, styles.paddingV10vw, { backgroundColor: isFrontShow ? clrStyle.neu6 : clrStyle.black, width: vw(84), borderWidth: vw(1.5), borderColor: isFrontShow ? 'black' : clrStyle.neu6, borderRadius: vw(6), zIndex: 1, transform: [{ translateY: -vw(10) }] }]}>
                <Lex20RegAuto style={[styles.textUnderline, { color: isFrontShow ? clrStyle.black : clrStyle.neu6, paddingVertical: vw(4) }]}>{isFrontShow ? `Frontside` : `Backside`}</Lex20RegAuto>
                {isFrontShow ?
                  <Pay32BlackLine40 style={{ color: clrStyle.black }}>{currentDesk?.cardList[currentCardIndex].front}</Pay32BlackLine40>
                  :
                  <>
                    <Lex20RegAuto style={{ color: clrStyle.neu6 }}>{currentDesk?.cardList[currentCardIndex].back}</Lex20RegAuto>
                    {currentDesk?.cardList[currentCardIndex].imgAddress != undefined && currentDesk?.cardList[currentCardIndex].imgAddress != `assets/image/placeholder.jpeg` ?
                      <TouchableOpacity
                        onPress={() => { setIsZoomPhoto(!isZoomPhoto); }}
                        style={[styles.flex1, styles.w90, styles.marginVertical2vw, styles.borderRadius10, { backgroundColor: clrStyle.black, }]}>
                        <Image source={{ uri: currentDesk?.cardList[currentCardIndex].imgAddress }} resizeMethod='resize' resizeMode='contain' style={[styles.flex1] as ImageStyle} />
                      </TouchableOpacity>
                      :
                      null
                    }
                  </>
                }
                <Lex20RegAuto style={{ color: clrStyle.black }}> </Lex20RegAuto>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsFrontShow(!isFrontShow);
                }}
                style={[styles.positionAbsolute, styles.bottom0, styles.padding3vw, styles.shadowW0H2Black, { backgroundColor: isFrontShow ? clrStyle.white : clrStyle.black, borderWidth: vw(1.5), borderRadius: vw(6), borderColor: isFrontShow ? 'black' : clrStyle.neu6, zIndex: 2 }]}>
                {reviewIcon(vw(13), vw(13), isFrontShow ? clrStyle.black : clrStyle.white)}
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.w100, styles.h15vh, styles.flexRowEvenlyCenter, styles.paddingH4vw, { backgroundColor: clrStyle.black }]}>
            {btnRender()}
          </View>
        </View>
        {currentDesk?.cardList[currentCardIndex].imgAddress != undefined && currentDesk?.cardList[currentCardIndex].imgAddress != `assets/image/placeholder.jpeg` ?
          <TouchableOpacity
            onPress={() => { setIsZoomPhoto(!isZoomPhoto); }}
            style={[styles.flex1, styles.w100, styles.alignSelfCenter, { backgroundColor: clrStyle.black, display: isZoomPhoto ? 'flex' : 'none' }]}>
            <Image source={{ uri: currentDesk?.cardList[currentCardIndex].imgAddress }} resizeMethod='resize' resizeMode='contain' style={[styles.flex1] as ImageStyle} />
          </TouchableOpacity>
          :
          null
        }
      </>
    )
  }

  function afterReviewScreen() {
    const icon = [againColorIcon(vw(11), vw(11)), hardColorIcon(vw(11), vw(11)), goodColorIcon(vw(11), vw(11)), easyColorIcon(vw(11), vw(11))];
    let num = [againNumber, hardNumber, goodNumber, easyNumber];
    let txt = ['Again', 'Hard', 'Good', 'Easy'];
    function theMost(index: number) {
      if (num[index] == Math.max(...num) && num[index] != 0) {
        return true;
      } else {
        return false;
      }
    }
    return (
      <>
        <View style={[styles.flexRowBetweenCenter, styles.paddingH5vw, styles.paddingBottom5vw, styles.gap3vw, { paddingTop: Platform.OS == 'android' ? vw(2) : 0, backgroundColor: clrStyle.saoUnav }]}>
          <TouchableOpacity onPress={() => { navigation.goBack(); setCurrentCardIndex(0) }}>
            {xIcon(vw(9), vw(9))}
          </TouchableOpacity>
          <Lex20RegAuto>{CURRENT_SETS.current?.name}: <Lex20BlackAuto>{currentDesk?.title}</Lex20BlackAuto></Lex20RegAuto>
        </View>
        <View style={[styles.flex1, { backgroundColor: clrStyle.saoUnav }]}>
          <View style={[styles.flex1, styles.overflowHidden, styles.flexColStartCenter, styles.paddingH8vw, { backgroundColor: clrStyle.yellow, borderTopRightRadius: vw(5), borderTopLeftRadius: vw(5), paddingTop: vw(9), paddingBottom: vw(4) }]}>
            {afterReviewIcon(vw(34), vw(34))}
            <Lex20BoldAuto>Well done!</Lex20BoldAuto>
            <View style={[styles.paddingV6vw, styles.borderRadius20, styles.paddingH8vw, styles.w100, styles.marginVertical4vw, styles.flexCol, styles.gap6vw, { backgroundColor: clrStyle.black }]}>
              <View style={[styles.flexRowBetweenCenter]}>
                {icon.map((icon, index) => (
                  <View key={index} style={[styles.flexColStartCenter, styles.gap1vw, styles.padding2vw, styles.borderRadius3vw, { backgroundColor: theMost(index) ? clrStyle.neu6 : null }]}>
                    {icon}
                    <Lex16BoldAuto style={{ color: theMost(index) ? clrStyle.black : clrStyle.white }}>{num[index]}</Lex16BoldAuto>
                    <Lex12RegAuto style={{ color: theMost(index) ? clrStyle.black : clrStyle.white }}>{txt[index]}</Lex12RegAuto>
                  </View>
                ))}
              </View>

              <View style={[styles.paddingV3vw, { borderTopWidth: 1, borderTopColor: clrStyle.white, borderStyle: Platform.OS == 'android' ? 'dotted' : 'solid' }]}>
                <Lex20BlackAuto style={[styles.textCenter, { color: clrStyle.neu6 }]}>Desk Overal</Lex20BlackAuto>
                <Lex14BoldAuto style={[styles.textCenter, styles.marginTop4vw, { color: clrStyle.neu6 }]}>Today</Lex14BoldAuto>
              </View>
            </View>

            <Lex16RegAuto style={[styles.textCenter, styles.paddingH4vw]}>We’ll start showing them again from the beggining to make sure all of them are <Lex20BlackAuto>EASY</Lex20BlackAuto> to you!</Lex16RegAuto>
            <View style={[styles.w100, styles.flexRowBetweenCenter, styles.gap4vw, styles.marginTop4vw]}>
              <RoundBtn title='Back to Desk' icon={afterReviewBackToSetIcon(vw(6), vw(6))} border={true} onPress={() => { navigation.goBack(); setCurrentCardIndex(0) }} />
              <RoundBtn title='Practice' icon={afterReviewPractiveIcon(vw(6), vw(6))} bgColor={clrStyle.black} textColor={clrStyle.white} onPress={() => { Alert.alert('Practice', 'This feature is not available yet') }} />
            </View>
          </View>
        </View>
      </>
    )
  }

  return (
    <SaveViewWithColorStatusBar
      bgColor={currentCardIndex < cardNumber ? 'black' : clrStyle.yellow}
      StatusBarColor={clrStyle.saoUnav}
    >
      {currentCardIndex < cardNumber ? reviewScreen() : afterReviewScreen()}
    </SaveViewWithColorStatusBar >
  )
}