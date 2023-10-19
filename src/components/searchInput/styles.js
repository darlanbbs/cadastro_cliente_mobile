import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import styled from "styled-components";

export const InputSearchContainer = styled(View)`
  padding: 20px;
  margin: 30px;
`;

export const InputSearch = styled(TextInput)`
  width: 350px;
  height: 50px;
  border: solid 1px ${(props) => props.theme.color.primary.main};
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: ${(props) => props.theme.font_size.small};
  color: ${(props) => props.theme.color.primary.terciaryText};
`;

export const ButtonSearch = styled(Pressable)`
  background-color: ${(props) => props.theme.color.primary.main};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextButtonSearch = styled(Text)`
  color: ${(props) => props.theme.color.primary.terciaryText};
  font-size: ${(props) => props.theme.font_size.default};
  font-weight: ${(props) => props.theme.font_weight.bold};
`;
