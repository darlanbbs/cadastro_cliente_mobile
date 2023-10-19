import { View, Text, FlatList, ScrollView } from "react-native";

import styled from "styled-components";

export const ContainerClientsPage = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

export const TitleArea = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.color.primary.main};
  font-size: ${(props) => props.theme.font_size.default};
  font-weight: ${(props) => props.theme.font_weight.bold};
`;

export const subTitle = styled(Text)`
  color: ${(props) => props.theme.color.primary.contrastText};
  font-size: ${(props) => props.theme.font_size.small};
  font-weight: ${(props) => props.theme.font_weight.normal};
`;
