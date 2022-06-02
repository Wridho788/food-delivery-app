import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../../Constants';
import { Container, BtnContainer, CategoryImage } from './styles';

interface CategoriesProps {
  categories: any;
  selectedCategories?: any;
  restaurantData?: any;
  currentLocation?: string;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedCategories,
  restaurantData,
  currentLocation,
}): JSX.Element => {
  const [category, setCategory] = useState(categories);
  const [selectedCategory, setSelectedCategory] = useState(selectedCategories);
  const [restaurant, setRestaurant] = useState(restaurantData);
  const [currentLocationName, setCurrentLocationName] =
    useState(currentLocation);

  const onSelectCategory = (category: { id: number }) => {
    //filter restaurant
    let restaurantList = restaurantData.filter(
      (a: { categories: string | any[] }) =>
        a.categories.includes(category.id.toString())
    );
    setRestaurant(restaurantList);

    setSelectedCategory(category);
  };

  const renderItem = ({ item }) => (
    <BtnContainer
      style={{
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor:
          selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
        borderRadius: SIZES.radius,
        marginRight: SIZES.padding,
      }}
      onPress={() => onSelectCategory(item)}>
      <Container
        style={{
          backgroundColor:
            selectedCategory?.id === item.id ? COLORS.white : COLORS.lightGray,
        }}>
        <CategoryImage source={item.icon} resizeMode='contain' />
      </Container>
      <Text
        style={{
          marginTop: SIZES.padding,
          color: selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
          ...FONTS.body5,
        }}>
        {item.name}
      </Text>
    </BtnContainer>
  );

  return (
    <View style={{ padding: SIZES.padding * 2 }}>
      <Text style={{ ...FONTS.h1 }}>Main</Text>
      <Text style={{ ...FONTS.h1 }}>Categories</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
      />
    </View>
  );
};

export default Categories;
