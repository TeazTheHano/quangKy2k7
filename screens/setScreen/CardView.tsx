import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootContext } from '../../data/store'

export default function CardView({ route }: any) {
  if (route.params) { var { cardItem } = route.params }

  const navigation = useNavigation()

  const [CURRENT_SETS, dispatch] = useContext(RootContext)

  return (
    <View>
      <Text>CardView</Text>
    </View>
  )
}