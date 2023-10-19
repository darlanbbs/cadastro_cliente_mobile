import styled from "styled-components";

export const Title = styled.Text`
  color: ${(props) => props.theme.color.primary.main};
  font-size: ${(props) => props.theme.font_size.default};
  font-weight: ${(props) => props.theme.font_weight.bold};
`;

export const subTitle = styled.Text`
  color: ${(props) => props.theme.color.primary.contrastText};
  font-size: ${(props) => props.theme.font_size.small};
  font-weight: ${(props) => props.theme.font_weight.normal};
`;
