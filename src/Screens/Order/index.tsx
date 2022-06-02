import React from 'react'
import { View, Text } from 'react-native'

interface OrderScreenInterface {}

type Props = {}

const OrderScreen: React.FC<OrderScreenInterface> = (props: Props) => {
  return (
    <View>
      <Text>OrderScreen</Text>
    </View>
  )
}

export default OrderScreen