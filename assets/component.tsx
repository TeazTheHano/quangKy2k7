// system imports
import React, { Component, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, Alert, Share } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";

// style import
import styles from "./stylesheet";
import componentStyle from './componentStyleSheet';
import { vw, vh } from "./stylesheet";
import Svg, { SvgXml } from 'react-native-svg';

// SVG import
import { searchIcon, leftArrow, shareIcon, } from "./svgXml";

// ____________________END OF IMPORT_______________________

let { width, height } = Dimensions.get('window');


export const marginBottomForScrollView = () => {
    return (
        <View style={{ height: vh(5), opacity: 0 }}></View>
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
