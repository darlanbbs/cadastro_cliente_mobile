import { View, Text, FlatList, ScrollView } from "react-native";

import styled from "styled-components";

export const ContainerClientsPage = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonArea = styled(View)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;
