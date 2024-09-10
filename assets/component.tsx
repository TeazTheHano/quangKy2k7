// system imports
import React, { Component, ComponentType, ReactElement, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Alert, Share, StatusBar, ImageStyle, Platform, PermissionsAndroid } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";

// style import
import styles from "./stylesheet";
import { vw, vh, vmax, vmin } from './stylesheet';
import Svg, { SvgXml } from 'react-native-svg';

// SVG import
import { goldStar, lockIcon, noStar, peopleIcon, savedIcon, searchIcon, shareIcon, unSavedIcon, } from "./svgXml";
import clrStyle, { componentStyle } from "./componentStyleSheet";
import { Lex10RegAuto, Lex12BoldAuto, Lex12RegAuto, Lex16RegAuto } from "./Class";

// other import
import * as Progress from 'react-native-progress';
import { SetFormat } from "../data/data";
import { RootContext, setAsCurrent } from "../data/store";

// font import 

// ____________________END OF IMPORT_______________________


// UNIVERSE FUNCTION________________________________________

export const marginBottomForScrollView = (time?: number) => {
    return (
        <View style={{ height: vh(time ? 5 * time : 5), opacity: 0 }}></View>
    )
}

export const statusBarTransparency = (lightContent: boolean = true, margin: boolean = false) => {
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
    return (
        <View>
            <StatusBar barStyle={lightContent ? 'light-content' : 'dark-content'}
                backgroundColor='rgba(0,0,0,0)'
                translucent={true}
            />
            {margin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
        </View>
    )
}

// share fnc 

export const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
        Alert.alert(error.message);
    }
};

export const ListGen = (data: string | Array<string | string[]>, FontClass1st: ComponentType<any>, useColor: string = clrStyle.white, FontClass2nd: ComponentType<any> = FontClass1st, bullet1st: string = '1', bullet2nd: string = '-', textIndent2nd: any = 0) => {
    function bulletMark(bullet: string, index: number) {
        let i = index == 0 ? 0 : index % 2 == 0 ? index / 2 : index
        if (bullet === 'a') {
            function abullet(i: number) {
                let charNum = 26, charStart = 97
                let char = String.fromCharCode(charStart + i % charNum)
                if (i >= charNum) {
                    return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                } else {
                    return char + '.'
                }
            }
            return abullet(i)

        } else if (bullet === 'A') {
            function Abullet(i: number) {
                let charNum = 26, charStart = 65
                let char = String.fromCharCode(charStart + i % charNum)
                if (i >= charNum) {
                    return String.fromCharCode(charStart + Math.floor(i / charNum) - 1) + char + '.'
                } else {
                    return char + '.'
                }
            }
            return Abullet(i)

        } else if (bullet === 'I') {
            // make bullet as a roman number
            function Ibullet(i: number) {
                let romanNum = {
                    1: 'I',
                    2: 'II',
                    3: 'III',
                    4: 'IV',
                    5: 'V',
                    6: 'VI',
                    7: 'VII',
                    8: 'VIII',
                    9: 'IX',
                    10: 'X',
                    100: 'C',
                    1000: 'M',
                    500: 'D',
                    50: 'L',
                    5000: 'V',
                }

                let roman = ''
                let num = i + 1
                let romanNumArr = Object.keys(romanNum).map(Number).sort((a, b) => b - a)

            }
            return Ibullet(i)

        } else if (bullet === '1') {
            return i + 1 + '.'

        } else {
            return bullet
        }

    }

    return (
        <View>
            {typeof data == 'string' ?

                <FontClass1st>{data}</FontClass1st>

                : data.map((item, index) => {
                    if (typeof item === 'string') {
                        return (
                            <View key={index} style={[styles.flexRow, styles.w100]}>
                                <FontClass1st style={{ color: useColor }}>{bulletMark(bullet1st, index)} </FontClass1st>
                                <FontClass1st style={{ color: useColor }}>{item}</FontClass1st>
                            </View>
                        )
                    } else if (Array.isArray(item)) {
                        return (
                            <View key={index} style={[styles.w100, { paddingLeft: textIndent2nd }]}>
                                {item.map((subItem, subIndex) => {
                                    return (
                                        <View key={subIndex} style={[styles.flexRow]}>
                                            <FontClass2nd style={{ color: useColor }}>{bulletMark(bullet2nd, subIndex)} </FontClass2nd>
                                            <FontClass2nd style={{ color: useColor }}>{subItem}</FontClass2nd>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    }
                })}
        </View>
    )
}


/**
 * Formats a number by adding suffixes for thousands, millions, and billions.
 * @param num - The number to be formatted.
 * @param changeToChar - Whether to change the number to a character (K, M, B) or not.
 * @returns The formatted number as a string.
 */
export function formatNumber(num: number, changeToChar: boolean = true) {
    if (changeToChar) {
        if (num >= 1_000_000_000) {
            return `${(num / 1_000_000_000).toFixed(2)}B`;
        } else if (num >= 1_000_000) {
            return `${(num / 1_000_000).toFixed(2)}M`;
        } else if (num >= 1_000) {
            return `${(num / 1_000).toFixed(2)}K`;
        } else {
            return num.toString();
        }
    } else {
        return new Intl.NumberFormat('de-DE').format(num);
    }
}

// card

export function imgSourceHandle(address: string) {
    return address.startsWith('http') ? { uri: address } : require(`../assets/image/placeholder.jpeg`)
}

// img picker and camera.
// require >>>> react-native-image-picker <<<< package
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const defaultCameraOptions: CameraOptions = {
    mediaType: 'photo',
    quality: 1,
};

export const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'This app needs camera access to take pictures',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else {
        return true;
    }
};

export const openCamera = async (saveImgFnc: any, options = defaultCameraOptions) => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
        console.log('Camera permission denied');
        return;
    }

    launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
            Alert.alert('Error', response.errorMessage || response.errorCode);
        } else if (response.assets && response.assets.length > 0) {
            saveImgFnc(response.assets[0].uri);
        }
    });
};

export const openGallery = async (saveImgFnc: any, options = defaultCameraOptions) => {
    launchImageLibrary(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
            Alert.alert('Error', response.errorMessage || response.errorCode);
        } else if (response.assets && response.assets.length > 0) {
            saveImgFnc(response.assets[0].uri);
        }
    });
}

// END OF UNIVERSE FUNCTION________________________________________


export function showSetCard(DATA: SetFormat[]) {
    const navigation = useNavigation();
    const [CURRENT_SETS, dispatch] = useContext(RootContext);

    function showRateStar(rate: number) {
        rate = Math.round(rate)
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
        // TODO: Implement this function
        // setSetData(prevItems => prevItems.map((item, index) => {
        //     if (index === itemIndex) {
        //         return { ...item, isSaved: !IS_SAVED };
        //     }
        //     return item;
        // }));
    };

    if (!DATA.length) {
        return (
            <Lex16RegAuto style={{ color: clrStyle.white }}>No set found</Lex16RegAuto>
        )
    } else {
        return (
            <View style={[styles.flexCol, styles.marginVertical4vw, styles.gap4vw]}>
                {
                    DATA.map((set: any, index: number) => {
                        let DESK_NUMBER: number = set.deskList.length
                        let TOTAL_CARD_NEED_MEMORIZED_NUMBER: number = set.deskList.map((item: any) => item.cardList.length).reduce((a: number, b: number) => a + b)
                        let MEMORIZED_CARD_NUMBER: number = set.deskList.map((item: any) => item.cardList.filter((item: any) => item.repeatToday).length).reduce((a: number, b: number) => a + b)
                        let SET_TITLE: string = set.name
                        let NEED_REPEAT_CARD_NUMBER: number = set.deskList.map((item: any) => item.cardList.filter((item: any) => item.repeatToday).length).reduce((a: number, b: number) => a + b)
                        let AUTHOR: string = set.author.name
                        let AUTHOR_IMG_ADDRESS: string = set.author.imgAddress
                        let STAR_RATE: number = set.rate.star
                        let TOTAL_RATE: number = set.rate.total
                        let PUBLIC_SET: boolean = set.private
                        let SAVED_NUMBER: number = set.numberOfSaved
                        let IS_SAVED: boolean = set.isSaved

                        return (
                            <TouchableOpacity key={index}
                                onPress={() => {
                                    dispatch(setAsCurrent(set));
                                    navigation.navigate('SetView' as never);
                                }}>
                                <View style={[styles.flexRowStartCenter, styles.gap1vw, styles.wfit, styles.paddingH4vw, styles.paddingV2vw, { backgroundColor: 'rgba(79, 79, 79, 1)', borderTopLeftRadius: vw(4), borderTopRightRadius: vw(4), transform: [{ translateY: 1 }] }]}>
                                    <Lex12BoldAuto style={{ color: 'white' }}>{DESK_NUMBER} {DESK_NUMBER > 1 ? 'desks' : 'desk'}:</Lex12BoldAuto>
                                    <Progress.Circle
                                        progress={MEMORIZED_CARD_NUMBER / TOTAL_CARD_NEED_MEMORIZED_NUMBER}
                                        strokeCap='round'
                                        showsText={false}
                                        color={clrStyle.neu6}
                                        borderWidth={1}
                                        thickness={vw(0.75)}
                                        size={15}
                                    />
                                    <Lex12BoldAuto style={{ color: clrStyle.neu6 }}>{MEMORIZED_CARD_NUMBER}</Lex12BoldAuto>
                                    <Lex12RegAuto style={{ color: 'white' }}>/ {TOTAL_CARD_NEED_MEMORIZED_NUMBER}</Lex12RegAuto>
                                    <Lex12RegAuto style={{ color: clrStyle.neu6 }}>cards memorized</Lex12RegAuto>
                                </View>
                                <View style={[{ backgroundColor: "rgba(79, 79, 79, 1)", borderRadius: vw(4), borderTopLeftRadius: 0 }]}>
                                    <View style={[styles.padding4vw, { backgroundColor: "rgba(60, 60, 60, 1)", borderRadius: vw(4) }]}>
                                        <Text numberOfLines={1} style={{ fontFamily: 'LexendDeca-Black', fontSize: vw(4), color: 'white' }}>{SET_TITLE}</Text>
                                        <View style={[styles.paddingV1vw, styles.paddingH2vw, styles.borderRadius10, styles.wfit, styles.marginVertical2vw, { backgroundColor: clrStyle.neu6 }]}>
                                            <Lex12BoldAuto>{NEED_REPEAT_CARD_NUMBER} {NEED_REPEAT_CARD_NUMBER > 1 ? 'cards' : 'card'} <Lex12RegAuto>need to repeat today</Lex12RegAuto></Lex12BoldAuto>
                                        </View>
                                        <View style={[styles.flexRowBetweenCenter, styles.marginTop4vw,]}>
                                            <View style={[styles.flexRowStartCenter, styles.gap2vw]}>
                                                <Image
                                                    source={imgSourceHandle(AUTHOR_IMG_ADDRESS)}
                                                    style={[styles.borderRadius100, { width: vw(7), height: vw(7) }] as ImageStyle}
                                                />
                                                <View>
                                                    <Lex10RegAuto style={{ color: 'white' }}>{AUTHOR}</Lex10RegAuto>
                                                    <View style={[styles.flexRowStartCenter, styles.marginTop1vw, { gap: vw(0.25) }]}>
                                                        {showRateStar(STAR_RATE)}
                                                        <Lex10RegAuto style={{ color: 'rgba(255, 255, 255, 1)' }}> ({TOTAL_RATE})</Lex10RegAuto>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.flexRowStartCenter, styles.gap4vw]}>
                                                <View style={[styles.flexRowStartCenter, styles.gap1vw]}>
                                                    {PUBLIC_SET ? lockIcon(vw(4.5), vw(4.5)) : peopleIcon(vw(4.5), vw(4.5))}
                                                    <Lex10RegAuto style={{ color: 'rgba(255, 255, 255, 1)' }}>{PUBLIC_SET ? 'Private' : 'Public'}</Lex10RegAuto>
                                                </View>
                                                {PUBLIC_SET ? null :
                                                    <View style={[styles.flexRowStartCenter, styles.gap1vw]}>
                                                        <Lex10RegAuto style={{ color: 'rgba(255, 255, 255, 1)' }}>{SAVED_NUMBER} saved</Lex10RegAuto>
                                                        <TouchableOpacity
                                                            onPress={() => { handlePressSave(index) }}
                                                        >
                                                            {IS_SAVED ? savedIcon(vw(4.5), vw(4.5)) : unSavedIcon(vw(4.5), vw(4.5))}
                                                        </TouchableOpacity>
                                                    </View>
                                                }
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        )
    }
}