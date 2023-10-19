import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { getAllClients } from "../../config/db";
import { Container, ContainerPage } from "../../GlobalStyles/styles";

import SearchComponent from "../../components/searchInput/SearchInput";
import SearchCard from "../../components/CardUser/CardUser";
import TitleArea from "../../components/TitleArea/TitleArea";

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
        <ContainerPage>
          <TitleArea
            Text={"Consulta de clientes"}
            subTitle={"Gerenciamento de pessoas"}
          />
          <SearchComponent />

          <FlatList
            style={{ flex: 1, width: "100%" }}
            data={clients}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SearchCard item={item.nome_ou_nome_empresa} />
            )}
          />
        </ContainerPage>
      </Container>
    </SafeAreaView>
  );
};

export default ClientsPage;
