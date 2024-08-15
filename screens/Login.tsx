import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { InputCardVer1, SSBar } from '../assets/Class'

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [userName, setUserName] = React.useState('')

    const [isHidePassword, setIsHidePassword] = React.useState(true)

    function showPass() {
        setIsHidePassword(!isHidePassword)
    }

    return (
        <SafeAreaView>
            <SSBar />
            <InputCardVer1
                title='Email'
                placeholder='Enter your email'
                value={email}
                onChangeText={setEmail}
                textContentType='password'
                hideContentFnc={showPass}
                hideContent={isHidePassword}
            />
            <InputCardVer1
                title='Email'
                placeholder='Enter your email'
                value={email}
                onChangeText={setEmail}
                textContentType='password'
                hideContent={isHidePassword}
            />

        </SafeAreaView>
    )
}