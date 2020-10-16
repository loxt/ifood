import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { Alert, ActivityIndicator } from "react-native";
import {
  SafeAreaView,
  RestaurantTitle,
  BannerView,
  CategoryView,
  ViewActivity,
  ViewPrincipal,
  ViewRestaurants,
  SelectType,
  ButtonTypeSelect,
  TextTypeSelect,
} from "./styles";
import RestaurantItem from "../../components/RestaurantItem";
import CategoryItem from "../../components/CategoryItem";
import BannerItem from "../../components/BannerItem";

export default function Home() {
  const [banner, setBanner] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [type, setType] = useState("Entrega");

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db"
        );

        const data = await response.json();

        setLoaded(true);

        setBanner(data.banner_principal);
        setCategories(data.categorias);
        setRestaurants(data.restaurantes);
      } catch (e) {
        Alert.alert(`Erro: ${e}`);
      }
    }

    loadData();
  }, []);

  const ViewHome = (props: any) => {
    return (
      <ViewPrincipal>
        <SelectType>
          <ButtonTypeSelect onPress={() => setType("Entrega")}>
            <TextTypeSelect selected={type === "Entrega"}>
              Entrega
            </TextTypeSelect>
          </ButtonTypeSelect>
          <ButtonTypeSelect onPress={() => setType("Retirada")}>
            <TextTypeSelect selected={type === "Retirada"}>
              Retirada
            </TextTypeSelect>
          </ButtonTypeSelect>
        </SelectType>
        <CategoryView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((c: any) => (
            <CategoryItem key={c.id} photo={c.img_url} text={c.nome} />
          ))}
        </CategoryView>

        <BannerView horizontal showsHorizontalScrollIndicator={false}>
          {banner.map((b: any) => (
            <BannerItem key={b.id} photo={b.banner_img_url} />
          ))}
        </BannerView>
        <RestaurantTitle>Restaurantes</RestaurantTitle>
        <ViewRestaurants>
          {restaurants.map((r: any) => (
            <RestaurantItem
              key={r.id}
              photo={r.url_img}
              name={r.nome}
              note={r.nota}
              category={r.categoria}
              distance={r.distancia}
              shippingRate={r.valor_frete}
              deliveryTime={r.tempo_entrega}
            />
          ))}
        </ViewRestaurants>
      </ViewPrincipal>
    );
  };

  if (!loaded)
    return (
      <ViewActivity>
        <ActivityIndicator color="#ea1d2c" size="large" />
      </ViewActivity>
    );

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <ViewHome />
      </SafeAreaView>
    </>
  );
}
