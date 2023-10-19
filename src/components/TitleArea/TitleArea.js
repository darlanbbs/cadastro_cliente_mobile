import React from "react";
import * as C from "./styles";

const TitleArea = ({ Text, subTitle }) => {
  return (
    <C.TitleArea>
      <C.Title>{Text}</C.Title>
      <C.subTitle>{subTitle}</C.subTitle>
    </C.TitleArea>
  );
};

export default TitleArea;
