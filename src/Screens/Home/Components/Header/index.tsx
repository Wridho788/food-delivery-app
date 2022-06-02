import React from 'react';
import { Text } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../../../Constants';

import {
  BagButton,
  FlexContainer,
  ImageButton,
  SearchContainer,
  StyledImage,
  StyledSearchLocation,
} from './styles';

interface Props {
  location: string;
}

const Header: React.FC<Props> = ({ location }): JSX.Element => (
  <FlexContainer>
    <ImageButton style={{ paddingLeft: SIZES.padding * 2 }}>
      <StyledImage source={icons.nearby} resizeMode='contain' />
    </ImageButton>
    <SearchContainer>
      <StyledSearchLocation
        style={{
          backgroundColor: COLORS.lightGray3,
          borderRadius: SIZES.radius,
        }}>
        <Text style={{ ...FONTS.h3 }}>{location}</Text>
      </StyledSearchLocation>
    </SearchContainer>
    <BagButton style={{ paddingRight: SIZES.padding * 2 }}>
      <StyledImage source={icons.basket} resizeMode='contain' />
    </BagButton>
  </FlexContainer>
);

export default Header;
