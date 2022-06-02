import styled from 'styled-components';
import { View, Image, TouchableOpacity } from 'react-native';

export const FlexContainer = styled(View)`
  flex-direction: row;
  height: 50px;
`;

export const ImageButton = styled(TouchableOpacity)`
  width: 50px;
  justify-content: center;
`;

export const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

export const SearchContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchLocation = styled(View)`
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const BagButton = styled(TouchableOpacity)`
  width: 50px;
  justify-content: center;
`;
