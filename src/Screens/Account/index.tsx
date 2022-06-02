import React from 'react'
import { View, Text } from 'react-native'


interface AccountScreenInterface {}

type Props = {}

const AccountScreen: React.FC<AccountScreenInterface> = (props: Props) => {
  return (
    <View>
      <Text>Account</Text>
    </View>
  )
}

export default AccountScreen