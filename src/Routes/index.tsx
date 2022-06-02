import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenStack from './Stack';
import BottomTabs from './Navigation/BottomTabs';

const Root = createStackNavigator();

const Route = (): JSX.Element => {
    const { Navigator, Screen } = Root;
    
    return (
        <NavigationContainer>
            {/* @ts-ignore */}
            <Navigator initialRouteName='BottomTabs' screenOptions={{ headerShown: false }}>
                <Screen component={BottomTabs} name="BottomTabs" />
            </Navigator>
        </NavigationContainer>

    )
}

export default Route