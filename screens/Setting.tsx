import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { InputCardVer1, Lex16BoldAuto, Lex20BoldAuto, RoundBtn, SSBar, TopNavLib, ViewCol, ViewRowBetweenCenter } from '../assets/Class'
import { clearAllDemoSets, clearAllFolder, clearAllSets, clearWeekly, loadAllDemoSets, removeUser, saveUser } from '../data/storageFunc'

import { getAuth, updateProfile } from 'firebase/auth'
import styles, { vh, vw } from '../assets/stylesheet'
import { deskCardEditIcon, doneEditIcon, notiBellIcon } from '../assets/svgXml'
import { useNavigation } from '@react-navigation/native'
import { RootContext, saveUserInfo } from '../data/store'
import { UserFormat } from '../data/data'
import clrStyle from '../assets/componentStyleSheet'

export default function Setting() {
  const navigation = useNavigation()
  const [CurrentSets, dispatch] = React.useContext(RootContext)
  const [isEdit, setIsEdit] = React.useState(false)
  const [user, setUser] = React.useState<UserFormat>(CurrentSets.userInfo as UserFormat)

  return (
    <SSBar trans barColor={'rgba(0,0,0,0)'} barContentStyle='dark-content' notMargin>

      <TopNavLib
        title={'Setting'}
        textColor='black'
        rightIcon={notiBellIcon(vw(8), vw(8), 'rgba(0,0,0,0)')}
        containerStyle={[styles.flexCol, styles.gap2vw, { justifyContent: 'flex-start', paddingTop: Platform.OS === 'ios' ? vh(5) : StatusBar.currentHeight }]}
        lighten={0.7}
      >
      </TopNavLib>
      <ScrollView style={[styles.flex1, styles.paddingH6vw]}>
        <ViewCol customStyle={[styles.paddingV6vw, styles.gap6vw]}>
          <Lex20BoldAuto>Username</Lex20BoldAuto>
          <ViewRowBetweenCenter customStyle={[styles.flex1, styles.gap1vw]}>
            <InputCardVer1
              value={CurrentSets.userInfo?.name}
              editable={isEdit}
              customStyle={[styles.flex1]}
              onChangeText={(text) => {
                setUser({ ...user, name: text })
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setIsEdit(!isEdit);
                const auth = getAuth();
                const currentUser = auth.currentUser;
                if (currentUser) {
                  updateProfile(currentUser, {
                    displayName: user.name,
                  }).then(() => {
                    console.log('User profile updated successfully');
                  }).catch((error) => {
                    console.error('Error updating user profile:', error);
                  });
                }
                dispatch(saveUserInfo(user))
                saveUser(user)
              }}>
              {!isEdit ? deskCardEditIcon(vw(8), vw(8), 'black') : doneEditIcon(vw(8), vw(8), 'black')}
            </TouchableOpacity>
          </ViewRowBetweenCenter>
          <Lex20BoldAuto>Edit storage</Lex20BoldAuto>
          <RoundBtn
            customStyle={[styles.w100,]}
            bgColor={clrStyle.green}
            onPress={clearWeekly}
            title="Clear Weekly"
          />
          <RoundBtn
            customStyle={[styles.w100,]}
            bgColor={clrStyle.green}
            onPress={loadAllDemoSets}
            title="Get Demo Set"
          />
          <RoundBtn
            customStyle={[styles.w100,]}
            bgColor={clrStyle.green}
            onPress={clearAllDemoSets}
            title="Clear All Demo Set"
          />
          <RoundBtn
            customStyle={[styles.w100,]}
            bgColor={clrStyle.green}
            onPress={clearAllSets}
            title="Clear All Sets"
          />
          <RoundBtn
            customStyle={[styles.w100,]}
            bgColor={clrStyle.green}
            onPress={() => {
              removeUser().then((ret) => {
                if (ret) {
                  const auth = getAuth();
                  clearAllSets();
                  clearWeekly();
                  clearAllFolder();
                  auth.signOut().then(() => {
                    console.log('User signed out successfully');
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'BottomTab' as never }],
                    });
                  }).catch((error) => {
                    console.error('Error signing out:', error);
                  });
                }
              })
            }}
            title="Clear All data and Log-out"
          />
        </ViewCol>

      </ScrollView>
    </SSBar >
  )
}