import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const CardContainer = styled(View)`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
`;

export const InfoText = styled(Text)`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled(TouchableOpacity)`
  flex: 1;
  margin: 8px;
  padding: 12px;
  border-radius: 4px;
  align-items: center;
`;

export const DeleteButton = styled(TouchableOpacity)`
  background-color: #ff5733;
  padding: 20px;
  width: 100%;
`;
