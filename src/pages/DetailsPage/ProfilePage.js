import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { deleteUser, getAnyUser } from "../../config/db";
import { Container, ContainerPage } from "../../GlobalStyles/styles";
import CardDetailsUser from "../../components/CardDetailsUserPhysical/CardDetailsUserPhysical";
import CardDetailsUserJuridical from "../../components/CardDetailsUserJuridical/CardDetailsUserJuridical";

const maskCPF = (cpf) => {
  return "***.***.***-**" + cpf.substring(cpf.length - 2);
};

const maskRG = (rg) => {
  return "*****" + rg.substring(rg.length - 2);
};

const maskCNPJ = (cnpj) => {
  return "**.***.***/****-" + cnpj.substring(cnpj.length - 2);
};

const ProfilePage = ({ route, navigation }) => {
  const { email } = route.params;
  const [client, setClient] = useState([]);

  useEffect(() => {
    try {
      getAnyUser(email).then((data) => {
        if (JSON.stringify(data) !== JSON.stringify(client)) {
          setClient(data);
        }
      });
    } catch (error) {
      console.log("Erro ao buscar cliente:", error);
    }
  }, []);

  return (
    <Container>
      <ContainerPage>
        {client.data ? (
          client.tipo === "fisica" ? (
            <CardDetailsUser
              cpf={maskCPF(client.data[0].cpf)}
              email={client.data[0].email}
              nome={client.data[0].nome}
              endereco={client.data[0].endereco}
              rg={maskRG(client.data[0].rg)}
              telefone={client.data[0].telefone}
              navigation={navigation}
            />
          ) : (
            <CardDetailsUserJuridical
              cnpj={maskCNPJ(client.data[0].cnpj)}
              email={client.data[0].email}
              nome_empresa={client.data[0].nome_empresa}
              endereco={client.data[0].endereco}
              telefone={client.data[0].telefone}
              navigation={navigation}
            />
          )
        ) : (
          <Text>Cliente não encontrado</Text>
        )}
      </ContainerPage>
    </Container>
  );
};

export default ProfilePage;
