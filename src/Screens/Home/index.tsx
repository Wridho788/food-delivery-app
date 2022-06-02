import React from 'react';

import {
  initialCurrentLocation,
  categoryData,
  restaurantData,
} from '../../Constants/DATAS';
import { StyledSafeArea } from '../styles';
import Categories from './Components/Categories';
import Header from './Components/Header';

interface HomeScreenInterface {}

const HomeScreen: React.FC<HomeScreenInterface> = () => (
  <StyledSafeArea>
    <Header location={initialCurrentLocation.streetName} />
    <Categories
      categories={categoryData}
      currentLocation={initialCurrentLocation.streetName}
      restaurantData={restaurantData}
    />
  </StyledSafeArea>
);

export default HomeScreen;
