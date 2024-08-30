import { View, Text, StatusBar, ScrollView, Platform, PermissionsAndroid, Image, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Card2line, Card2lineInput, Card3lineInputImg, Lex16MedAuto, Lex16RegAuto, Lex20RegAuto, TopNav3 } from '../../assets/Class'
import styles, { vw } from '../../assets/stylesheet'
import { useNavigation } from '@react-navigation/native'
import { RootContext, setAsCurrent } from '../../data/store'
import clrStyle from '../../assets/componentStyleSheet'
import { checkIcon, deskCardEditIcon, deskNaviIcon, doneEditIcon, sharpLeftArrow } from '../../assets/svgXml'
import { marginBottomForScrollView, openCamera, openGallery } from '../../assets/component'

import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { getSetWithID, saveCardInDesk } from '../../data/storageFunc'

export default function AddCard({ route }: any) {
  const { deskItem } = route.params

  const navigation = useNavigation()
  const [CURRENT_SETS, dispatch] = useContext(RootContext)
  const [deskName, setDeskName] = React.useState<string>(deskItem.title)
  const [currentFront, setCurrentFront] = React.useState<string>('')
  const [currentBack, setCurrentBack] = React.useState<string>('')
  const [deskNameEditable, setDeskNameEditable] = React.useState<boolean>(false)

  const [image, setImage] = useState<string | null>(null);

  const saveCard = () => {
    if (currentFront !== '' && currentBack !== '') {
      const newCard = {
        front: currentFront,
        back: currentBack,
        imgAddress: image,
        memorized: false,
        repeatToday: false,
      };
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
        title='Create Card'
        textColor='white'
        leftText='Cancel'
        leftFnc={() => navigation.goBack()}
        rightText='Done'
        sideColor={clrStyle.neu5}
        TextClass={Lex16RegAuto}
        rightFnc={() => { saveCard() }}
      />
      <ScrollView style={[styles.flex1, styles.padding4vw,]} contentContainerStyle={[styles.flexColCenter, styles.gap8vw]}>

        <Card2lineInput
          text1='Desk name'
          value2={deskName}
          onChangeText2={(text: string) => setDeskName(text)}
          bgColor={'#86DFD063'}
          textColor1={clrStyle.neu3}
          textColor2={clrStyle.black}
          rightIcon={deskNameEditable ? doneEditIcon(vw(6), vw(6), clrStyle.neu1) : deskCardEditIcon(vw(6), vw(6), clrStyle.neu1)}
          rightIconFnc={() => setDeskNameEditable(!deskNameEditable)}
          isEdit={deskNameEditable}
        />
        <View style={[styles.flexColCenter, styles.gap1vw]}>
          {deskNaviIcon(vw(34), vw(34))}
          <Lex20RegAuto style={{ color: clrStyle.neu5 }}>{deskItem.cardList.length} card(s)</Lex20RegAuto>
        </View>
        <Card2lineInput
          text1='Frontside'
          value2={currentFront}
          onChangeText2={(text: string) => setCurrentFront(text)}
          textColor1={clrStyle.neu5}
          textColor2={clrStyle.black}
          border
          placeholder2='Max 100 characters'
        />
        <Card3lineInputImg
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
        {marginBottomForScrollView()}
      </ScrollView>
    </View>
  )
}