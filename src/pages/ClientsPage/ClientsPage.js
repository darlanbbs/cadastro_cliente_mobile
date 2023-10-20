import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { getAllClients } from "../../config/db";
import { Container, ContainerPage } from "../../GlobalStyles/styles";

import SearchComponent from "../../components/searchInput/SearchInput";
import SearchCard from "../../components/CardUser/CardUser";
import TitleArea from "../../components/TitleArea/TitleArea";

const ClientsPage = ({ navigation }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getAllClients().then((data) => {
      if (JSON.stringify(data) !== JSON.stringify(clients)) {
        setClients(data);
      }
    });
  }, [clients]);

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
            keyExtractor={(item) => item.email.toString()}
            renderItem={({ item }) => (
              <SearchCard
                nome={item.nome_ou_nome_empresa}
                email={item.email}
                navigation={navigation}
                onPress={() =>
                  navigation.navigate("Perfil", { email: item.email })
                }
              />
            )}
          />
        </ContainerPage>
      </Container>
    </SafeAreaView>
  );
};

export default ClientsPage;
