// system import
import React, { Component, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, useColorScheme, TouchableOpacity, ImageBackground, Image, Animated, StatusBar, Platform, ImageStyle, } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh } from './stylesheet';

// component import
import { marginBottomForScrollView } from './component';

// svg import
import { goldStar, lockIcon, noStar, peopleIcon, savedIcon, searchIcon, unSavedIcon } from './svgXml';
import { SafeAreaView } from 'react-native-safe-area-context';

// other import


// ____________________END OF IMPORT_______________________

// UNIVESAL CLASS SECTION


/**
 * Component that renders a view with a colored status bar.
 *
 * @component
 * @example
 * // Usage:
 * <SaveViewWithColorStatusBar
 *   StatusBarColor="#FF0000"
 *   StatusBarLightContent={true}
 *   SameColorBottom={true}
 *   StatusBarMargin={true}
 *   bgColor="#FFFFFF"
 *   StatusBarTranslucent={false}
 * >
 *   // Content goes here
 * </SaveViewWithColorStatusBar>
 *
 * @param {React.ReactNode} children - The content to be rendered inside the component.
 * @param {string} StatusBarColor - The color of the status bar.
 * @param {boolean} StatusBarLightContent - Determines if the status bar content should be light or dark.
 * @param {boolean} SameColorBottom - Determines if the bottom of the view should have the same color as the status bar.
 * @param {boolean} StatusBarMargin - Determines if a margin should be added to the top of the view to accommodate the status bar.
 * @param {string} bgColor - The background color of the view.
 * @param {boolean} StatusBarTranslucent - Determines if the status bar should be translucent.
 *
 * @returns {React.ReactNode} The rendered component.
 */
export class SaveViewWithColorStatusBar extends Component<{ children?: React.ReactNode, StatusBarColor?: string, StatusBarLightContent?: boolean, SameColorBottom?: boolean, StatusBarMargin?: boolean, bgColor?: string, StatusBarTranslucent?: boolean }> {
    render() {
        const { children, bgColor, SameColorBottom, StatusBarColor, StatusBarLightContent, StatusBarMargin, StatusBarTranslucent } = this.props;
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <SafeAreaView style={[styles.flex1, { backgroundColor: SameColorBottom ? StatusBarColor : bgColor }]}>
                {StatusBarColor ? <View style={[styles.w100vw, styles.h50vh, styles.positionAbsolute, { backgroundColor: StatusBarColor }]} /> : null}
                <View>
                    <StatusBar barStyle={StatusBarLightContent ? 'light-content' : 'dark-content'}
                        backgroundColor={StatusBarColor ? StatusBarColor : 'rgba(0,0,0,0)'}
                        translucent={StatusBarTranslucent ? true : false}
                    />
                    {StatusBarMargin ? <View style={{ width: vw(100), height: statusBarHeight }}></View> : null}
                </View>
                <View style={[styles.flex1, { backgroundColor: bgColor ? bgColor : 'rgb(242,242,242)' }]}>
                    {children}
                </View>
            </SafeAreaView>
        )
    }
}

// FONT SECTION
export class Pay32BlackLine40 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(8), lineHeight: vw(10), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Pay20BlackLine122 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(5), lineHeight: vw(5 / 100 * 122), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Pay16BlackLine122 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(4), lineHeight: vw(4 / 100 * 122), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Pay24BlackLine122 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(6), lineHeight: vw(6 / 100 * 122), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Pay16RegAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(4), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex16MedAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Medium', fontSize: vw(4), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex16RegAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Regular', fontSize: vw(4), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex14RegAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Regular', fontSize: vw(3.5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex10RegAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Regular', fontSize: vw(2.5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex12RegAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Regular', fontSize: vw(3), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex18RegAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Regular', fontSize: vw(4.5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex20RegAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Regular', fontSize: vw(5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex16BlackAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Black', fontSize: vw(4), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex20BlackAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Black', fontSize: vw(5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex10BoldAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Bold', fontSize: vw(2.5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex12BoldAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Bold', fontSize: vw(3), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex14BoldAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Bold', fontSize: vw(3.5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex16BoldAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Bold', fontSize: vw(4), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex20BoldAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Bold', fontSize: vw(5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex28BoldAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Bold', fontSize: vw(7), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex8ThinAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Thin', fontSize: vw(2), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex8LightAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Light', fontSize: vw(2), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}


export class Lex14BlackAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Black', fontSize: vw(3.5), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

export class Lex8BoldAuto extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'LexendDeca-Bold', fontSize: vw(2), color: 'black' }, style]}>
                {children}
            </Text>
        );
    }
}

// ____________________END OF FONT_______________________

export class SSBar extends Component {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor={'black'} />
                {Platform.OS === 'android' ? <View style={{ height: statusBarHeight / 2 }}></View> : null}
            </>
        )
    }
}

