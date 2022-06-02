import styled from 'styled-components';
import { View, Image, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const BtnContainer = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 1;
`;

export const CategoryImage = styled(Image)`
  width: 30px;
  height: 30px;
`;
