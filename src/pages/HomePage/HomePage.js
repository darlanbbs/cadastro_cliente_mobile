import React from "react";
import { Container } from "../../GlobalStyles/styles";
import * as C from "./styles";
import CreateButton from "../../components/CreateButton/CreateButton";
import ClientesButton from "../../components/verClientesButton/ClientesButton";

const HomePage = () => {
  return (
    <Container>
      <C.ContainerHomePage>
        <C.TitleArea>
          <C.Title>Cadastro</C.Title>
          <C.subTitle>Cadastre os clientes</C.subTitle>
        </C.TitleArea>
        <ClientesButton />
        <CreateButton />
      </C.ContainerHomePage>
    </Container>
  );
};

export default HomePage;
