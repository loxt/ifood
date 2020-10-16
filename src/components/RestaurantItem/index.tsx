import React from "react";
import { RestaurantView, RestaurantPhoto, RestaurantInfo } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";

const RestaurantItem = ({
  photo,
  name,
  note,
  category,
  distance,
  shippingRate,
  deliveryTime,
}: any) => {
  return (
    <RestaurantView>
      <RestaurantPhoto
        source={{
          uri: photo.trim(),
          width: 50,
          height: 50,
        }}
        resizeMode="cover"
      />
      <RestaurantInfo>
        <Text>{name}</Text>
        <Text>
          <AntDesign name="star" size={12} color="#f9A825" />
          {note} - {category} - {distance}
        </Text>
        <Text>
          {deliveryTime} * R$ {shippingRate}
        </Text>
      </RestaurantInfo>
    </RestaurantView>
  );
};

export default RestaurantItem;
