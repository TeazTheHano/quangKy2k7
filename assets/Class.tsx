// system import
import React, { Component, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, useColorScheme, TouchableOpacity, ImageBackground, Image, Animated, } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";

// component import
import { marginBottomForScrollView } from './component';

// svg import
import { searchIcon } from './svgXml';

// ____________________END OF IMPORT_______________________

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