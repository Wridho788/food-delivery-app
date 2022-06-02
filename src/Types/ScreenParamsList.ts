import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ScreenParamsList = {
    AccountScreen: undefined;
    HomeScreen: undefined;
    RestaurantsScreen: undefined;
    OrderScreen: undefined;
}

export type AccountNavProps<T extends keyof ScreenParamsList> = {
    navigation: StackNavigationProp<ScreenParamsList, T>;
    route: RouteProp<ScreenParamsList, T>;
  };