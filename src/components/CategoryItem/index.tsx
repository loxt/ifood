import React from "react";

import { CategoryView, CategoryText, CategoryPhoto } from "./styles";

const CategoryItem = ({ photo, text }: any) => {
  return (
    <CategoryView>
      <CategoryPhoto
        source={{
          uri: photo.trim(),
          width: 98,
          height: 58,
        }}
      />
      <CategoryText>{text}</CategoryText>
    </CategoryView>
  );
};

export default CategoryItem;
