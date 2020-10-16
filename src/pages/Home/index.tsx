import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { Text, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "./styles";

export default function Home() {
  const [banner, setBanner] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loaded, setLoaded] = useState(false);

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
    return <Text>Principal</Text>;
  };

  if (!loaded)
    return (
      <SafeAreaView>
        <ActivityIndicator color="#ea1d2c" size="large" />
      </SafeAreaView>
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
