import React from "react";
import { Text } from "react-native";
import * as C from "./styles";
const CardDetailsUser = ({
  nome,
  cpf,
  email,
  endereco,
  rg,
  telefone,
  onEdit,
  onDelete,
}) => {
  return (
    <C.CardContainer>
      <C.InfoText>Nome: {nome}</C.InfoText>
      <C.InfoText>CPF: {cpf}</C.InfoText>
      <C.InfoText>Email: {email}</C.InfoText>
      <C.InfoText>Endereço: {endereco}</C.InfoText>
      <C.InfoText>RG: {rg}</C.InfoText>
      <C.InfoText>Telefone: {telefone}</C.InfoText>
      <C.ButtonContainer>
        {/* <C.DeleteButton onPress={onDelete(email)}>
          <Text>Deletar</Text>
        </C.DeleteButton> */}
        {/* <C.EditButton onPress={onEdit}>
          <Text>Editar</Text>
        </C.EditButton> */}
      </C.ButtonContainer>
    </C.CardContainer>
  );
};

export default CardDetailsUser;
