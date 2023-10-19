import styled from "styled-components";
import { Pressable, Text } from "react-native";

export const StylizedClientesButton = styled(Pressable)`
  background-color: #323238;
  border: solid 1px ${(props) => props.theme.color.primary.main};
  font-size: ${(props) => props.theme.font_size.default};
  font-weight: ${(props) => props.theme.font_weight.bold};

  width: 300px;

  height: 80px;

  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
`;

export const StylizedClientesTextButton = styled(Text)`
  color: #ffffff;
  font-size: 18px;
  font-weight: ${(props) => props.theme.font_weight.normal};
`;
