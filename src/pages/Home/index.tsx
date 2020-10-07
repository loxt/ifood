import React from 'react';

import {SafeAreaView} from "./styles";
import {StatusBar} from "expo-status-bar";
import {Text} from "react-native";

export default function Home() {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </>
  );
}
