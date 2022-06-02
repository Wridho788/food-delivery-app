import React from 'react'
import { View, Text } from 'react-native'

interface RestaurantInterface {}

type Props = {}

const RestaurantsScreen: React.FC<RestaurantInterface> = (props: Props) => {
  return (
    <View>
      <Text>RestaurantsScreen</Text>
    </View>
  )
}

export default RestaurantsScreen