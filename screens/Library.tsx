import { Image, ImageStyle, Platform, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Lex10RegAuto, Lex12BoldAuto, Lex12RegAuto, Lex16RegAuto, Lex20RegAuto, SaveViewWithColorStatusBar, SearchBox, SSBar, TopNav2, TopNavLib, ViewRowBetweenCenter, ViewRowCenter, ViewRowStartCenter } from '../assets/Class'
import styles, { vh, vw } from '../assets/stylesheet'
import { adjustIcon, lockIcon, notiBellIcon, peopleIcon, savedIcon, searchIcon, sharpLeftArrow, sharpRightArrow, unSavedIcon, xIcon } from '../assets/svgXml'
import { RootContext, setAsCurrent } from '../data/store'
import clrStyle from '../assets/componentStyleSheet'
import { useNavigation } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { handlePressSaveWithSetID, imgSourceHandle, marginBottomForScrollView, searchEngine, showRateStar, showSetCard } from '../assets/component'
import { SetFormat } from '../data/data'

export default function Library() {
  const navigation = useNavigation()
  const [CURRENT_SETS, dispatch] = React.useContext(RootContext)
  const [searchContent, setSearchContent] = React.useState('')
  const [searchResult, setSearchResult] = React.useState<SetFormat[]>([])

  const [refreshing, setRefreshing] = React.useState(false)
  const [topRatedSets, setTopRatedSets] = React.useState<SetFormat[]>([])
  const [topRatedSetsSaved, setTopRatedSetsSaved] = React.useState<boolean[]>([])

  const [languageSetIDs, setLanguageSetIDs] = React.useState<string[]>([])
  const [scienceSetIDs, setScienceSetIDs] = React.useState<string[]>([])
  const [professionSetIDs, setProfessionSetIDs] = React.useState<string[]>([])

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchData()
    })
    return unSubscribe

  }, [navigation])


  useEffect(() => {
    let savedList: boolean[] = []
    topRatedSets.forEach((set) => {
      set.isSaved ? savedList.push(true) : savedList.push(false)
    })
    setTopRatedSetsSaved(savedList)
    console.log('topRatedSetsSaved', topRatedSetsSaved);

  }, [topRatedSets])

  function fetchData() {
    setTopRatedSets([])
    setLanguageSetIDs([])
    setScienceSetIDs([])
    setProfessionSetIDs([])
    setTopRatedSetsSaved([])
    CURRENT_SETS.all.forEach((set) => {
      console.log('focus');

      if (set.rate.star >= 4 && set.rate.total >= 10 && set.private === false) {
        setTopRatedSets((prev) => {
          const newTopRatedSets = [...prev, set].sort((a, b) => b.rate.star - a.rate.star)
          return newTopRatedSets
        })
      }
      if (set.category === 'Language') {
        setLanguageSetIDs((prev) => [...prev, set.id])
      }
      if (set.category === 'Science') {
        setScienceSetIDs((prev) => [...prev, set.id])
      }
      if (set.category === 'Profession') {
        setProfessionSetIDs((prev) => [...prev, set.id])
      }
    })
  }

  function onRefresh() {
    setRefreshing(true)
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Library' as never }]
      })
      setRefreshing(false)
    }, 1000)
  }


  class TitleView extends React.Component<{
    title: string
    icon: string
    onPress: () => void
    customStyle?: any
  }> {
    render() {
      return (
        <ViewRowBetweenCenter customStyle={[styles.w100, styles.gap3vw, this.props.customStyle]}>
          <ViewRowStartCenter customStyle={[styles.gap1vw]}>
            <SvgXml xml={this.props.icon} />
            <Lex20RegAuto style={[{ color: clrStyle.black }]}>{this.props.title}</Lex20RegAuto>
          </ViewRowStartCenter>
          <TouchableOpacity onPress={this.props.onPress}>
            <ViewRowCenter customStyle={[styles.gap1vw]}>
              <Lex12RegAuto style={{ color: clrStyle.grey }}>More</Lex12RegAuto>
              {sharpRightArrow(vw(4.5), vw(4.5), clrStyle.grey)}
            </ViewRowCenter>
          </TouchableOpacity>
        </ViewRowBetweenCenter>
      )
    }
  }

  function showSetCard2(DATA: SetFormat[], IS_SETS_SAVE: boolean[], chane_IS_SETS_SAVE_fnc: any) {
    if (DATA.length > 0) {
      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            DATA.map((set: SetFormat, index: number) => {
              let DESK_NUMBER: number = set.deskList.length
              let TOTAL_CARD_NEED_MEMORIZED_NUMBER: number = set.deskList.map((item: any) => item.cardList.length).reduce((a: number, b: number) => a + b)
              let MEMORIZED_CARD_NUMBER: number = set.deskList.map((item: any) => item.cardList.filter((item: any) => item.memorized).length).reduce((a: number, b: number) => a + b)
              let TOTAL_CARD: number = set.deskList.map((item: any) => item.cardList.length).reduce((a: number, b: number) => a + b)
              let SET_TITLE: string = set.name
              let CATEGORY: string = set.category ? set.category : ''
              let NEED_REPEAT_CARD_NUMBER: number = set.deskList.map((item: any) => item.cardList.filter((item: any) => item.repeatToday).length).reduce((a: number, b: number) => a + b)
              let AUTHOR: string = set.author.name
              let AUTHOR_IMG_ADDRESS: string = set.author.imgAddress
              let STAR_RATE: number = set.rate.star
              let TOTAL_RATE: number = set.rate.total
              let PUBLIC_SET: boolean = set.private
              let SAVED_NUMBER: number = set.numberOfSaved
              let IS_SAVED: boolean = IS_SETS_SAVE[index] ? IS_SETS_SAVE[index] : false

              return (
                <TouchableOpacity key={index}
                  style={{ marginLeft: index == 0 ? vw(6) : 0, marginRight: vw(6) }}
                  onPress={() => {
                    dispatch(setAsCurrent(set));
                    navigation.navigate('SetView' as never);
                  }}>
                  <View style={[styles.flexRowStartCenter, styles.gap1vw, styles.wfit, styles.paddingH4vw, styles.paddingV2vw, { backgroundColor: clrStyle.yellow, borderTopLeftRadius: vw(4), borderTopRightRadius: vw(4), transform: [{ translateY: 1 }] }]}>
                    <Lex12BoldAuto style={{ color: '#717383' }}>{DESK_NUMBER} {DESK_NUMBER > 1 ? 'desks' : 'desk'}:</Lex12BoldAuto>
                    <Lex12RegAuto style={{ color: '#717383' }}> {TOTAL_CARD}</Lex12RegAuto>
                    <Lex12RegAuto style={{ color: '#717383' }}>{TOTAL_CARD > 1 ? 'cards' : 'card'}</Lex12RegAuto>
                  </View>
                  <View style={[styles.w60vw, { backgroundColor: clrStyle.yellow, borderRadius: vw(4), borderTopLeftRadius: 0 }]}>
                    <View style={[styles.padding4vw, styles.flexCol, styles.justifyContentSpaceBetween, styles.gap2vw, styles.w100, { backgroundColor: "#FFF5D1", borderRadius: vw(4) }]}>
                      <Text numberOfLines={1} style={{ fontFamily: 'LexendDeca-Black', fontSize: vw(4), color: clrStyle.black }}>{SET_TITLE}</Text>
                      <Lex10RegAuto lineNum={1} style={{ color: CATEGORY ? clrStyle.neu1 : clrStyle.neu3 }}>{CATEGORY ? CATEGORY : 'Genaral'}</Lex10RegAuto>
                      <View style={[styles.flexRowBetweenCenter,]}>
                        <View style={[styles.flexRowStartCenter, styles.gap2vw]}>
                          <Image
                            source={imgSourceHandle(AUTHOR_IMG_ADDRESS)}
                            style={[styles.borderRadius100, { width: vw(7), height: vw(7) }] as ImageStyle}
                          />
                          <View>
                            <Lex10RegAuto style={{ color: clrStyle.grey }}>{AUTHOR}</Lex10RegAuto>
                            <View style={[styles.flexRowStartCenter, styles.marginTop1vw, { gap: vw(0.25) }]}>
                              {showRateStar(STAR_RATE)}
                              <Lex10RegAuto style={{ color: clrStyle.grey }}> ({TOTAL_RATE})</Lex10RegAuto>
                            </View>
                          </View>
                        </View>

                        <View style={[styles.flexRowStartCenter, styles.gap4vw]}>

                          <View style={[styles.flexRowStartCenter, styles.gap1vw]}>
                            <Lex10RegAuto style={{ color: clrStyle.grey }}>{SAVED_NUMBER} saved</Lex10RegAuto>
                            <TouchableOpacity
                              onPress={() => { handlePressSaveWithSetID(set, IS_SETS_SAVE, chane_IS_SETS_SAVE_fnc, index) }}
                            >
                              {IS_SAVED ? savedIcon(vw(4.5), vw(4.5), clrStyle.grey) : unSavedIcon(vw(4.5), vw(4.5), clrStyle.grey)}
                            </TouchableOpacity>
                          </View>

                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }

        </ ScrollView>
      )
    } else {
      return <Lex20RegAuto>No set found</Lex20RegAuto>
    }
  }

  useEffect(() => {
    if (searchContent) {
      searchEngine(searchContent, CURRENT_SETS.public, 'set').then((result) => {
        setSearchResult(result as SetFormat[])
      })
    } else {
      setSearchResult([])
    }
  }, [searchContent])

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
          {/* <ViewRowBetweenCenter
            customStyle={[styles.flex1, styles.gap3vw, styles.borderRadius10, styles.h100, styles.shadowW0H0Black, styles.paddingH4vw, { backgroundColor: clrStyle.white, borderColor: clrStyle.neu3 }]}>
            {searchIcon(vw(5), vw(5), clrStyle.black)}
            <TextInput
              style={[styles.flex1, { color: clrStyle.black, fontSize: vw(3.5) }]}
              value={searchContent}
              onChangeText={(text) => setSearchContent(text as string)}
              placeholder='Search'
            />
            <TouchableOpacity
              onPress={() => setSearchContent('')}
            >
              {xIcon(vw(5), vw(5), clrStyle.black)}
            </TouchableOpacity>
          </ViewRowBetweenCenter> */}
          <SearchBox 
            value={searchContent}
            onChangeText={(text) => setSearchContent(text as string)}
            onClear={() => setSearchContent('')}
            showSearchIcon
          />
        </ViewRowBetweenCenter>
      </TopNavLib>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        style={[styles.flex1, styles.paddingV4vw]}>
        {searchContent ?
          <View style={[styles.paddingH8vw]}>
            {
              searchResult.length > 0 ?
                showSetCard(searchResult, [], () => { })
                :
                <Lex16RegAuto style={{ color: clrStyle.black }}>No set found</Lex16RegAuto>
            }
          </View>
          :
          <>
            <TitleView
              customStyle={[styles.paddingH6vw, styles.paddingV2vw]}
              icon={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29138 15C4.82486 15 3.57329 13.9398 3.3322 12.4932L2.25 6L5.06699 8.30481C5.7628 8.87411 6.79967 8.70766 7.28234 7.94919L9 5.25L10.7177 7.94918C11.2003 8.70766 12.2372 8.87411 12.933 8.30481L15.75 6L14.6678 12.4932C14.4267 13.9398 13.1751 15 11.7086 15H6.29138Z" fill="#FFC800" style="fill:#FFC800;fill:color(display-p3 1.0000 0.7843 0.0000);fill-opacity:1;"/><path d="M2.25 6L3.3322 12.4932C3.57329 13.9398 4.82486 15 6.29138 15H11.7086C13.1751 15 14.4267 13.9398 14.6678 12.4932L15.75 6M2.25 6L5.06699 8.30481C5.7628 8.87411 6.79967 8.70766 7.28234 7.94919L9 5.25M2.25 6C2.87132 6 3.375 5.49632 3.375 4.875C3.375 4.25368 2.87132 3.75 2.25 3.75C1.62868 3.75 1.125 4.25368 1.125 4.875C1.125 5.49632 1.62868 6 2.25 6ZM15.75 6L12.933 8.30481C12.2372 8.87411 11.2003 8.70766 10.7177 7.94918L9 5.25M15.75 6C16.3713 6 16.875 5.49632 16.875 4.875C16.875 4.25368 16.3713 3.75 15.75 3.75C15.1287 3.75 14.625 4.25368 14.625 4.875C14.625 5.49632 15.1287 6 15.75 6ZM9 5.25C9.62132 5.25 10.125 4.74632 10.125 4.125C10.125 3.50368 9.62132 3 9 3C8.37868 3 7.875 3.50368 7.875 4.125C7.875 4.74632 8.37868 5.25 9 5.25Z" stroke="#161616" style="stroke:#161616;stroke:color(display-p3 0.0848 0.0848 0.0848);stroke-opacity:1;" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
              title='Top Rated Set'
              onPress={() => { }} />
            {showSetCard2(topRatedSets, topRatedSetsSaved, setTopRatedSetsSaved)}
          </>}
        {marginBottomForScrollView(2)}
      </ScrollView>
    </SSBar>
  )
}