import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { InputCardVer1, Lex16MedAuto, Lex16RegAuto, Pay20BlackLine122, Pay28BlackLine122, SaveViewWithColorStatusBar, SSBar, TopNav1 } from '../assets/Class'
import styles, { vw } from '../assets/stylesheet'
import clrStyle from '../assets/componentStyleSheet'
import { SvgXml } from 'react-native-svg'
import { getUser, saveUser } from '../data/storageFunc'
import { useNavigation } from '@react-navigation/native'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User } from "firebase/auth";

export default function Login() {
    const navigation = useNavigation()
    const auth = getAuth()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [userName, setUserName] = React.useState('')
    // TODO: change and make fnc to upload image
    const [avtURL, setAvtURL] = React.useState("https://cdn.oneesports.gg/cdn-data/2024/07/ZenlessZoneZero_Agent_EllenJoe.jpg")

    const [isShowSignUp, setIsShowSignUp] = React.useState(true)
    const [isHidePassword, setIsHidePassword] = React.useState(true)

    function showPass() {
        setIsHidePassword(!isHidePassword)
    }


    async function signUpHandle(email: string, password: string, confirmPassword: string, userName: string, avtURL: string) {
        email = email.trim()
        password = password.trim()
        confirmPassword = confirmPassword.trim()
        userName = userName.trim()

        if (password !== confirmPassword) {
            return Alert.alert('Password and Confirm Password not match')
        }
        if (email === '' || password === '' || confirmPassword === '' || userName === '') {
            return Alert.alert('Please fill all the form')
        }
        if (password.length < 8) {
            return Alert.alert('Password must be at least 8 characters')
        }
        if (!email.includes('@')) {
            return Alert.alert('Email must contain "@"')
        }
        try {
            // TODO: firebase auth
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    let user = auth.currentUser;
                    if (user) {
                        updateProfile(user, {
                            displayName: userName,
                            photoURL: avtURL,
                        })
                            .then(() => {
                                console.log("User profile updated.");
                            })
                            .catch((error) => {
                                console.error("Error updating profile:", error);
                            });
                    }
                })
                .then(() => {
                    saveUser({
                        email: email,
                        name: userName,
                        password: password,
                        savedSet: [],
                        doneSet: [],
                        createdSet: [],
                        imgAddress: avtURL
                    })
                })
                .then(() => {
                    return navigation.navigate('BottomTab' as never)
                })

        } catch (error) {
            console.log(error)
        }
    }

    async function signInHandle(email: string, password: string) {
        email = email.trim()
        password = password.trim()

        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential;

                    if (user.user.email) {
                        saveUser({
                            email: user.user.email,
                            name: user.user.displayName ? user.user.displayName : user.user.email,
                            password: password,
                            savedSet: [],
                            doneSet: [],
                            createdSet: [],
                            imgAddress: user.user.photoURL ? user.user.photoURL : ''
                        })
                    } else {
                        return Alert.alert('Email or Password is incorrect')
                    }
                }).then(() => {
                    return navigation.navigate('BottomTab' as never)
                })
        } catch (error) {
            console.log(error)
            return Alert.alert('Email or Password is incorrect')
        }
    }

    return (
        <SaveViewWithColorStatusBar StatusBarColor={clrStyle.pur2} >
            <TopNav1 title={isShowSignUp ? 'Sign-up' : 'Sign-in'} />
            <View style={[styles.w80vw, styles.alignSelfCenter, styles.flex1, styles.paddingTop8vw]}>
                {
                    isShowSignUp ?
                        <>
                            <InputCardVer1
                                title='Username'
                                placeholder='Let us know your name'
                                value={userName}
                                onChangeText={setUserName}
                                autoCapitalize='words'
                            />
                            <InputCardVer1
                                title='Email'
                                placeholder='Enter your email'
                                value={email}
                                onChangeText={setEmail}
                                textContentType='emailAddress'
                            />
                            <InputCardVer1
                                title='Password'
                                placeholder='Need 8-10 characters'
                                value={password}
                                onChangeText={setPassword}
                                textContentType='password'
                                hideContentFnc={showPass}
                                hideContent={isHidePassword}
                            />
                            <InputCardVer1
                                title='Confirm'
                                placeholder='Re-enter your password'
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                textContentType='password'
                                hideContent={isHidePassword}
                            />
                        </> :
                        <>
                            <InputCardVer1
                                title='Email'
                                placeholder='Enter your email'
                                value={email}
                                onChangeText={setEmail}
                                textContentType='emailAddress'
                            />
                            <InputCardVer1
                                title='Password'
                                placeholder='Enter your password'
                                value={password}
                                onChangeText={setPassword}
                                textContentType='password'
                                hideContentFnc={showPass}
                                hideContent={isHidePassword}
                            />
                        </>
                }
                <TouchableOpacity style={[styles.padding1vw]}
                    onPress={() => { setIsShowSignUp(!isShowSignUp) }}>
                    <Lex16MedAuto style={[styles.textCenter, styles.paddingV4vw, { color: clrStyle.neu4 }]}>Switch to Sign-in</Lex16MedAuto>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        isShowSignUp ? signUpHandle(email, password, confirmPassword, userName, avtURL) : signInHandle(email, password)
                    }}
                    style={[styles.flexRowCenter, styles.gap1vw, styles.paddingV4vw, styles.paddingH8vw, styles.borderRadius40, { backgroundColor: 'rgba(134, 223, 208, 1)' }]}>
                    <Lex16RegAuto>Next</Lex16RegAuto>
                    <SvgXml xml={`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8228 4.44727L15.3753 8.99977L10.8228 13.5523" stroke="#0A0A0A" style="stroke:#0A0A0A;stroke:color(display-p3 0.0392 0.0392 0.0392);stroke-opacity:1;" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.625 9H15.2475" stroke="#0A0A0A" style="stroke:#0A0A0A;stroke:color(display-p3 0.0392 0.0392 0.0392);stroke-opacity:1;" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            `} />
                </TouchableOpacity>
            </View>

        </SaveViewWithColorStatusBar>
    )
}