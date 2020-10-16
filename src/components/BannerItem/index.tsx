import React from "react";

import { Dimensions } from "react-native";

import { BannerView, BannerPhoto } from "./styles";

const BannerItem = ({ photo }: any) => {
  return (
    <BannerView>
      <BannerPhoto
        source={{
          uri: photo.trim(),
          width: Dimensions.get("window").width - 50,
          height: 180,
        }}
        resizeMode="contain"
      />
    </BannerView>
  );
};

export default BannerItem;
