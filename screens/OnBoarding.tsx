// system import
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, Animated, Easing, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// style import
import styles from '../assets/stylesheet';
import { Lex16RegAuto, Lex18RegAuto, Lex20BlackAuto, Pay32BlackLine40 } from '../assets/Class';
import componentStyleSheet from '../assets/componentStyleSheet';

import { SvgXml } from 'react-native-svg';
import { vw, vh } from 'react-native-expo-viewport-units';

function useColorWidthAnimation() {
    const animation = useRef(new Animated.Value(0)).current;

    const backgroundColorAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [componentStyleSheet.neu2 as string, 'white']
    });

    const widthAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [vw(2), vw(8)]
    });

    return { animation, backgroundColorAnimation, widthAnimation };
}

export default function OnBoarding() {
    const navigation = useNavigation();

    const [currentOnboarding, setCurrentOnboarding] = useState<number>(0);

    const { animation: animation1, backgroundColorAnimation: backgroundColorAnimation1, widthAnimation: widthAnimation1 } = useColorWidthAnimation();
    const { animation: animation2, backgroundColorAnimation: backgroundColorAnimation2, widthAnimation: widthAnimation2 } = useColorWidthAnimation();
    const { animation: animation3, backgroundColorAnimation: backgroundColorAnimation3, widthAnimation: widthAnimation3 } = useColorWidthAnimation();

    /**
     * 
     * @param direction : 0 for shrink, 1 for expand
     */
    const dotAnimation = (animation: Animated.Value | Animated.ValueXY, direction: number) => {
        Animated.timing(animation, {
            toValue: direction,
            duration: 300,
            easing: Easing.sin,
            useNativeDriver: false
        }).start();
    };

    useEffect(() => {
        if (currentOnboarding == 0) {
            doImageAnimaton();
            dotAnimation(animation1, 1);
            dotAnimation(animation2, 0);
        }
        else if (currentOnboarding == 1) {
            doImageAnimaton();
            dotAnimation(animation1, 0);
            dotAnimation(animation2, 1);
            dotAnimation(animation3, 0);
        }
        else {
            doImageAnimaton();
            dotAnimation(animation2, 0);
            dotAnimation(animation3, 1);
        }

    }, [currentOnboarding]);

    const imageAnimation = useRef(new Animated.Value(0)).current;

    const imageTranslateX = imageAnimation.interpolate({
        inputRange: [1, 2, 3],
        outputRange: [0, -vw(100), -vw(200)]
    });

    const doImageAnimaton = () => {
        Animated.timing(imageAnimation, {
            toValue: currentOnboarding,
            duration: 300,
            easing: Easing.sin,
            useNativeDriver: true
        }).start();
    }

    const onBoardingImages = [
        require('../assets/image/onboarding/Onboard1.png'),
        require('../assets/image/onboarding/Onboard2.png'),
        require('../assets/image/onboarding/Onboard3.png'),
    ];

    let onBoardingContent = (index: number) => {
        return (
            index == 0 ?
                <View style={[styles.flexCol, styles.gap4vw, styles.w90, styles.alignSelfCenter, styles.positionAbsolute, { top: vh(60) }]}>
                    <Pay32BlackLine40 style={[styles.textCenter, { color: componentStyleSheet.neu4 }]}>Ghi chú</Pay32BlackLine40>
                    <Lex18RegAuto style={[styles.textCenter, { color: 'white' }]}>Ghi chú, take note lại tất cả những kiến thức muốn ghi nhớ của riêng bạn</Lex18RegAuto>
                </View>
                :
                index == 1 ?
                    <View style={[styles.flexCol, styles.gap4vw, styles.w90, styles.alignSelfCenter, styles.positionAbsolute, { top: vh(60) }]}>
                        <Pay32BlackLine40 style={[styles.textCenter, { color: componentStyleSheet.neu4 }]}>Học tập</Pay32BlackLine40>
                        <Lex18RegAuto style={[styles.textCenter, { color: 'white' }]}>Nhắc nhở lặp lại, tự kiểm tra và theo dõi tiến độ, kết quả học tập</Lex18RegAuto>
                    </View>
                    :
                    <View style={[styles.flexCol, styles.gap4vw, styles.w90, styles.alignSelfCenter, styles.positionAbsolute, { top: vh(60) }]}>
                        <Lex18RegAuto style={[styles.textCenter, { color: 'white', fontSize: vw(8) }]}>Học tập, ghi nhớ
                            <Lex20BlackAuto style={{ color: 'rgba(134, 223, 208, 1)', fontSize: vw(8) }}> dễ dàng</Lex20BlackAuto> hơn mỗi ngày với <Lex18RegAuto style={[styles.textCenter, { color: 'rgba(134, 223, 208, 1)', fontSize: vw(8) }]}>Flashcard</Lex18RegAuto></Lex18RegAuto>
                    </View>
        )
    }

    const gesture = () => {
        let startX: Number; // Declare and initialize startX here

        return (
            <View
                style={[styles.flex1]}
                onTouchStart={(event) => {
                    startX = event.nativeEvent.pageX; // Initialize startX on touch start
                    // setIsSwipe(0);
                }}
                onTouchEnd={(event) => {
                    // Calculate the difference between starting and ending positions
                    const endX = event.nativeEvent.pageX;
                    const direction = Number(endX) - Number(startX);

                    // Adjust the threshold for detecting a left swipe
                    if (direction < -50) { // Adjust the threshold value to your preference
                        // Left swipe
                        if (currentOnboarding < 2) {
                            setCurrentOnboarding(currentOnboarding + 1);
                        }
                    } else if (direction > 0) {
                        // Right swipe
                        if (currentOnboarding > 0) {
                            setCurrentOnboarding(currentOnboarding - 1);
                        }
                    }
                }}
            >
                <View style={[styles.flex1, styles.flexColStartCenter]}>
                    <View style={[styles.positionRelative, styles.flex1,]}>
                        <View style={[styles.flexRow,]}>
                            {onBoardingImages.map((item, index) => (
                                <Animated.Image
                                    key={index}
                                    source={item}
                                    style={[styles.w100vw, styles.h100vh, { transform: [{ translateX: imageTranslateX }] }]}
                                    resizeMode='cover'
                                />
                            ))
                            }
                        </View>
                        {onBoardingContent(currentOnboarding)}
                    </View>
                </View>

                <View style={[styles.marginHorizontal8vw, styles.flexColBetweenCenter, styles.gap4vw, styles.positionAbsolute, styles.paddingTop4vw, { bottom: vw(4) }]}>
                    <View style={[styles.flexRowBetweenCenter, styles.w100]}>
                        <View style={[styles.flexRowCenter, styles.gap1vw]}>
                            <Animated.View style={{ width: widthAnimation1, height: vw(2), borderRadius: vw(2), backgroundColor: backgroundColorAnimation1 }}>
                            </Animated.View>
                            <Animated.View style={{ width: widthAnimation2, height: vw(2), borderRadius: vw(2), backgroundColor: backgroundColorAnimation2 }}>
                            </Animated.View>
                            <Animated.View style={{ width: widthAnimation3, height: vw(2), borderRadius: vw(2), backgroundColor: backgroundColorAnimation3 }}>
                            </Animated.View>
                        </View>
                        {/* TODO: navigation to login later */}
                        <TouchableOpacity
                            onPress={() => {
                                currentOnboarding < 2 ? setCurrentOnboarding(currentOnboarding + 1) : navigation?.navigate('Tab' as never);
                            }}
                            style={[styles.flexRowCenter, styles.gap1vw, styles.paddingV4vw, styles.paddingH8vw, styles.borderRadius40, { backgroundColor: 'rgba(134, 223, 208, 1)' }]}>
                            <Lex16RegAuto>Tiếp</Lex16RegAuto>
                            <SvgXml xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8228 4.44727L15.3753 8.99977L10.8228 13.5523" stroke="#0A0A0A" style="stroke:#0A0A0A;stroke:color(display-p3 0.0392 0.0392 0.0392);stroke-opacity:1;" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.625 9H15.2475" stroke="#0A0A0A" style="stroke:#0A0A0A;stroke:color(display-p3 0.0392 0.0392 0.0392);stroke-opacity:1;" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            `} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: '#0A0A0A' }]}>
            {gesture()}
        </SafeAreaView>
    )
}