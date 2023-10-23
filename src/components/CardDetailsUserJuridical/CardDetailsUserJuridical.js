import React from "react";
import * as C from "./styles";
import { Text } from "react-native";
import { deleteUser } from "../../config/db";
const CardDetailsUserJuridical = ({
  nome_empresa,
  cnpj,
  email,
  endereco,
  telefone,
  navigation,
}) => {
  return (
    <C.CardContainer>
      <C.InfoText>Nome da Empresa: {nome_empresa}</C.InfoText>
      <C.InfoText>CNPJ: {cnpj}</C.InfoText>
      <C.InfoText>Email: {email}</C.InfoText>
      <C.InfoText>Endereço: {endereco}</C.InfoText>
      <C.InfoText>Telefone: {telefone}</C.InfoText>
      <C.ButtonContainer>
        <C.DeleteButton
          onPress={() => {
            deleteUser(email);
            navigation.navigate("Home");
          }}
        >
          <Text>Deletar</Text>
        </C.DeleteButton>
      </C.ButtonContainer>
    </C.CardContainer>
  );
};

export default CardDetailsUserJuridical;
