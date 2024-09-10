// system import
import React, { Component } from 'react';
import { ImageBackground, Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, Image, ImageStyle } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh } from './stylesheet';

// component import
import { imgSourceHandle, marginBottomForScrollView } from './component';

// svg import
import { cameraIcon, goldStar, imgPickerIcon, inVisibilityIcon, leftArrow, lockIcon, noStar, peopleIcon, savedIcon, searchIcon, unSavedIcon, visibilityIcon } from './svgXml';
import clrStyle from './componentStyleSheet';

// other import


// ____________________END OF IMPORT_______________________

// ____________________START OF UNIVERSAL CLASS_______________________


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

// ____________________END OF UNIVERSAL CLASS_______________________

// ____________________START OF FONT_______________________
export class Pay32BlackLine40 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(8), lineHeight: vw(10), }, style]}>
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

export class Pay28BlackLine122 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(7), lineHeight: vw(7 / 100 * 122), color: 'black' }, style]}>
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

export class Pay24BlackLine122 extends Component<{ children: React.ReactNode, style?: any, lineNum?: number }> {
    render() {
        const { children, style, lineNum } = this.props;

        return (
            <Text numberOfLines={lineNum} style={[{ fontFamily: 'PaytoneOne-Regular', fontSize: vw(6), lineHeight: vw(6 / 100 * 122), color: 'black' }, style]}>
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

export class Lex16RegAuto extends Component<{ children: React.ReactNode, style?: any, lineNum?: number }> {
    render() {
        const { children, style, lineNum } = this.props;

        return (
            <Text numberOfLines={lineNum} style={[{ fontFamily: 'LexendDeca-Regular', fontSize: vw(4), color: 'black' }, style]}>
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

export class SSBar extends Component<{ color?: any }> {
    render(): React.ReactNode {
        let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0
        return (
            <>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor={this.props.color ? this.props.color : 'black'} />
                {Platform.OS === 'android' ? <View style={{ height: statusBarHeight / 2 }}></View> : null}
            </>
        )
    }
}


export class InputCardVer1 extends Component<{
    customStyle?: any
    value: any
    onChangeText: (input: any) => void
    hideContent?: boolean,
    hideContentFnc?: (value: boolean) => void,
    textContentType?: string | undefined
    title?: string
    placeholder?: string
    titleColor?: string
    placeholderColor?: string
    valueColor?: string
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
}> {
    render() {
        const { customStyle, onChangeText, value, hideContent, hideContentFnc, textContentType, title, placeholder, titleColor, placeholderColor, valueColor, autoCapitalize } = this.props;
        let type: string = textContentType ? textContentType : "none"

        return (
            <View
                style={[styles.w100, styles.padding2vw, styles.flexRow, styles.alignItemsCenter, styles.borderRadius2vw, styles.marginBottom4vw, { borderWidth: 1, borderColor: 'rgba(0,0,0,1)' }, customStyle]} >
                {title ?
                    <Lex16MedAuto style={[styles.paddingH4vw, { color: titleColor ? titleColor : clrStyle.black }]}>{title}:</Lex16MedAuto>
                    : null}
                <TextInput
                    onChangeText={onChangeText}
                    autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                    placeholder={placeholder ? placeholder : ''}
                    placeholderTextColor={placeholderColor ? placeholderColor : clrStyle.grey2}
                    secureTextEntry={hideContent ? hideContent : false}
                    passwordRules={type === 'password' ? "minlength: 6; maxlength: 10" : ''}
                    textContentType={type as "none"}
                    maxLength={type === 'password' ? 10 : 100}
                    style={[styles.flex1, styles.padding1vw,]}
                ><Lex16RegAuto style={[styles.flex1]}>{value}</Lex16RegAuto></TextInput>
                {hideContentFnc ?
                    <TouchableOpacity
                        onPress={() => { hideContentFnc && hideContentFnc(!hideContent) }}
                        style={[{ paddingRight: vw(2) }]}>
                        {hideContent ? inVisibilityIcon(vw(6), vw(6)) : visibilityIcon(vw(6), vw(6))}
                    </TouchableOpacity>
                    : null}
            </View>
        )
    }
}

export class TopNav1 extends Component<{
    title: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    leftIconFnc?: () => void
    rightIconFnc?: () => void
    returnPreScreen?: boolean
    returnPreScreenFnc?: () => void
    textCenter?: boolean
}> {
    render() {
        let { title, leftIcon, rightIcon, returnPreScreen, rightIconFnc, leftIconFnc, returnPreScreenFnc, textCenter } = this.props
        return (
            <View style={[styles.w100, styles.padding4vw, styles.paddingH8vw, { backgroundColor: clrStyle.pur2, borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6) }]}>
                <View style={[styles.w100, styles.flexRowBetweenCenter]}>
                    {returnPreScreen ?
                        <TouchableOpacity
                            style={[styles.padding2vw]}
                            onPress={returnPreScreenFnc}>
                            {leftArrow(vw(6), vw(6), 'black')}
                        </TouchableOpacity>
                        :
                        leftIcon ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={leftIconFnc}>
                                {leftIcon}
                            </TouchableOpacity>
                            :
                            <></>
                    }
                    <Pay28BlackLine122 style={[styles.flex1, textCenter ? styles.textCenter : null,]}>{title}</Pay28BlackLine122>
                    {rightIcon ?
                        <TouchableOpacity
                            style={[styles.padding2vw]}
                            onPress={rightIconFnc}>
                            {rightIcon}
                        </TouchableOpacity>
                        : <></>
                    }
                </View>
            </View>
        )
    }
}


/**
 * Represents a custom top navigation component.
 *
 * @component
 * @example
 * ```tsx
 * <TopNav2
 *   title="My Title"
 *   subTitle="My Subtitle"
 *   textColor="#000000"
 *   leftIcon={<Icon name="left" />}
 *   rightIcon={<Icon name="right" />}
 *   leftIconFnc={() => handleLeftIconClick()}
 *   rightIconFnc={() => handleRightIconClick()}
 *   returnPreScreen={true}
 *   returnPreScreenFnc={() => handleReturnPreScreen()}
 *   textCenter={true}
 *   containerStyle={customStyle}
 * >
 *   {children}
 * </TopNav2>
 * ```
 */
export class TopNav2 extends Component<{
    children?: React.ReactNode
    title?: string
    subTitle?: string
    textColor?: string
    leftIcon?: React.JSX.Element
    rightIcon?: React.JSX.Element
    leftIconFnc?: () => void
    rightIconFnc?: () => void
    returnPreScreen?: boolean
    returnPreScreenFnc?: () => void
    textCenter?: boolean
    containerStyle?: any
    backGoundImage?: string
    darken?: number
}> {
    render() {
        let { title, leftIcon, rightIcon, returnPreScreen, rightIconFnc, leftIconFnc, returnPreScreenFnc, textCenter, children, subTitle, textColor, containerStyle, backGoundImage, darken } = this.props
        darken = darken ? darken : 0
        return (
            <ImageBackground source={backGoundImage ? imgSourceHandle(backGoundImage) : null} style={[styles.overflowHidden, { borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }]}>
                <View style={[styles.w100, styles.padding4vw, styles.paddingH8vw, { backgroundColor: `rgba(0,0,0,${darken})` }, containerStyle]}>
                    <View style={[styles.w100, styles.flexRowBetweenCenter]}>
                        {returnPreScreen ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={returnPreScreenFnc}>
                                {leftArrow(vw(6), vw(6), textColor ? textColor : clrStyle.black)}
                            </TouchableOpacity>
                            :
                            leftIcon ?
                                <TouchableOpacity
                                    style={[styles.padding2vw]}
                                    onPress={leftIconFnc}>
                                    {leftIcon}
                                </TouchableOpacity>
                                :
                                <></>
                        }
                        <Pay24BlackLine122 lineNum={1} style={[styles.flex1, textCenter ? styles.textCenter : null, { color: textColor ? textColor : clrStyle.black }]}>{title ? title : ''}</Pay24BlackLine122>
                        {rightIcon ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={rightIconFnc}>
                                {rightIcon}
                            </TouchableOpacity>
                            : <></>
                        }
                    </View>
                    {subTitle ? <Pay20BlackLine122 style={[styles.paddingV2vw, { color: textColor ? textColor : clrStyle.black }]}>{subTitle}</Pay20BlackLine122> : null}
                    {children}
                </View>
            </ImageBackground>
        )
    }
}

export class TopNav3 extends Component<{
    children?: React.ReactNode
    title?: string
    subTitle?: string
    textColor?: string
    leftText?: string
    rightText?: string
    leftFnc?: () => void
    rightFnc?: () => void
    TextClass?: React.ComponentType<any>
    sideColor?: string
    containerStyle?: any
    backGoundImage?: string
    darken?: number
}> {
    render() {
        let { title, leftText, rightText, sideColor, TextClass, rightFnc, leftFnc, children, subTitle, textColor, containerStyle, backGoundImage, darken } = this.props
        darken = darken ? darken : 0
        return (
            <ImageBackground source={backGoundImage ? imgSourceHandle(backGoundImage) : null} style={[styles.overflowHidden, { borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }]}>
                <View style={[styles.w100, styles.padding4vw, styles.paddingH8vw, { backgroundColor: `rgba(0,0,0,${darken})` }, containerStyle]}>
                    <View style={[styles.w100, styles.flexRowBetweenCenter]}>
                        <TouchableOpacity
                            style={[styles.paddingV2vw]}
                            onPress={leftFnc}>
                            {TextClass ?
                                <TextClass style={{ color: sideColor ? sideColor : 'white' }}>{leftText}</TextClass>
                                : <Text style={{ color: sideColor ? sideColor : 'white' }}>{leftText}</Text>
                            }
                        </TouchableOpacity>
                        <Pay24BlackLine122 lineNum={1} style={[styles.flex1, styles.textCenter, { color: textColor ? textColor : clrStyle.black }]}>{title ? title : ''}</Pay24BlackLine122>
                        <TouchableOpacity
                            style={[styles.paddingV2vw]}
                            onPress={rightFnc}>
                            {TextClass ?
                                <TextClass style={{ color: sideColor ? sideColor : 'white' }}>{rightText}</TextClass>
                                : <Text style={{ color: sideColor ? sideColor : 'white' }}>{rightText}</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    {subTitle ? <Pay20BlackLine122 style={[styles.paddingV2vw, { color: textColor ? textColor : clrStyle.black }]}>{subTitle}</Pay20BlackLine122> : null}
                    {children}
                </View>
            </ImageBackground>
        )
    }
}

export class TopNavLib extends Component<{
    children?: React.ReactNode
    title?: string
    subTitle?: string
    textColor?: string
    leftIcon?: React.JSX.Element
    rightIcon?: React.JSX.Element
    leftIconFnc?: () => void
    rightIconFnc?: () => void
    returnPreScreen?: boolean
    returnPreScreenFnc?: () => void
    textCenter?: boolean
    containerStyle?: any
    darken?: number
}> {
    render() {
        let { title, leftIcon, rightIcon, returnPreScreen, rightIconFnc, leftIconFnc, returnPreScreenFnc, textCenter, children, subTitle, textColor, containerStyle, darken } = this.props
        darken = darken ? darken : 0
        return (
            <ImageBackground source={require(`../assets/image/topNav.png`)} style={[styles.overflowHidden, { borderBottomLeftRadius: vw(6), borderBottomRightRadius: vw(6), }]}>
                <View style={[styles.w100, styles.padding4vw, styles.paddingH8vw, { backgroundColor: `rgba(0,0,0,${darken})` }, containerStyle]}>
                    <View style={[styles.w100, styles.flexRowBetweenCenter]}>
                        {returnPreScreen ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={returnPreScreenFnc}>
                                {leftArrow(vw(6), vw(6), textColor ? textColor : clrStyle.black)}
                            </TouchableOpacity>
                            :
                            leftIcon ?
                                <TouchableOpacity
                                    style={[styles.padding2vw]}
                                    onPress={leftIconFnc}>
                                    {leftIcon}
                                </TouchableOpacity>
                                :
                                <></>
                        }
                        <Pay24BlackLine122 lineNum={1} style={[styles.flex1, textCenter ? styles.textCenter : null, { color: textColor ? textColor : clrStyle.black }]}>{title ? title : ''}</Pay24BlackLine122>
                        {rightIcon ?
                            <TouchableOpacity
                                style={[styles.padding2vw]}
                                onPress={rightIconFnc}>
                                {rightIcon}
                            </TouchableOpacity>
                            : <></>
                        }
                    </View>
                    {subTitle ? <Pay20BlackLine122 style={[styles.paddingV2vw, { color: textColor ? textColor : clrStyle.black }]}>{subTitle}</Pay20BlackLine122> : null}
                    {children}
                </View>
            </ImageBackground>
        )
    }
}

export class Card2line extends Component<{
    customStyle?: any
    text1: string
    text2: string
    textColor1?: string
    textColor2?: string
    TextClass1?: React.ComponentType<any>
    TextClass2?: React.ComponentType<any>
    bgColor?: string
    border?: boolean
    borderClr?: string
    onPress?: () => void
    rightIcon?: React.JSX.Element
    rightIconFnc?: () => void
}> {
    render() {
        const { customStyle, text1, text2, textColor1, textColor2, TextClass1, TextClass2, bgColor, border, borderClr, onPress, rightIcon, rightIconFnc } = this.props;
        let Text1 = TextClass1 ? TextClass1 : Lex16RegAuto
        let Text2 = TextClass2 ? TextClass2 : Pay20BlackLine122

        return (
            <TouchableOpacity
                onPress={() => { onPress && onPress() }}
                disabled={onPress ? false : true}
                style={[styles.paddingV3vw, styles.paddingH4vw, styles.flexRowBetweenCenter, styles.borderRadius2vw, { backgroundColor: bgColor, borderWidth: border ? 1 : 0, borderColor: borderClr ? borderClr : 'black' }, customStyle]}>
                <View style={[styles.flexCol, styles.gap1vw, styles.flex1]}>
                    <Text1 style={[{ color: textColor1 ? textColor1 : clrStyle.black }]}>{text1}</Text1>
                    <Text2 style={[{ color: textColor2 ? textColor2 : clrStyle.black }]}>{text2}</Text2>
                </View>
                {rightIcon ?
                    <TouchableOpacity
                        style={[styles.paddingLeft2vw]}
                        disabled={rightIconFnc ? false : true}
                        onPress={() => { rightIconFnc && rightIconFnc() }}>
                        {rightIcon}
                    </TouchableOpacity>
                    : <></>
                }
            </TouchableOpacity>
        );
    }
}

export class Card2lineInput extends Component<{
    customStyle?: any
    text1: string
    textColor1?: string
    textColor2?: string
    TextClass1?: React.ComponentType<any>
    TextClass2?: React.ComponentType<any>
    value2?: string
    placeholder2?: string
    textLimit2?: number
    onChangeText2?: (input: any) => void
    bgColor?: string
    border?: boolean
    borderClr?: string
    onPress?: () => void
    rightIcon?: React.JSX.Element
    rightIconFnc?: () => void
    isEdit?: boolean
}> {
    render() {
        const { customStyle, text1, value2, onChangeText2, textColor1, textColor2, TextClass1, TextClass2, bgColor, border, borderClr, onPress, rightIcon, rightIconFnc, isEdit, placeholder2, textLimit2 } = this.props;
        let Text1 = TextClass1 ? TextClass1 : Lex16RegAuto
        let Text2 = TextClass2 ? TextClass2 : Pay20BlackLine122

        return (
            <TouchableOpacity
                onPress={() => { onPress && onPress() }}
                disabled={onPress ? false : true}
                style={[styles.padding3vw, styles.flexRowBetweenCenter, styles.borderRadius2vw, { backgroundColor: bgColor, borderWidth: border ? 1 : 0, borderColor: borderClr ? borderClr : 'black' }, customStyle]}>
                <View style={[styles.flexCol, styles.gap1vw, styles.flex1]}>
                    <Text1 style={[styles.paddingH1vw, { color: textColor1 ? textColor1 : clrStyle.black }]}>{text1}</Text1>
                    <TextInput
                        editable={isEdit !== undefined ? isEdit : true}
                        onChangeText={onChangeText2}
                        placeholder={placeholder2 ? placeholder2 : ''}
                        placeholderTextColor={clrStyle.neu3}
                        multiline
                        maxLength={textLimit2 ? textLimit2 : 10000}
                        style={[styles.flex1, styles.borderRadius10, styles.padding1vw, { borderColor: isEdit === true ? clrStyle.neu3 : 'rgba(0,0,0,0)', borderWidth: 1, backgroundColor: isEdit === true ? clrStyle.white : 'rgba(0,0,0,0)' }]}>
                        <Text2 style={[styles.flex1, styles.flexWrap, { color: textColor2 ? textColor2 : clrStyle.black, }]}>{value2}</Text2>
                    </TextInput>
                </View>
                {rightIcon ?
                    <TouchableOpacity
                        style={[styles.padding2vw]}
                        disabled={rightIconFnc ? false : true}
                        onPress={() => { rightIconFnc && rightIconFnc() }}>
                        {rightIcon}
                    </TouchableOpacity>
                    : <></>
                }
            </TouchableOpacity>
        );
    }
}

export class Card3lineInputImg extends Component<{
    customStyle?: any
    text1: string
    textColor1?: string
    textColor2?: string
    TextClass1?: React.ComponentType<any>
    TextClass2?: React.ComponentType<any>
    value2?: string
    placeholder2?: string
    textLimit2?: number
    onChangeText2?: (input: any) => void
    bgColor?: string
    border?: boolean
    borderClr?: string
    onPress1?: () => void
    onPress2?: () => void
    onPress3?: () => void
    isEdit?: boolean
    photoAddress?: string | null
}> {
    render() {
        const { customStyle, text1, value2, onChangeText2, onPress1, onPress2, onPress3, textColor1, textColor2, TextClass1, TextClass2, bgColor, border, borderClr, isEdit, placeholder2, textLimit2, photoAddress } = this.props;
        let Text1 = TextClass1 ? TextClass1 : Lex16RegAuto
        let Text2 = TextClass2 ? TextClass2 : Pay20BlackLine122

        return (
            <View style={[styles.padding3vw, styles.flexCol, styles.gap2vw, styles.borderRadius2vw, styles.w100, { backgroundColor: bgColor, borderWidth: border ? 1 : 0, borderColor: borderClr ? borderClr : 'black' }, customStyle]}>
                <Text1 style={[styles.paddingH1vw, styles.flex1, { color: textColor1 ? textColor1 : clrStyle.black }]}>{text1}</Text1>
                <TextInput
                    editable={isEdit !== undefined ? isEdit : true}
                    onChangeText={onChangeText2}
                    placeholder={placeholder2 ? placeholder2 : ''}
                    placeholderTextColor={clrStyle.neu3}
                    multiline
                    maxLength={textLimit2 ? textLimit2 : 10000}
                    style={[styles.flex1, styles.borderRadius10, styles.padding1vw, { borderColor: isEdit === true ? clrStyle.neu3 : 'rgba(0,0,0,0)', borderWidth: 1, backgroundColor: isEdit === true ? clrStyle.white : 'rgba(0,0,0,0)' }]}>
                    <Text2 style={[{ color: textColor2 ? textColor2 : clrStyle.black }]}>{value2}</Text2>
                </TextInput>
                <Text1 style={[styles.paddingH1vw, styles.flex1, { color: textColor1 ? textColor1 : clrStyle.black }]}>Add photo</Text1>
                <TouchableOpacity
                    onPress={() => { onPress3 && onPress3() }}
                    disabled={onPress3 && photoAddress && isEdit ? false : true}
                    style={[styles.borderRadius10, styles.flexRowCenter, styles.h30vh, styles.overflowHidden, { backgroundColor: '#86DFD033' }]}
                >
                    {photoAddress ?
                        <Image
                            style={[styles.w100, styles.h100] as ImageStyle}
                            source={{ uri: photoAddress }}
                        />
                        :
                        <View
                            style={[styles.w100, styles.h100, styles.flexRowCenter, styles.gap1vw]}
                        >
                            <TouchableOpacity
                                onPress={() => { onPress1 && onPress1() }}
                                disabled={onPress1 && isEdit ? false : true}
                                style={[styles.flexRowCenter, styles.w40, styles.h50]}>
                                {imgPickerIcon(vw(20), vw(20))}
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { onPress2 && onPress2() }}
                                disabled={onPress2 && isEdit ? false : true}
                                style={[styles.flexRowCenter, styles.w40, styles.h50]}>
                                {cameraIcon(vw(15), vw(15))}
                            </TouchableOpacity>
                        </View>
                    }
                </TouchableOpacity>
            </View>
        );
    }
}

export class RoundBtn extends Component<{
    icon?: React.ReactNode
    title?: string
    onPress: () => void
    bgColor?: string
    textClass?: React.ComponentType<any>
    textColor?: string
    iconColor?: string
    border?: boolean
    borderColor?: string
    customStyle?: any
}> {
    render() {
        const { icon, title, onPress, bgColor, textClass, textColor, iconColor, border, borderColor, customStyle } = this.props;
        let TextClass = textClass ? textClass : Lex16RegAuto
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.flex1, styles.flexRowCenter, styles.paddingV3vw, styles.paddingH4vw, styles.borderRadius10, styles.overflowHidden, { backgroundColor: bgColor ? bgColor : undefined, borderWidth: border ? 1 : 0 }]}>
                {icon ? icon : null}
                <TextClass style={[styles.padding2vw, { color: textColor ? textColor : clrStyle.black }]}>{title}</TextClass>
            </TouchableOpacity>
        );
    }
}