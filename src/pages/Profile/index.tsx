import React from 'react';

import {SafeAreaView} from "./styles";
import {StatusBar} from "expo-status-bar";
import {Text} from "react-native";

export default function Profile() {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView>
        <Text>Profile</Text>
      </SafeAreaView>
    </>
  );
}
