import styled from "styled-components";
import { View } from "react-native";

export const Container = styled(View)`
  background-color: ${(props) => props.theme.color.background};
  font-size: ${(props) => props.theme.font_size.default};
  padding: ${(props) => props.theme.padding.default};
  height: 100%;
  width: 100%;
`;

export const ContainerPage = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
