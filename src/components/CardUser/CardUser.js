import React from "react";
import * as C from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchCard = ({ nome, onPress }) => {
  return (
    <C.CardContainer onPress={onPress}>
      <C.ContentContainer>
        <C.IconContainer>
          <Icon name="user" size={24} color="#00B37E" />
        </C.IconContainer>
        <C.TextCard>{nome}</C.TextCard>
      </C.ContentContainer>
      {/* <C.DeleteIconContainer onPress={async () => await deleteUser(email)}>
        <Icon name="times" size={24} color="#FF0000" />
      </C.DeleteIconContainer> */}
    </C.CardContainer>
  );
};

export default SearchCard;
