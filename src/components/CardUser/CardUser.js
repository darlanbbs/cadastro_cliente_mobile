import React from "react";
import * as C from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchCard = ({ item }) => {
  return (
    <C.CardContainer>
      <C.ContentContainer>
        <C.IconContainer>
          <Icon name="user" size={24} color="#00B37E" />
        </C.IconContainer>
        <C.TextCard>{item}</C.TextCard>
      </C.ContentContainer>
      <C.DeleteIconContainer>
        <Icon name="times" size={24} color="#FF0000" />
      </C.DeleteIconContainer>
    </C.CardContainer>
  );
};

export default SearchCard;
