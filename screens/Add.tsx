import { View, Text, StatusBar, ScrollView, Platform, PermissionsAndroid, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Card2line, Card2lineInput, Card3lineInputImg, Lex14RegAuto, Lex16BoldAuto, Lex16MedAuto, Lex16RegAuto, Lex18RegAuto, Lex20RegAuto, RoundBtn, SearchBox, TopNav1, TopNav2, TopNav3, ViewCol, ViewColBetweenCenter, ViewColCenter, ViewRow, ViewRowBetweenCenter, ViewRowEvenlyCenter } from '../assets/Class'
import styles, { vw } from '../assets/stylesheet'
import { useNavigation } from '@react-navigation/native'
import { RootContext, setAsCurrent } from '../data/store'
import clrStyle from '../assets/componentStyleSheet'
import { cardDeleteIcon, checkIcon, deskCardEditIcon, deskMiniBlackCheckIcon, deskNaviIcon, doneEditIcon, sharpLeftArrow, unCheckIcon } from '../assets/svgXml'
import { marginBottomForScrollView, openCamera, openGallery, searchEngine } from '../assets/component'

import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { createCardFnc, createDeskFnc, createSetFnc, editCardFnc, getSetWithID, removeCardFnc, removeCardInDesk, saveCardInDesk } from '../data/storageFunc'
import { Card, Desk, SetFormat, UserFormat } from '../data/data'

export default function Add() {
  const navigation = useNavigation()
  const [CURRENT_SETS, dispatch] = useContext(RootContext)

  const [createType, setCreateType] = useState<'set' | 'desk' | 'card' | 'folder' | 'chosing'>('chosing')

  // card_input
  const [cardItem, setCardItem] = React.useState<Card | null>(null)
  const [currentFront, setCurrentFront] = React.useState<string>('')
  const [currentBack, setCurrentBack] = React.useState<string>('')
  const [image, setImage] = useState<string | null>(null);
  // end of card_input

  // desk_input
  const [SETID, setSETID] = useState<string | null>(null);
  const [DESKLIST, setDESKLIST] = useState<Desk[]>([]);
  const [DESKTITLE, setDESKTITLE] = useState<string | null>(null);
  const [DeskRepeat, setDeskRepeat] = useState<Array<'M' | 'T' | 'W' | 'TH' | 'F' | 'S' | 'SU' | 'all' | null>>(['all']);
  // end of desk_input

  // set_input
  const [CreateSETNAME, setCreateSETNAME] = useState<string>('')
  const [CreateSETDESCRIPTION, setCreateSETDESCRIPTION] = useState<string>('')
  const [CreateSETPRIVATE, setCreateSETPRIVATE] = useState<boolean>(false)
  const [CreateSETCATEGORY, setCreateSETCATEGORY] = useState<string>('')
  // end of set_input

  // folder_input
  const [CreateFolderName, setCreateFolderName] = useState<string>('')
  // end of folder_input

  const [setSearch, setSetSearch] = useState<string>('')
  const [deskSearch, setDeskSearch] = useState<string>('')
  const [cardSearch, setCardSearch] = useState<string>('')
  const [setName, setSetName] = useState<string>('')
  const [setSearchResult, setSetSearchResult] = useState<SetFormat[]>([])
  const [deskSearchResult, setDeskSearchResult] = useState<Desk[]>([])
  const [cardSearchResult, setCardSearchResult] = useState<Card[]>([])

  function cancelPress() {
    setCreateType('chosing'); setSetSearch(''); setDeskSearch(''); setCardSearch(''); setSetName(''); setSETID(null); setDESKTITLE(null); setCurrentFront(''); setCurrentBack(''); setImage(null); setDeskRepeat(['all']); setCreateSETNAME(''); setCreateSETDESCRIPTION(''); setCreateSETCATEGORY(''); setCreateSETPRIVATE(false)
  }

  const saveCard = () => {
    if (currentFront !== '' && currentBack !== '') {
      const newCard: Card = {
        front: currentFront,
        back: currentBack,
        imgAddress: image,
        memorized: false,
        repeatToday: false,
      };
      createCardFnc(newCard, SETID as string, DESKTITLE as string, setAsCurrent, null).then((ret) => { Alert.alert('Card created', 'Card has been created'); setCurrentFront(''); setCurrentBack(''); setImage(null) });
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  const saveDesk = () => {
    if (DESKTITLE !== '' && DESKTITLE !== null && SETID !== null) {
      getSetWithID(SETID).then((ret) => {
        ret && ret.id ? setDESKLIST(ret.deskList) : null
      }).then(
        () => {
          if (DESKLIST.some((desk) => desk.title === DESKTITLE)) {
            Alert.alert('Error', 'Desk title already exists');
            return;
          } else {
            let newDesk: Desk = {
              title: DESKTITLE,
              isDone: false,
              repeatSchedule: DeskRepeat,
              cardList: [],
            };
            createDeskFnc(newDesk, SETID as string, setAsCurrent, null).then((ret) => {
              ret ? Alert.alert('Desk created', 'Do you want create Cards in this Desk?', [
                {
                  text: 'Yes',
                  onPress: () => {
                    setCreateType('card');
                    setSETID(SETID);
                    setDESKTITLE(DESKTITLE);
                  },
                },
                {
                  text: 'No',
                  onPress: () => {
                    setCreateType('chosing');
                    cancelPress();
                  },
                }
              ]) : null
            });
          }
        }
      )
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  }

  const saveSet = () => {
    if (CreateSETNAME.trim().length > 0) {
      if (!CURRENT_SETS.userInfo) {
        Alert.alert('Error', 'User information is missing');
        return;
      }
      let newSet: SetFormat = {
        id: Date.now().toString(),
        name: CreateSETNAME,
        author: CURRENT_SETS.userInfo as UserFormat,
        description: CreateSETDESCRIPTION,
        category: CreateSETCATEGORY,
        rate: { star: 0, total: 0 },
        private: CreateSETPRIVATE,
        isSaved: false,
        numberOfSaved: 0,
        isDone: false,
        deskList: [],
      }
      createSetFnc(newSet, setAsCurrent, null).then(() => {
        Alert.alert('Set created', 'Do you want to add a desk to this set?', [
          {
            text: 'Yes',
            onPress: () => {
              setCreateType('desk');
              setSETID(newSet.id);
              setSetName(newSet.name);
            },
          },
          {
            text: 'No',
            onPress: () => {
              setCreateType('chosing');
              cancelPress();
            },
          }
        ]);
        setCreateSETNAME('');
        setCreateSETDESCRIPTION('');
        setCreateSETCATEGORY('');
        setCreateSETPRIVATE(false);
      });
    } else {
      Alert.alert('Error', 'Please fill in the set name');
    }
  }

  const saveFolder = () => {
  }

  useEffect(() => {
    if (setSearch) {
      searchEngine(setSearch, CURRENT_SETS.all.filter((set) => set.author.email === CURRENT_SETS.userInfo?.email), 'set').then((result) => {
        setSetSearchResult(result as SetFormat[])
        console.log(result);

      })
    } else {
      setSetSearchResult([])
    }
  }, [setSearch])

  useEffect(() => {
    if (deskSearch && SETID) {
      console.log(SETID);
      console.log(CURRENT_SETS.all.filter((set) => set.id === SETID));

      searchEngine(deskSearch, CURRENT_SETS.all.filter((set) => set.id === SETID).flatMap((set) => set.deskList), 'desk').then((result) => {
        setDeskSearchResult(result as Desk[])
        console.log(result);
      })
    } else {
      setDeskSearchResult([])
    }
  }, [deskSearch, SETID])

  // navigate from other screen
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (CURRENT_SETS.addType === 'card') {
        setCreateType('card')
        setSETID(CURRENT_SETS.addSetID ?? null)
        setDESKTITLE(CURRENT_SETS.addDeskTitle ?? null)
        setSetName(CURRENT_SETS.addSetID ? CURRENT_SETS.all.find((set) => set.id === CURRENT_SETS.addSetID)?.name as string : '')
      } else if (CURRENT_SETS.addType === 'desk') {
        setCreateType('desk')
        setSETID(CURRENT_SETS.addSetID ?? null)
        setSetName(CURRENT_SETS.addSetID ? CURRENT_SETS.all.find((set) => set.id === CURRENT_SETS.addSetID)?.name as string : '')
      } else if (CURRENT_SETS.addType === 'set') {
        setCreateType('set')
      } else if (CURRENT_SETS.addType === 'folder') {
        setCreateType('folder')
      }
    });
    return unsubscribe;
  }, [navigation]);

  function renderCreation() {
    switch (createType) {
      case 'card':
        return (
          <ViewColCenter customStyle={[styles.flex1, styles.gap6vw]}>
            {/* set sellect */}
            <View style={[styles.padding3vw, styles.flexRowBetweenCenter, styles.borderRadius2vw, { backgroundColor: clrStyle.you, borderWidth: 1, borderColor: clrStyle.neu3 }]}>
              <View style={[styles.flexCol, styles.gap1vw, styles.flex1]}>
                <Lex16BoldAuto style={[styles.paddingH1vw, { color: clrStyle.white }]}>Choose your Set</Lex16BoldAuto>
                <SearchBox
                  value={setSearch}
                  onChangeText={setSetSearch}
                  onClear={() => { setSetSearch(''); setSETID(null); setSetName('') }}
                  customStyle={[styles.paddingV2vw,]}
                  placeholder={setName as string}
                  placeholderTextColor={clrStyle.black}
                />
                {
                  setSearchResult.length > 0 ?
                    setSearchResult.map((set, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setSETID(set.id)
                            setSetName(set.name)
                            setSetSearch('')
                          }}
                          style={[styles.padding2vw, { backgroundColor: clrStyle.you }]}>
                          <Lex14RegAuto>{set.name}</Lex14RegAuto>
                        </TouchableOpacity>
                      )
                    })
                    :
                    setSearch ? <Lex14RegAuto>No set found</Lex14RegAuto> : null
                }
              </View>
            </View>
            {/* end of set sellect */}

            {/* desk sellect */}
            <View style={[styles.padding3vw, styles.flexRowBetweenCenter, styles.borderRadius2vw, { backgroundColor: clrStyle.neu6, borderWidth: 1, borderColor: clrStyle.neu3 }]}>
              <View style={[styles.flexCol, styles.gap1vw, styles.flex1]}>
                <Lex16BoldAuto style={[styles.paddingH1vw, { color: clrStyle.black }]}>Choose your Desk</Lex16BoldAuto>
                <SearchBox
                  value={deskSearch}
                  onChangeText={setDeskSearch}
                  onClear={() => { setDeskSearch(''); setDESKTITLE(null) }}
                  customStyle={[styles.paddingV2vw,]}
                  placeholder={DESKTITLE as string}
                  placeholderTextColor={clrStyle.black}
                />
                {
                  deskSearchResult.length > 0 ?
                    deskSearchResult.map((desk, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setDESKTITLE(desk.title)
                            setDeskSearch('')
                          }}
                          style={[styles.padding2vw, { backgroundColor: clrStyle.neu6 }]}>
                          <Lex14RegAuto>{desk.title}</Lex14RegAuto>
                        </TouchableOpacity>
                      )
                    })
                    :
                    deskSearch ? <Lex14RegAuto>No desk found</Lex14RegAuto> : null
                }
              </View>
            </View>
            {/* end of desk sellect */}

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
        return (
          <ViewColCenter customStyle={[styles.flex1, styles.gap6vw]}>
            {/* set sellect */}
            <View style={[styles.padding3vw, styles.flexRowBetweenCenter, styles.borderRadius2vw, { backgroundColor: clrStyle.you, borderWidth: 1, borderColor: clrStyle.neu3 }]}>
              <View style={[styles.flexCol, styles.gap1vw, styles.flex1]}>
                <Lex16BoldAuto style={[styles.paddingH1vw, { color: clrStyle.white }]}>Choose your Set</Lex16BoldAuto>
                <SearchBox
                  value={setSearch}
                  onChangeText={setSetSearch}
                  onClear={() => { setSetSearch(''); setSETID(null); setSetName('') }}
                  customStyle={[styles.paddingV2vw,]}
                  placeholder={setName as string}
                  placeholderTextColor={clrStyle.black}
                />
                {
                  setSearchResult.length > 0 ?
                    setSearchResult.map((set, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setSETID(set.id)
                            setSetName(set.name)
                            setSetSearch('')
                          }}
                          style={[styles.padding2vw, { backgroundColor: clrStyle.you }]}>
                          <Lex14RegAuto>{set.name}</Lex14RegAuto>
                        </TouchableOpacity>
                      )
                    })
                    :
                    setSearch ? <Lex14RegAuto>No set found</Lex14RegAuto> : null
                }
              </View>
            </View>
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
          </ViewColCenter>
        )
      case 'set':
        return (
          <ViewColCenter customStyle={[styles.flex1, styles.gap6vw]}>
            <Card2lineInput
              text1='Set Title'
              value2={CreateSETNAME as string}
              onChangeText2={(text: string) => setCreateSETNAME(text)}
              textColor1={clrStyle.neu5}
              textColor2={clrStyle.black}
              borderClr={clrStyle.neu6}
              border
              placeholder2='Max 100 characters'
              isEdit={true}
            />
            <Card2lineInput
              text1='Description'
              value2={CreateSETDESCRIPTION as string}
              onChangeText2={(text: string) => setCreateSETDESCRIPTION(text)}
              textColor1={clrStyle.neu5}
              textColor2={clrStyle.black}
              borderClr={clrStyle.neu6}
              border
              placeholder2='Max 100 characters'
              isEdit={true}
            />
            <Card2lineInput
              text1='Category'
              value2={CreateSETCATEGORY as string}
              onChangeText2={(text: string) => setCreateSETCATEGORY(text)}
              textColor1={clrStyle.neu5}
              textColor2={clrStyle.black}
              borderClr={clrStyle.neu6}
              border
              placeholder2='Max 100 characters'
              isEdit={true}
            />
            <TouchableOpacity
              onPress={() => setCreateSETPRIVATE(!CreateSETPRIVATE)}
              style={[styles.padding2vw]}
            >
              <ViewRow>
                {CreateSETPRIVATE ? checkIcon(vw(6), vw(6), clrStyle.you) : unCheckIcon(vw(6), vw(6), clrStyle.neu5)}
                <Lex16RegAuto style={{ color: clrStyle.neu5 }}> Make this Set PRIVATE</Lex16RegAuto>
              </ViewRow>
            </TouchableOpacity>
          </ViewColCenter>
        )
      case 'folder':
        return (
          <ViewColCenter customStyle={[styles.flex1, styles.gap6vw]}>
            <Card2lineInput
              text1='Folder Title'
              value2={CreateSETNAME as string}
              onChangeText2={(text: string) => setCreateSETNAME(text)}
              textColor1={clrStyle.neu5}
              textColor2={clrStyle.black}
              borderClr={clrStyle.neu6}
              border
              placeholder2='Max 100 characters'
              isEdit={true}
            />
          </ViewColCenter>
        )

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
            <RoundBtn
              title='Create new Folder'
              onPress={() => setCreateType('folder')}
              bgColor={clrStyle.pur1}
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
        leftFnc={cancelPress}
        rightText={createType == 'chosing' ? '' : 'Done'}
        rightFnc={() => { createType == 'card' ? saveCard() : createType == 'desk' ? saveDesk() : saveSet() }}
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