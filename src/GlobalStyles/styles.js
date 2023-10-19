import styled from "styled-components";

export const Container = styled.View`
  background-color: ${(props) => props.theme.color.background};
  font-size: ${(props) => props.theme.font_size.default};
  padding: ${(props) => props.theme.padding.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
