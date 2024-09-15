import { View, Text, StatusBar, ScrollView, Platform, PermissionsAndroid, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Card2line, Card2lineInput, Card3lineInputImg, Lex16BoldAuto, Lex16MedAuto, Lex16RegAuto, Lex18RegAuto, Lex20RegAuto, RoundBtn, TopNav1, TopNav2, TopNav3, ViewColBetweenCenter, ViewColCenter } from '../assets/Class'
import styles, { vw } from '../assets/stylesheet'
import { useNavigation } from '@react-navigation/native'
import { RootContext, setAsCurrent } from '../data/store'
import clrStyle from '../assets/componentStyleSheet'
import { cardDeleteIcon, checkIcon, deskCardEditIcon, deskMiniBlackCheckIcon, deskNaviIcon, doneEditIcon, sharpLeftArrow } from '../assets/svgXml'
import { marginBottomForScrollView, openCamera, openGallery } from '../assets/component'

import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { createCardFnc, createDeskFnc, editCardFnc, getSetWithID, removeCardFnc, removeCardInDesk, saveCardInDesk } from '../data/storageFunc'
import { Card, Desk, SetFormat } from '../data/data'

export default function Add({ }) {

  const navigation = useNavigation()
  // const [CURRENT_SETS, dispatch] = useContext(RootContext)

  const [createType, setCreateType] = useState<'set' | 'desk' | 'card' | 'chosing'>('chosing')

  // card_input
  const [cardItem, setCardItem] = React.useState<Card | null>(null)
  const [currentFront, setCurrentFront] = React.useState<string>('')
  const [currentBack, setCurrentBack] = React.useState<string>('')
  const [image, setImage] = useState<string | null>(null);
  // end of card_input

  const [SETID, setSETID] = useState<string | null>(null);
  const [DESKLIST, setDESKLIST] = useState<Desk[]>([]);
  const [DESKTITLE, setDESKTITLE] = useState<string | null>(null);

  const saveCard = () => {
    if (currentFront !== '' && currentBack !== '') {
      const newCard: Card = {
        front: currentFront,
        back: currentBack,
        imgAddress: image,
        memorized: false,
        repeatToday: false,
      };
      createCardFnc(newCard, SETID as string, DESKTITLE as string, setAsCurrent, null);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  const saveDesk = () => {
    if (DESKTITLE !== '' && DESKTITLE !== null) {
      let newDesk: Desk = {
        title: DESKTITLE,
        isDone: false,
        repeatSchedule: ['all'],
        cardList: [],
      };
      createDeskFnc(newDesk, SETID as string, setAsCurrent, null);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  }

  const saveSet = () => {
    if (SETID !== null) {
      // let newSet: SetFormat = {
      // }
    }
  }

  function renderCreation() {
    switch (createType) {
      case 'card':
        return (
          <ViewColCenter customStyle={[styles.flex1, styles.gap6vw]}>
            <Card2lineInput
              text1='Frontside'
              value2={currentFront}
              onChangeText2={(text: string) => setCurrentFront(text)}
              textColor1={clrStyle.neu5}
              textColor2={clrStyle.black}
              border
              placeholder2='Max 100 characters'
              isEdit={true}
            />
            <Card2lineInput
              text1='Frontside'
              value2={currentFront}
              onChangeText2={(text: string) => setCurrentFront(text)}
              textColor1={clrStyle.neu5}
              textColor2={clrStyle.black}
              borderClr={clrStyle.neu6}
              border
              placeholder2='Max 100 characters'
              isEdit={true}
            />
            <Card3lineInputImg
              isEdit={true}
              text1='Backside'
              value2={currentBack}
              TextClass2={Lex16MedAuto}
              onChangeText2={(text: string) => setCurrentBack(text)}
              textColor1={clrStyle.neu5}
              textColor2={clrStyle.black}
              border
              borderClr={clrStyle.neu6}
              placeholder2='Max 100 characters'
              photoAddress={image}
              onPress1={() => openGallery(setImage)}
              onPress2={() => openCamera(setImage)}
              onPress3={() =>
                Alert.alert('Retake image', 'Are you sure you want to delete and retake this image?', [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => setImage(null),
                  },
                ])
              }
            />
          </ViewColCenter>
        )

      case 'desk':
        break;
      case 'set':
        break;
      default:
        return (
          <ViewColCenter customStyle={[styles.flex1, styles.paddingV8vw, styles.gap8vw]}>
            <RoundBtn
              title='Create new card'
              onPress={() => setCreateType('card')}
              bgColor={clrStyle.yellow}
              textClass={Lex18RegAuto}
              customStyle={[styles.paddingV6vw, styles.w60vw]}
            />
            <RoundBtn
              title='Create new Desk'
              onPress={() => setCreateType('desk')}
              bgColor={clrStyle.green}
              textClass={Lex18RegAuto}
              customStyle={[styles.paddingV6vw, styles.w60vw]}
            />
            <RoundBtn
              title='Create new Set'
              onPress={() => setCreateType('set')}
              bgColor={clrStyle.you}
              textClass={Lex18RegAuto}
              customStyle={[styles.paddingV6vw, styles.w60vw]}
            />
          </ViewColCenter>
        )
    }
  }

  return (
    <View style={[styles.flex1, { backgroundColor: clrStyle.white }]}>
      <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'} barStyle={'default'} />
      <TopNav3
        backGoundImage={`../assets/image/topNav.png`}
        containerStyle={[styles.h20vh, styles.flexColCenter, styles.gap2vw,]}
        darken={0.8}
        title={createType == 'chosing' ? ' Create new' : createType == 'card' ? 'Create Card' : createType == 'desk' ? 'Create Desk' : 'Create Set'}
        textColor='white'
        leftText={createType == 'chosing' ? '' : 'Cancel'}
        leftFnc={() => setCreateType('chosing')}
        rightText={createType == 'chosing' ? '' : 'Done'}
        sideColor={clrStyle.neu5}
        TextClass={Lex16RegAuto}
      // rightFnc={() => { isViewing ? setIsViewing(false) : saveCard() }}
      />
      <ScrollView style={[styles.flex1, styles.padding4vw,]} contentContainerStyle={[styles.flexColCenter, styles.gap8vw]}>
        {renderCreation()}

        {marginBottomForScrollView()}
      </ScrollView>
    </View>
  )
}