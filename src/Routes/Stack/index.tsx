import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenParamsList } from '../../Types/ScreenParamsList';
import { HomeScreen, AccountScreen, OrderScreen, RestaurantsScreen } from '../../Screens';

const Stack = createStackNavigator<ScreenParamsList>();

const ScreenStack = (): JSX.Element => {
    const { Navigator, Screen } = Stack;

    return (
        // @ts-ignore
        <Navigator initialRouteName='HomeScreen' >
            <Screen name='HomeScreen' component={HomeScreen} options={{ gestureEnabled: true }} />
            <Screen name='AccountScreen' component={AccountScreen} options={{ gestureEnabled: true }} />
            <Screen name='OrderScreen' component={OrderScreen} options={{ gestureEnabled: true }} />
            <Screen name='RestaurantsScreen' component={RestaurantsScreen} options={{ gestureEnabled: true }} />
        </Navigator>
    )
}

export default ScreenStack