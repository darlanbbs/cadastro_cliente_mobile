import styled from "styled-components";
import { Button } from "react-native";

export const StylizedButton = styled(Button)`
  color: ${(props) => props.theme.color.primary.contrastText};
  border-radius: ${(props) => props.theme.border.radius};
  font-size: ${(props) => props.theme.font_size.default};
  font-weight: ${(props) => props.theme.font_weight.bold};
  padding: ${(props) => props.theme.padding.default};
  width: 100%;
  position: absolute;
  bottom: 10px;
`;
