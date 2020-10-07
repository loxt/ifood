import React from 'react';
import { SafeAreaView, ButtonContainer, Image, View } from './styles';
import { StatusBar } from 'expo-status-bar';
import { Text } from "react-native";

import Banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Welcome() {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source={Banner} />
          <Text>Permitir localização</Text>
          <Text>Para descobrir restaurantes que entregam em sua região</Text>
        </View>
        <ButtonContainer>
          <Button text='PULAR' onPress={() => {}} />
          <Button theme='primary' text='ENTRAR' />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
