// system import
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, ScrollView, Animated, Switch, RefreshControl, ImageStyle, ColorValue, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// style import
import styles from '../assets/stylesheet';
import { vh, vw } from '../assets/stylesheet';

// component import
import { Lex10BoldAuto, Lex10RegAuto, Lex12BoldAuto, Lex12RegAuto, Lex14BlackAuto, Lex14RegAuto, Lex16BlackAuto, Lex16MedAuto, Lex16RegAuto, Lex20BlackAuto, Lex8BoldAuto, Lex8LightAuto, Pay16RegAuto, Pay20BlackLine122, Pay32BlackLine40, SaveViewWithColorStatusBar, SSBar } from '../assets/Class';
import { goldStar, noStar, notiBellIcon, someFkCurvedIcon, weeklyAchiveIcon, weeklyAchivedIcon, weeklyAwaitAchieveIcon, lockIcon, peopleIcon, savedIcon, unSavedIcon } from '../assets/svgXml';
import { imgSourceHandle, marginBottomForScrollView, showSetCard } from '../assets/component';
import clrStyle from '../assets/componentStyleSheet';
import storage, { getAllSets, getUser, loadAllSets, weeklyProgressData } from '../data/storageFunc';
import { demoSets } from '../data/factoryData';
import { CURRENT_SET_PUBLIC, currentClearAllSet, RootContext, saveNumberOfCardsMemorized, saveNumberOfCardsNeedToMemorize, saveNumberOfcardsNeedToReviewToday, saveNumberOfcardsReviewedToday, saveUserInfo, setDone, setPrivate, setPublic, setSaved } from '../data/store';
import { SetFormat, setList, UserFormat } from '../data/data';

const Home = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const [CURRENT_SETS, dispatch] = useContext(RootContext);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' as never }],
            });
        }, 1000);
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setIsDataLoaded(false);
            const fetchData = async () => {
                try {
                    dispatch(currentClearAllSet());
                    const res = await weeklyProgressData();
                    setCheckInData(res);
                    weeklyFnc(res);
                    getUser().then((user) => {
                        if (user !== false && user.email) {
                            dispatch(saveUserInfo(user));
                        }
                    })
                    getAndAlignData();
                } catch (error) {
                    console.log(error);
                }
            };

            fetchData();
        });
        return unsubscribe;
    }, [navigation]);

    function getAndAlignData() {
        function getDayOfWeek() {
            let today = new Date();
            let day = today.getDay();
            let days = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S'];
            return days[day] as 'SU' | 'M' | 'T' | 'W' | 'TH' | 'F' | 'S';
        }

        getAllSets().then(sets => {
            if (sets !== false) {
                let publicSets = sets.filter((set: SetFormat) => !set.private);
                dispatch(setPublic(publicSets));
                let privateSets = sets.filter((set: SetFormat) => set.private);
                dispatch(setPrivate(privateSets));
                let savedSets = sets.filter((set: SetFormat) => set.isSaved);
                dispatch(setSaved(savedSets));
                let doneSets = sets.filter((set: SetFormat) => set.isDone);
                dispatch(setDone(doneSets));
                dispatch(saveNumberOfcardsNeedToReviewToday(sets.map((set: SetFormat) => set.deskList.map((desk) => {
                    if (desk.repeatSchedule.includes('all') || desk.repeatSchedule.includes(getDayOfWeek()) ? 1 : 0) {
                        return desk.cardList.map((card) => {
                            if (!card.memorized) {
                                return 1;
                            } else {
                                return 0;
                            }
                        }).reduce((a: number, b: number) => a + b, 0) as number;
                    } else {
                        return 0;
                    }
                }).reduce((a: number, b: number) => a + b, 0) as number).reduce((a: number, b: number) => a + b, 0) as number));
                dispatch(saveNumberOfCardsNeedToMemorize(sets.flatMap((set: SetFormat) => set.deskList.flatMap((desk) => desk.cardList.filter((card) => card.memorized != undefined))).length));
                dispatch(saveNumberOfcardsReviewedToday(sets.map((set: SetFormat) => set.deskList.map((desk) => desk.cardList.filter((card) => card.repeatToday).length).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0)));
                dispatch(saveNumberOfCardsMemorized(sets.map((set: SetFormat) => set.deskList.map((desk) => desk.cardList.filter((card) => card.memorized).length).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0)));

                if (isDataLoaded && new Date().getHours() === 0 && new Date().getMinutes() === 0) {
                    sets.forEach((set: SetFormat) => {
                        set.deskList.forEach((desk) => {
                            desk.cardList.forEach((card) => {
                                card.repeatToday = false;
                            });
                        });
                    });
                }
            }
        }).then(() => { setIsDataLoaded(true) });
    }

    // WEEKLY PROGRESS SECTION

    const [isCollectedToday, setIsCollectedToday] = useState(false);
    const [checkInData, setCheckInData] = useState([]);
    const [showWeeklyProgress, setShowWeeklyProgress] = useState(false);

    interface Weekly {
        day: string[];
        collected: boolean[];
        award: any[];
    }

    const [weekly, setWeekly] = useState<Weekly>({
        day: [],
        collected: [],
        award: [],
    });

    const today = new Date();
    const todayWeekday = today.getDay();
    const todayDate = today.getDate();

    function weeklyFnc(monthData: any[]) {
        let currentMonth = `${today.getFullYear()}/${today.getMonth() + 1}`;

        let currentMonthData = monthData.find((item: { month: string }) => item.month == currentMonth);
        let currentWeek = currentMonthData.data.find((item: { days: any[] }) => item.days.find((day: number) => day == todayDate));

        if (currentWeek) {
            let todayIndex = currentWeek.days.findIndex((day: number) => day == todayDate);
            setIsCollectedToday(currentWeek.checked[todayIndex]);
        }

        const weekly = {
            day: ['M', 'T', 'W', 'TH', 'F', 'S', 'SU'],
            collected: currentWeek.checked,
            award: [
                weeklyAchiveIcon(vw(6.25), vw(7.5)),
                weeklyAchivedIcon(vw(6.25), vw(7.5)),
                weeklyAwaitAchieveIcon(vw(6.25), vw(7.5)),
            ]
        }

        setWeekly(weekly);
    }

    useEffect(() => {
        if (showWeeklyProgress) {
            weeklyFnc(checkInData);
        }
    }, [weekly.collected])

    const claimCheckIn = (monthData: any[]) => {
        let currentMonth = `${today.getFullYear()}/${today.getMonth() + 1}`;

        let currentMonthData = monthData.find((item: { month: string }) => item.month == currentMonth);
        let currentWeek = currentMonthData.data.find((item: { days: any[] }) => item.days.find((day: number) => day == todayDate));
        let todayIndex = currentWeek.days.findIndex((day: number) => day == todayDate);

        currentWeek.checked[todayIndex] = true;
        setIsCollectedToday(true);

        storage.save({
            key: 'weeklyProgress',
            data: checkInData,
            expires: null,
        });
    }

    function renderWeeklyProgress(weekly: Weekly) {
        return weekly.collected.length > 0 ? (
            <Animated.View style={[styles.bgcolorBlack, styles.padding4vw,]}>
                <Pay16RegAuto style={[styles.paddingH4vw, { color: 'white' }]}>Weekly progress</Pay16RegAuto>
                <View style={[styles.flexRowBetweenCenter, styles.flexNoWrap, styles.marginTop1vw, styles.flex1, styles.paddingH2vw]}>
                    {weekly.day.map((day, index) => {
                        return (
                            <View key={index} style={[styles.flexColCenter, styles.gap1vw, styles.paddingV2vw, todayWeekday == index + 1 ? styles.paddingH4vw : null, styles.borderRadius100, { backgroundColor: todayWeekday == index + 1 ? 'white' : 'transparent', }]}>
                                <Lex14BlackAuto style={{ color: todayWeekday == index + 1 ? clrStyle.orange : 'rgba(87, 87, 87, 1)' }}>{day}</Lex14BlackAuto>
                                {weekly.collected[index] ? weekly.award[1] : todayWeekday == index + 1 ? weekly.award[0] : weekly.award[2]}
                                <Lex8BoldAuto style={{ color: weekly.collected[index] ? clrStyle.orange : clrStyle.grey }}>+10 ex</Lex8BoldAuto>
                            </View>
                        )
                    })}
                </View>
                <TouchableOpacity
                    onPress={() => { claimCheckIn(checkInData) }}
                    disabled={weekly.collected[todayWeekday - 1]}
                    style={[styles.marginTop6vw, styles.marginBottom2vw, styles.alignSelfCenter, styles.paddingV4vw, styles.paddingH6vw, styles.borderRadius100, { backgroundColor: !weekly.collected[todayWeekday - 1] ? clrStyle.neu4 : clrStyle.grey, }]}>
                    {!weekly.collected[todayWeekday - 1] ?
                        <Lex16BlackAuto style={[{ color: clrStyle.yellow }]}>Tap to recive +10 experience</Lex16BlackAuto>
                        : <Lex14RegAuto style={[{ color: '#A4A2A2' }]}>Comeback on tomorrow to get 10 experience</Lex14RegAuto>
                    }
                </TouchableOpacity>
            </Animated.View>
        ) : (
            <Animated.View style={[styles.bgcolorBlack, styles.padding4vw,]}>
                <Pay16RegAuto style={[styles.paddingH4vw, { color: 'white' }]}>Loading</Pay16RegAuto>
            </Animated.View>
        )
    }

    // END OF WEEKLY PROGRESS SECTION

    // DATA AND CARD SECTION

    // data set
    const [setData, setSetData] = useState<SetFormat[]>([]);

    const [switchSet, setSwitchSet] = useState(0);
    const [sellected, setSellected] = useState(0);

    const switchAnimation = useRef(new Animated.Value(0)).current;

    const switchOn = switchAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [vw(1), vw(19),]
    });

    const doSwitchAnimation = () => {
        Animated.timing(switchAnimation, {
            toValue: switchSet,
            duration: 150,
            useNativeDriver: false
        }).start();
    }

    useEffect(() => {
        doSwitchAnimation();

        switch (sellected) {
            case 1:
                setSetData(CURRENT_SETS.public)
                break;
            case 2:
                setSetData(CURRENT_SETS.private)
                break;
            case 3:
                setSetData(CURRENT_SETS.saved)
                break;
            case 4:
                setSetData(CURRENT_SETS.done)
                break;
            case 5:
                setSetData(demoSets)
                break;
            default:
                setSetData(CURRENT_SETS.public.concat(CURRENT_SETS.private, CURRENT_SETS.saved, CURRENT_SETS.done))
                break;
        }
    }, [switchSet, sellected, isDataLoaded])


    function sellectData() {
        let cate = [`All`, `Public`, `Private`, `Saved`, `Done`]
        return (
            <ScrollView horizontal>
                {cate.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => { setSellected(index) }}
                            style={[styles.paddingH4vw, styles.paddingV2vw, { borderBottomWidth: vw(0.5), borderBlockColor: sellected == index ? 'white' : 'transparent' }]}>
                            <Lex16RegAuto style={{ color: sellected == index ? 'white' : clrStyle.neu3, }}>{item}</Lex16RegAuto>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }

    // END OF DATA AND CARD SECTION

    return (
        <SafeAreaView style={[styles.flex1, styles.bgcolorBlack]}>
            <SSBar />
            <View style={[styles.flexRowBetweenCenter, styles.paddingH8vw, styles.paddingBottom4vw, styles.bgcolorBlack,]}>
                <View style={[styles.flexRowCenter, styles.gap2vw]}>
                    <Image source={imgSourceHandle(CURRENT_SETS.userInfo?.imgAddress ? CURRENT_SETS.userInfo.imgAddress : '')} style={[styles.borderRadius100, { width: vw(14), height: vw(14), borderColor: 'rgba(77, 131, 101, 1)', borderWidth: vw(0.5), }] as ImageStyle} />
                    <View>
                        <Pay20BlackLine122 style={{ color: 'white' }}>{CURRENT_SETS.userInfo?.name ? CURRENT_SETS.userInfo.name : `User`}</Pay20BlackLine122>
                        <Lex16RegAuto style={{ color: 'white' }}>Let’s learn together!</Lex16RegAuto>
                    </View>
                </View>

                {/* TODO: notification button */}
                <TouchableOpacity >
                    {notiBellIcon(vw(10), vw(10),)}
                </TouchableOpacity>
            </View>
            <ScrollView
                style={[styles.flex1, styles.bgcolorBlack]}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        style={{ backgroundColor: clrStyle.you }}
                    />
                }>
                {/* WEEKLY PROGRESS SECTION */}
                {renderWeeklyProgress(weekly)}
                <View style={{ backgroundColor: clrStyle.you }}>
                    {/* blue part TODO: if there is activities */}
                    <View style={[styles.paddingV3vw, styles.flexRowBetweenCenter, styles.flex1, styles.paddingH5vw,]}>
                        <View style={[styles.flex1, styles.flexCol, styles.gap4vw]}>
                            <Pay16RegAuto style={{ color: clrStyle.yellow }}>Good job !</Pay16RegAuto>
                            <Lex14RegAuto style={{ color: 'white' }}>Practice 2 more days, you are going to reach your study plan.</Lex14RegAuto>
                        </View>
                        <Image source={require('../assets/image/Home/blueTab.png')} style={[{ width: vw(30), height: vw(30) }]} />
                    </View>

                    {/* white part */}
                    <View style={[styles.bgcolorWhite, styles.paddingTop4vw, { borderTopLeftRadius: vw(4), borderTopRightRadius: vw(4) }]}>
                        <View style={[styles.paddingBottom8vw, styles.paddingH8vw, styles.flexRowEvenlyCenter,]}>
                            <View style={[styles.flex1, styles.paddingH2vw]}>
                                <Pay16RegAuto style={[styles.textCenter, { color: clrStyle.neu4, fontSize: vw(15) }]}>{CURRENT_SETS.cardsReviewedToday}</Pay16RegAuto>
                                <Lex16RegAuto style={[styles.textCenter, { color: clrStyle.neu3 }]}>cards need to
                                    <Lex16BlackAuto style={{ color: clrStyle.neu4 }}> repeat</Lex16BlackAuto> today</Lex16RegAuto>
                            </View>
                            <View style={[styles.flex1, styles.paddingH2vw]}>
                                <Pay16RegAuto style={[styles.textCenter, { color: clrStyle.orange, fontSize: vw(15) }]}>{CURRENT_SETS.cardsMemorized}<Pay16RegAuto style={{ fontSize: vw(5), color: clrStyle.neu3 }}> /{CURRENT_SETS.cardsNeedToMemorize}</Pay16RegAuto></Pay16RegAuto>
                                <Lex16RegAuto style={[styles.textCenter, { color: clrStyle.neu3 }]}>cards
                                    <Lex16BlackAuto style={{ color: clrStyle.orange }}> memorized</Lex16BlackAuto> for all time</Lex16RegAuto>
                            </View>
                        </View>

                        {/* Black part */}
                        <View style={[styles.bgcolorBlack, styles.paddingV4vw, styles.paddingH6vw, styles.positionRelative, { borderTopLeftRadius: vw(10), borderTopRightRadius: vw(10) }]}>
                            <View style={[styles.positionAbsolute, styles.alignSelfCenter, { top: -vw(1) }]}>
                                {/* {someFkCurvedIcon(vw(90), vw(6))} */}
                            </View>
                            <View style={[styles.flexRowBetweenCenter, styles.paddingTop4vw]}>
                                <View>
                                    <Lex20BlackAuto style={{ color: 'white' }}>Your Set</Lex20BlackAuto>
                                    <Lex14RegAuto style={{ color: 'white' }}>{setData.length} set(s)</Lex14RegAuto>
                                </View>
                                <TouchableOpacity
                                    onPress={() => { setSwitchSet(switchSet == 0 ? 1 : 0); switchSet == 1 ? setSellected(0) : setSellected(5) }}
                                    style={[styles.flexRowCenter, styles.w40vw, styles.bgcolorWhite, styles.paddingV1vw, styles.paddingH2vw, styles.borderRadius100, styles.positionRelative]}>
                                    <Lex14RegAuto style={[styles.flex1, styles.textCenter, styles.paddingV1vw, styles.paddingH2vw, { color: !switchSet ? 'white' : 'black' }]}>Repeat today</Lex14RegAuto>
                                    <Lex14RegAuto style={[styles.flex1, styles.textCenter, styles.paddingV1vw, styles.paddingH2vw, { color: !switchSet ? 'black' : 'white' }]}>All set</Lex14RegAuto>
                                    <Animated.View style={[styles.positionAbsolute, styles.h100, styles.bgcolorBlack, styles.borderRadius100, { left: switchOn, zIndex: -1, width: '55%' }]}></Animated.View>
                                </TouchableOpacity>
                            </View>

                            {/* card set*/}
                            {switchSet ? null : sellectData()}
                            {showSetCard(setData)}
                            {marginBottomForScrollView()}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >

    )

}

export default Home;