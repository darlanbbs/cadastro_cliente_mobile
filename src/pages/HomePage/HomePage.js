import React from "react";
import { Container } from "../../GlobalStyles/styles";
import * as C from "./styles";
import CreateButton from "../../components/CreateButton/CreateButton";
import ClientesButton from "../../components/verClientesButton/ClientesButton";

const HomePage = ({ navigation }) => {
  return (
    <Container>
      <C.ContainerHomePage>
        <C.TitleArea>
          <C.Title>Cadastro de Clientes</C.Title>
          <C.subTitle>Gerenciamento de pessoas</C.subTitle>
          <ClientesButton navigation={navigation} />
        </C.TitleArea>
        <CreateButton navigation={navigation} />
      </C.ContainerHomePage>
    </Container>
  );
};

export default HomePage;
