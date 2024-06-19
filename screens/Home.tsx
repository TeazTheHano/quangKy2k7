// system import
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, ScrollView, Animated, Switch, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// style import
import styles from '../assets/stylesheet';
import { vh, vw } from '../assets/stylesheet';

// component import
import { Lex10BoldAuto, Lex10RegAuto, Lex12BoldAuto, Lex12RegAuto, Lex14BlackAuto, Lex14RegAuto, Lex16BlackAuto, Lex16MedAuto, Lex16RegAuto, Lex20BlackAuto, Lex8BoldAuto, Lex8LightAuto, Pay16RegAuto, Pay20BlackLine122, Pay32BlackLine40 } from '../assets/Class';
import { goldStar, noStar, notiBellIcon, someFkCurvedIcon, weeklyAchiveIcon, weeklyAchivedIcon, weeklyAwaitAchieveIcon, lockIcon, peopleIcon, savedIcon, unSavedIcon } from '../assets/svgXml';
import * as Progress from 'react-native-progress';
import { marginBottomForScrollView } from '../assets/component';
import colorStyle from '../assets/componentStyleSheet';
import storage, { clearStorage, weeklyProgressData } from '../data/storageFunc';

const Home = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setShowWeeklyProgress(false);

        setTimeout(() => {
            setRefreshing(false);
            setShowWeeklyProgress(true);
        }, 2000);
    }, []);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await weeklyProgressData();
                setCheckInData(res);
                weeklyFnc(res);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const today = new Date();
    const todayWeekday = today.getDay();
    const todayDate = today.getDate();

    function weeklyFnc(monthData: any[]) {
        let currentMonth = `${today.getFullYear()}/${today.getMonth() + 1}`;

        let currentMonthData = monthData.find((item: { month: string }) => item.month == currentMonth);
        let currentWeek = currentMonthData.data.find((item: { days: any[] }) => item.days.find((day: number) => day == todayDate));
        console.log('currentWeek', currentWeek);

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
                            <View key={index} style={[styles.flexColCenter, styles.gap1vw, styles.paddingV2vw, todayWeekday == index + 1 ? styles.paddingH4vw : null, styles.borderRadius100, { backgroundColor: todayWeekday == index + 1 ? 'white' : null, }]}>
                                <Lex14BlackAuto style={{ color: todayWeekday == index + 1 ? colorStyle.orange : 'rgba(87, 87, 87, 1)' }}>{day}</Lex14BlackAuto>
                                {weekly.collected[index] ? weekly.award[1] : todayWeekday == index + 1 ? weekly.award[0] : weekly.award[2]}
                                <Lex8BoldAuto style={{ color: weekly.collected[index] ? colorStyle.orange : colorStyle.grey }}>+10 ex</Lex8BoldAuto>
                            </View>
                        )
                    })}
                </View>
                <TouchableOpacity
                    onPress={() => { claimCheckIn(checkInData) }}
                    style={[styles.marginTop6vw, styles.marginBottom2vw, styles.alignSelfCenter, styles.paddingV4vw, styles.paddingH6vw, styles.borderRadius100, { backgroundColor: colorStyle.neu4, display: !weekly.collected[todayWeekday - 1] ? 'block' : 'none' }]}>
                    <Lex16BlackAuto style={[{ color: colorStyle.yellow }]}>Tap to recive +10 experience</Lex16BlackAuto>
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

    const [switchSet, setSwitchSet] = useState(0);
    const [switchSetData, setSwitchSetData] = useState([true, false, false, false, false]);

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
    }, [switchSet])

    // data set
    const [setData, setSetData] = useState(
        [
            {
                title: 'B1 Vocabularies',
                desk: 3,
                total: 30,
                current: 12,
                needrepeat: 10,
                createrID: 'user1',
                setRate: 5,
                setRateTotal: 10,
                private: false,
                publicSave: 6,
                isDone: false,
                isSaved: false,
            },
            {
                title: 'English Phrasal verb B1 level 1',
                desk: 4,
                total: 40,
                current: 10,
                needrepeat: 12,
                createrID: 'user1',
                setRate: 0,
                setRateTotal: 0,
                private: true,
                publicSave: 0,
                isDone: false,
                isSaved: false,
            },
            {
                title: 'Math formula (grade 12)',
                desk: 4,
                total: 40,
                current: 18,
                needrepeat: 8,
                createrID: 'user5',
                setRate: 4,
                setRateTotal: 90,
                private: false,
                publicSave: 189,
                isDone: false,
                isSaved: false,
            },
            {
                title: 'English Phrasal verb B1 level 2',
                desk: 4,
                total: 40,
                current: 10,
                needrepeat: 12,
                createrID: 'user1',
                setRate: 0,
                setRateTotal: 0,
                private: true,
                publicSave: 0,
                isDone: false,
                isSaved: true,
            },
            {
                title: 'Math formula (grade 12)',
                desk: 4,
                total: 40,
                current: 18,
                needrepeat: 8,
                createrID: 'user2',
                setRate: 4,
                setRateTotal: 90,
                private: false,
                publicSave: 189,
                isDone: false,
                isSaved: false,
            },
            {
                title: 'English Phrasal verb B1 level 2',
                desk: 4,
                total: 40,
                current: 10,
                needrepeat: 12,
                createrID: 'user1',
                setRate: 0,
                setRateTotal: 0,
                private: true,
                publicSave: 0,
                isDone: false,
                isSaved: false,
            },
            {
                title: 'Math formula (grade 12)',
                desk: 4,
                total: 40,
                current: 18,
                needrepeat: 8,
                createrID: 'user2',
                setRate: 4,
                setRateTotal: 90,
                private: false,
                publicSave: 189,
                isDone: false,
                isSaved: false,
            },
            {
                title: 'English Phrasal verb B1 level 2',
                desk: 4,
                total: 40,
                current: 10,
                needrepeat: 12,
                createrID: 'user1',
                setRate: 0,
                setRateTotal: 0,
                private: true,
                publicSave: 0,
                isDone: false,
                isSaved: false,
            },
            {
                title: 'Math formula (grade 12)',
                desk: 4,
                total: 40,
                current: 18,
                needrepeat: 8,
                createrID: 'user2',
                setRate: 4,
                setRateTotal: 90,
                private: false,
                publicSave: 189,
                isDone: false,
                isSaved: false,
            },
            {
                title: 'English Phrasal verb B1 level 2',
                desk: 4,
                total: 40,
                current: 10,
                needrepeat: 12,
                createrID: 'user1',
                setRate: 0,
                setRateTotal: 0,
                private: true,
                publicSave: 0,
                isDone: true,
                isSaved: false,
            },
            {
                title: 'Math formula (grade 12)',
                desk: 4,
                total: 40,
                current: 18,
                needrepeat: 8,
                createrID: 'user2',
                setRate: 4,
                setRateTotal: 90,
                private: false,
                publicSave: 189,
                isDone: false,
                isSaved: false,
            },
        ]
    )

    function showRateStar(rate: number) {
        let rateStar = []
        for (let index = 0; index < rate; index++) {
            rateStar.push(goldStar(vw(3), vw(3)))
        }
        for (let index = 0; index < 5 - rate; index++) {
            rateStar.push(noStar(vw(3), vw(3)))
        }
        return rateStar.map((item, index) => {
            return (
                <View key={index}>
                    {item}
                </View>
            )
        }
        )
    }

    const handlePressSave = (itemIndex: number) => {
        setSetData(prevItems => prevItems.map((item, index) => {
            if (index === itemIndex) {
                return { ...item, isSaved: !item.isSaved };
            }
            return item;
        }));
    };


    function sellectData() {
        return (
            <ScrollView horizontal>
                <TouchableOpacity
                    onPress={() => { setSwitchSetData([true, false, false, false, false]) }}
                    style={[styles.paddingH4vw, styles.paddingV2vw, { borderBottomWidth: vw(0.5), borderBlockColor: switchSetData[0] ? 'white' : null }]}>
                    <Lex16RegAuto style={{ color: switchSetData[0] ? 'white' : colorStyle.neu3, }}>All</Lex16RegAuto>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSwitchSetData([false, true, false, false, false]) }}
                    style={[styles.paddingH4vw, styles.paddingV2vw, { borderBottomWidth: vw(0.5), borderBlockColor: switchSetData[1] ? 'white' : null }]}>
                    <Lex16RegAuto style={{ color: switchSetData[1] ? 'white' : colorStyle.neu3, }}>Public</Lex16RegAuto>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSwitchSetData([false, false, true, false, false]) }}
                    style={[styles.paddingH4vw, styles.paddingV2vw, { borderBottomWidth: vw(0.5), borderBlockColor: switchSetData[2] ? 'white' : null }]}>
                    <Lex16RegAuto style={{ color: switchSetData[2] ? 'white' : colorStyle.neu3, }}>Private</Lex16RegAuto>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSwitchSetData([false, false, false, true, false]) }}
                    style={[styles.paddingH4vw, styles.paddingV2vw, { borderBottomWidth: vw(0.5), borderBlockColor: switchSetData[3] ? 'white' : null }]}>
                    <Lex16RegAuto style={{ color: switchSetData[3] ? 'white' : colorStyle.neu3, }}>Saved</Lex16RegAuto>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSwitchSetData([false, false, false, false, true]) }}
                    style={[styles.paddingH4vw, styles.paddingV2vw, { borderBottomWidth: vw(0.5), borderBlockColor: switchSetData[4] ? 'white' : null }]}>
                    <Lex16RegAuto style={{ color: switchSetData[4] ? 'white' : colorStyle.neu3, }}>Done</Lex16RegAuto>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    function showSetCard(data: object[]) {
        return (
            <View style={[styles.flexCol, styles.marginVertical4vw, styles.gap4vw]}>
                {
                    data.map((item: any, index: number) => {
                        return (
                            <View key={index}>
                                <View style={[styles.flexRowStartCenter, styles.gap1vw, styles.wfit, styles.paddingH4vw, styles.paddingV2vw, { backgroundColor: 'rgba(79, 79, 79, 1)', borderTopLeftRadius: vw(4), borderTopRightRadius: vw(4), transform: [{ translateY: 1 }] }]}>
                                    <Lex12BoldAuto style={{ color: 'white' }}>{item.desk} {item.desk > 1 ? 'desks' : 'desk'}:</Lex12BoldAuto>
                                    <Progress.Circle
                                        progress={item.current / item.total}
                                        strokeCap='round'
                                        showsText={false}
                                        color={colorStyle.neu6}
                                        borderWidth={1}
                                        thickness={vw(0.75)}
                                        size={15}
                                    />
                                    <Lex12BoldAuto style={{ color: colorStyle.neu6 }}>{item.current}</Lex12BoldAuto>
                                    <Lex12RegAuto style={{ color: 'white' }}>/ {item.total}</Lex12RegAuto>
                                    <Lex12RegAuto style={{ color: colorStyle.neu6 }}>cards memorized</Lex12RegAuto>
                                </View>
                                <View style={[{ backgroundColor: "rgba(79, 79, 79, 1)", borderRadius: vw(4), borderTopLeftRadius: 0 }]}>
                                    <View style={[styles.padding4vw, { backgroundColor: "rgba(60, 60, 60, 1)", borderRadius: vw(4) }]}>
                                        <Text numberOfLines={1} style={{ fontFamily: 'LexendDeca-Black', fontSize: vw(4), color: 'white' }}>{item.title}</Text>
                                        <View style={[styles.paddingV1vw, styles.paddingH2vw, styles.borderRadius10, styles.wfit, styles.marginVertical2vw, { backgroundColor: colorStyle.neu6 }]}>
                                            <Lex12BoldAuto>{item.needrepeat} {item.needrepeat > 1 ? 'cards' : 'card'} <Lex12RegAuto>need to repeat today</Lex12RegAuto></Lex12BoldAuto>
                                        </View>
                                        <View style={[styles.flexRowBetweenCenter, styles.marginTop4vw,]}>
                                            <View style={[styles.flexRowStartCenter, styles.gap2vw]}>
                                                <Image source={require('../assets/image/placeholder.jpeg')} style={[styles.borderRadius100, { width: vw(7), height: vw(7) }]} />
                                                <View>
                                                    <Lex10RegAuto style={{ color: 'white' }}>{item.createrID}</Lex10RegAuto>
                                                    <View style={[styles.flexRowStartCenter, styles.marginTop1vw, { gap: vw(0.25) }]}>
                                                        {showRateStar(item.setRate)}
                                                        <Lex10RegAuto style={{ color: 'rgba(255, 255, 255, 1)' }}> ({item.setRateTotal})</Lex10RegAuto>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.flexRowStartCenter, styles.gap4vw]}>
                                                <View style={[styles.flexRowStartCenter, styles.gap1vw]}>
                                                    {item.private ? lockIcon(vw(4.5), vw(4.5)) : peopleIcon(vw(4.5), vw(4.5))}
                                                    <Lex10RegAuto style={{ color: 'rgba(255, 255, 255, 1)' }}>{item.private ? 'Private' : 'Public'}</Lex10RegAuto>
                                                </View>
                                                {item.private ? null :
                                                    <View style={[styles.flexRowStartCenter, styles.gap1vw]}>
                                                        <Lex10RegAuto style={{ color: 'rgba(255, 255, 255, 1)' }}>{item.publicSave} saved</Lex10RegAuto>
                                                        <TouchableOpacity
                                                            onPress={() => { handlePressSave(index) }}
                                                        >
                                                            {item.isSaved ? savedIcon(vw(4.5), vw(4.5)) : unSavedIcon(vw(4.5), vw(4.5))}
                                                        </TouchableOpacity>
                                                    </View>
                                                }
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }

            </View>
        )
    }

    // END OF DATA AND CARD SECTION

    return (
        <SafeAreaView style={[styles.flex1, styles.bgcolorBlack]}>
            <StatusBar />
            <View style={[styles.flexRowBetweenCenter, styles.paddingH8vw, styles.paddingBottom4vw, styles.bgcolorBlack,]}>
                <View style={[styles.flexRowCenter, styles.gap2vw]}>
                    <Image source={require('../assets/image/placeholder.jpeg')} style={[styles.borderRadius100, { width: vw(14), height: vw(14), borderColor: 'rgba(77, 131, 101, 1)', borderWidth: vw(0.5), }]} />
                    <View>
                        <Pay20BlackLine122 style={{ color: 'white' }}>Hi John Doe</Pay20BlackLine122>
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
                        style={{ backgroundColor: colorStyle.you }}
                    />
                }>
                {/* WEEKLY PROGRESS SECTION */}
                {renderWeeklyProgress(weekly)}
                <View style={{ backgroundColor: colorStyle.you }}>
                    {/* blue part */}
                    <View style={[styles.paddingV3vw, styles.flexRowBetweenCenter, styles.flex1, styles.paddingH5vw,]}>
                        <View style={[styles.flex1, styles.flexCol, styles.gap4vw]}>
                            <Pay16RegAuto style={{ color: colorStyle.yellow }}>Good job !</Pay16RegAuto>
                            <Lex14RegAuto style={{ color: 'white' }}>Practice 2 more days, you are going to reach your study plan.</Lex14RegAuto>
                        </View>
                        <Image source={require('../assets/image/Home/blueTab.png')} style={[{ width: vw(30), height: vw(30) }]} />
                    </View>

                    {/* white part */}
                    <View style={[styles.bgcolorWhite, styles.paddingTop4vw, { borderTopLeftRadius: vw(4), borderTopRightRadius: vw(4) }]}>
                        <View style={[styles.paddingBottom8vw, styles.paddingH8vw, styles.flexRowEvenlyCenter,]}>
                            <View style={[styles.flex1, styles.paddingH2vw]}>
                                <Pay16RegAuto style={[styles.textCenter, { color: colorStyle.neu4, fontSize: vw(15) }]}>30</Pay16RegAuto>
                                <Lex16RegAuto style={[styles.textCenter, { color: colorStyle.neu3 }]}>cards need to
                                    <Lex16BlackAuto style={{ color: colorStyle.neu4 }}> repeat</Lex16BlackAuto> today</Lex16RegAuto>
                            </View>
                            <View style={[styles.flex1, styles.paddingH2vw]}>
                                <Pay16RegAuto style={[styles.textCenter, { color: colorStyle.orange, fontSize: vw(15) }]}>90<Pay16RegAuto style={{ fontSize: vw(5), color: colorStyle.neu3 }}> /190</Pay16RegAuto></Pay16RegAuto>
                                <Lex16RegAuto style={[styles.textCenter, { color: colorStyle.neu3 }]}>cards
                                    <Lex16BlackAuto style={{ color: colorStyle.orange }}> memorized</Lex16BlackAuto> for all time</Lex16RegAuto>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => { clearStorage() }}><Text>clear</Text></TouchableOpacity>

                        {/* Black part */}
                        <View style={[styles.bgcolorBlack, styles.paddingV4vw, styles.paddingH6vw, styles.positionRelative, { borderTopLeftRadius: vw(10), borderTopRightRadius: vw(10) }]}>
                            <View style={[styles.positionAbsolute, styles.alignSelfCenter, { top: -vw(1) }]}>
                                {/* {someFkCurvedIcon(vw(90), vw(6))} */}
                            </View>
                            <View style={[styles.flexRowBetweenCenter, styles.paddingTop4vw]}>
                                <View>
                                    <Lex20BlackAuto style={{ color: 'white' }}>Your Set</Lex20BlackAuto>
                                    <Lex14RegAuto style={{ color: 'white' }}>{!switchSet ? setData.length : 0} set(s)</Lex14RegAuto>
                                </View>
                                <TouchableOpacity
                                    onPress={() => { setSwitchSet(switchSet == 0 ? 1 : 0) }}
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