import styled, { css } from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  border: 1px solid #ea1d2c;
  border-radius: 5px;
  padding: 10px 40px;
  max-width: 190px;
  
  justify-content: center;
  align-items: center;
  
  ${({ theme }) => theme == 'primary' && css`
    background-color: #ea1d2c;
  `}
`;

export const Text  = styled.Text`
  color: #ea1d2c;
  
  ${({ theme }) => theme == 'primary' && css`
    color: #fff;
  `}
`;
