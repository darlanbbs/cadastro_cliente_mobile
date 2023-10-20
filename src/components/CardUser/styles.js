import styled from "styled-components";
import { View, TouchableOpacity, Text } from "react-native";

export const CardContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: 10px;
  background-color: #323238;
  padding: 10px;
`;

export const ContentContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled(View)`
  margin-right: 10px;
`;

export const DeleteIconContainer = styled(TouchableOpacity)`
  color: red;
`;

export const TextCard = styled(Text)`
  color: ${(props) => props.theme.color.primary.contrastText};
  font-size: ${(props) => props.theme.font_size.small};
  font-weight: ${(props) => props.theme.font_weight.normal};
`;
