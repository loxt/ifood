import React from 'react';
import { Text, TouchableOpacity } from './styles';

const Button = ({ theme = '', text, ...rest }: any) => {
  return (
    <TouchableOpacity theme={ theme } { ...rest }>
      <Text theme={ theme }>{ text }</Text>
    </TouchableOpacity>
  );
};

export default Button;


