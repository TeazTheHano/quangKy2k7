import { View, Text, StatusBar, ScrollView, Platform, PermissionsAndroid, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Card2line, Card2lineInput, Card3lineInputImg, Lex16MedAuto, Lex16RegAuto, Lex20RegAuto, TopNav3 } from '../../assets/Class'
import styles, { vw } from '../../assets/stylesheet'
import { useNavigation } from '@react-navigation/native'
import { RootContext, setAsCurrent } from '../../data/store'
import clrStyle from '../../assets/componentStyleSheet'
import { cardDeleteIcon, checkIcon, deskCardEditIcon, deskMiniBlackCheckIcon, deskNaviIcon, doneEditIcon, sharpLeftArrow } from '../../assets/svgXml'
import { marginBottomForScrollView, openCamera, openGallery } from '../../assets/component'

import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { getSetWithID, removeCardInDesk, saveCardInDesk } from '../../data/storageFunc'
import { Card, Desk } from '../../data/data'

export default function AddCard({ route }: any) {
  if (route.params) { var { cardIndex, type } = route.params }

  const navigation = useNavigation()
  const [CURRENT_SETS, dispatch] = useContext(RootContext)
  const [deskItem, setDeskItem] = React.useState<Desk>(CURRENT_SETS.currentDesk as Desk)

  const [deskName, setDeskName] = React.useState<string>(deskItem.title)

  const [isViewing, setIsViewing] = React.useState<boolean>(false)
  const [cardItem, setCardItem] = React.useState<Card | null>(null)

  const [currentFront, setCurrentFront] = React.useState<string>('')
  const [currentBack, setCurrentBack] = React.useState<string>('')
  const [deskNameEditable, setDeskNameEditable] = React.useState<boolean>(false)

  const [originalDeskName, setOriginalDeskName] = React.useState<string>(deskItem.title)
  const [originalFront, setOriginalFront] = React.useState<string>('')

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      if (type === 'view' && cardIndex !== undefined) {
        setCardItem(deskItem.cardList[cardIndex]);
        setIsViewing(true);
      }
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (cardItem !== null && cardItem !== undefined) {
      setCurrentFront(cardItem.front);
      setOriginalFront(cardItem.front);
      setCurrentBack(cardItem.back);
      setImage(cardItem.imgAddress);
    }
  }, [cardItem]);

  function markAsMemorized(item: Card) {
    console.log('Mark as memorized')
    let newCardItem: Card = item
    // TODO: update card memorized status
  }

  const saveCard = () => {
    const createCard = async (newCard: Card) => {
      if (CURRENT_SETS.current) {
        const id = CURRENT_SETS.current.id;
        saveCardInDesk(id, deskItem.title, newCard).then(() => {
          getSetWithID(id).then((ret) => {
            if (ret && ret.id) {
              setAsCurrent(ret);
              navigation.goBack();
            } else {
              Alert.alert('Error', 'Failed to save card');
            }
          });
        });
      }
    }

    const editCard = async (newCard: Card) => {
      if (CURRENT_SETS.current) {
        const id = CURRENT_SETS.current.id;
        const newDesk = { ...deskItem };
        newDesk.cardList[cardIndex] = newCard;
        removeCardInDesk(id, deskItem.title, originalFront)
          .then(() => {
            if (currentFront == originalFront) {
              saveCardInDesk(id, deskItem.title, newCard)
            }
          })
          .then(() => {
            getSetWithID(id).then((ret) => {
              if (ret && ret.id) {
                setAsCurrent(ret);
                navigation.goBack();
              } else {
                Alert.alert('Error', 'Failed to save card');
              }
            });
          });
      }
    }

    if (currentFront !== '' && currentBack !== '') {
      const newCard: Card = {
        front: currentFront,
        back: currentBack,
        imgAddress: image,
        memorized: false,
        repeatToday: false,
      };
      if (cardIndex !== undefined) {
        editCard(newCard);
      } else {
        createCard(newCard);
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };


  return (
    <View style={[styles.flex1, { backgroundColor: clrStyle.white }]}>
      <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'} barStyle={'default'} />
      <TopNav3
        backGoundImage={CURRENT_SETS.current?.author?.imgAddress}
        containerStyle={[styles.h20vh, styles.flexColCenter, styles.gap2vw,]}
        darken={0.7}
        title={isViewing ? deskName : 'Create Card'}
        textColor='white'
        leftText='Cancel'
        leftFnc={() => navigation.goBack()}
        rightText={isViewing ? 'Edit' : 'Done'}
        sideColor={clrStyle.neu5}
        TextClass={Lex16RegAuto}
        rightFnc={() => { isViewing ? setIsViewing(false) : saveCard() }}
      />
      <ScrollView style={[styles.flex1, styles.padding4vw,]} contentContainerStyle={[styles.flexColCenter, styles.gap8vw]}>

        {!isViewing ? <Card2lineInput
          text1='Desk name'
          value2={deskName}
          onChangeText2={(text: string) => setDeskName(text)}
          bgColor={'#86DFD063'}
          textColor1={clrStyle.neu3}
          textColor2={clrStyle.black}
          rightIcon={deskNameEditable ? doneEditIcon(vw(6), vw(6), clrStyle.neu1) : deskCardEditIcon(vw(6), vw(6), clrStyle.neu1)}
          rightIconFnc={() => setDeskNameEditable(!deskNameEditable)}
          isEdit={deskNameEditable && !isViewing}
        /> : null}
        {!isViewing ? <View style={[styles.flexColCenter, styles.gap1vw]}>
          {deskNaviIcon(vw(34), vw(34))}
          <Lex20RegAuto style={{ color: clrStyle.neu5 }}>{deskItem.cardList.length} card(s)</Lex20RegAuto>
        </View> : null}
        <Card2lineInput
          text1='Frontside'
          value2={currentFront}
          onChangeText2={(text: string) => setCurrentFront(text)}
          textColor1={clrStyle.neu5}
          textColor2={clrStyle.black}
          border
          placeholder2='Max 100 characters'
          isEdit={!isViewing}
        />
        <Card3lineInputImg
          isEdit={!isViewing}
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

        {cardIndex != undefined ?
          <TouchableOpacity
            onPress={() => {
              if (isViewing) {
                markAsMemorized(cardItem as Card)
              } else {
                Alert.alert('Delete card', 'Are you sure you want to delete this card?', [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                      if (CURRENT_SETS.current) {
                        const id = CURRENT_SETS.current.id;
                        removeCardInDesk(id, deskItem.title, originalFront)
                          .then(() => {
                            getSetWithID(id).then((ret) => {
                              if (ret && ret.id) {
                                setAsCurrent(ret);
                                navigation.goBack();
                              } else {
                                Alert.alert('Error', 'Failed to save card');
                              }
                            });
                          });
                      }
                    },
                  },
                ])
              }
            }}
            style={[styles.flexRowCenter, styles.gap2vw, styles.paddingV2vw, styles.paddingH4vw, styles.borderRadius2vw, styles.border1, { backgroundColor: isViewing ? clrStyle.black : clrStyle.redA }]}>
            {isViewing ?
              deskMiniBlackCheckIcon(vw(6), vw(6), clrStyle.white)
              : cardDeleteIcon(vw(6), vw(6), clrStyle.white)}
            <Lex16RegAuto style={{ color: clrStyle.white }}>{isViewing ? `Mark as memorized` : `Delete card`}</Lex16RegAuto>
          </TouchableOpacity> : null}

        {marginBottomForScrollView()}
      </ScrollView>
    </View>
  )
}