import React, { useState } from "react";
import { Container, ContainerPage } from "./../../GlobalStyles/styles";
import { Text, Button } from "react-native";
import TitleArea from "../../components/TitleArea/TitleArea";
import FormPessoaFisica from "../../components/forms/FormPessoaFisica/FormPessoaFisica";
import FormPessoaJuridica from "../../components/forms/FormPessoaJuridica/FormPessoaJuridica";

const CreationPage = () => {
  const [tipoCadastro, setTipoCadastro] = useState("fisica");
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Container>
      <ContainerPage>
        <TitleArea
          Text={"Cadastro de Clientes"}
          subTitle={"Gerenciamento de pessoas"}
        />
        <Button
          onPress={() => setTipoCadastro("fisica")}
          title="Cadastrar Pessoa Física"
        />
        <Button
          onPress={() => setTipoCadastro("juridica")}
          title="Cadastrar Pessoa Jurídica"
        />
        {tipoCadastro === "fisica" && (
          <FormPessoaFisica onSubmit={handleFormSubmit} />
        )}
        {tipoCadastro === "juridica" && (
          <FormPessoaJuridica onSubmit={handleFormSubmit} />
        )}
        {formData && (
          <View>
            <Text>Formulário submetido com sucesso:</Text>
            <Text>{JSON.stringify(formData, null, 2)}</Text>
          </View>
        )}
      </ContainerPage>
    </Container>
  );
};

export default CreationPage;
