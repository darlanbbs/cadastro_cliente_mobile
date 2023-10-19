import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native"; // Importando ScrollView
import { getAllClients } from "../../config/db";
import { Container } from "../../GlobalStyles/styles";
import * as C from "./styles";
import SearchComponent from "../../components/searchInput/SearchInput";
import SearchCard from "../../components/CardUser/CardUser";

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
    <SafeAreaView>
      <Container>
        <C.ContainerClientsPage>
          <C.TitleArea>
            <C.Title>Consulta de clientes</C.Title>
            <C.subTitle>Gerenciamento de pessoas</C.subTitle>
            <SearchComponent />
          </C.TitleArea>

          <FlatList
            style={{ flex: 1, width: "100%" }}
            data={clients}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SearchCard item={item.nome_ou_nome_empresa} />
            )}
          />
        </C.ContainerClientsPage>
      </Container>
    </SafeAreaView>
  );
};

export default ClientsPage;
