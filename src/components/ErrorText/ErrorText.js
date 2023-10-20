import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
const ErrorText = ({ children }) => {
  const TextError = styled(Text)`
    color: #ff0000;
    font-size: 14px;
    font-weight: ${(props) => props.theme.font_weight.normal};
  `;

  return <TextError>{children}</TextError>;
};

export default ErrorText;
