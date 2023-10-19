import styled from "styled-components";
import { Text, View } from "react-native";

export const ContainerHomePage = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;

export const TitleArea = styled(View)`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
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
