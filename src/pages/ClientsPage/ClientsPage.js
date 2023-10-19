import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { getAllClients } from "../../config/db";
import { Container } from "../../GlobalStyles/styles";
import * as C from "./styles";
import SearchComponent from "../../components/searchInput/SearchInput";

const ClientsPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getAllClients().then((data) => {
      if (JSON.stringify(data) !== JSON.stringify(clients)) {
        setClients(data);
      }
    });
  }, [clients]);

  console.log(clients);

  return (
    <Container>
      <C.ContainerClientsPage>
        <C.TitleArea>
          <C.Title>Consulta de clientes</C.Title>
          <C.subTitle>Gerenciamento de pessoas</C.subTitle>
          <SearchComponent />
        </C.TitleArea>
      </C.ContainerClientsPage>
    </Container>
  );
};

export default ClientsPage;
