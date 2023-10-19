import styled from "styled-components";
import { View } from "react-native";

export const Container = styled(View)`
  background-color: ${(props) => props.theme.color.background};
  font-size: ${(props) => props.theme.font_size.default};
  padding: ${(props) => props.theme.padding.default};
  height: 100%;
  width: 100%;
`;
