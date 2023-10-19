import styled from "styled-components";
import { Pressable, Text } from "react-native";

export const FinishButton = styled(Pressable)`
  background-color: ${(props) => props.theme.color.primary.main};
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const FinishTextButton = styled(Text)`
  color: ${(props) => props.theme.color.primary.terciaryText};
  font-size: ${(props) => props.theme.font_size.small};
  font-weight: ${(props) => props.theme.font_weight.bold};
`;
