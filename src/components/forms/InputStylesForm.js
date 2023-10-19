import styled from "styled-components";
import { TextInput } from "react-native";

export const InputController = styled(TextInput)`
  width: 350px;
  height: 50px;
  border: solid 1px ${(props) => props.theme.color.primary.main};
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: ${(props) => props.theme.font_size.small};
  color: ${(props) => props.theme.color.primary.terciaryText};
`;
