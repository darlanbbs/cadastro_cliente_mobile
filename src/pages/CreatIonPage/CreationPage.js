import React, { useState } from "react";
import { Container, ContainerPage } from "./../../GlobalStyles/styles";
import { Text, Button, View } from "react-native";
import TitleArea from "../../components/TitleArea/TitleArea";
import FormPessoaFisica from "../../components/forms/FormPessoaFisica/FormPessoaFisica";
import FormPessoaJuridica from "../../components/forms/FormPessoaJuridica/FormPessoaJuridica";
import { ButtonArea } from "./styles";

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
        <ButtonArea>
          <Button
            onPress={() => setTipoCadastro("fisica")}
            title="Pessoa Física"
          />
          <Button
            onPress={() => setTipoCadastro("juridica")}
            title="Pessoa Jurídica"
          />
        </ButtonArea>
        {tipoCadastro === "fisica" && (
          <FormPessoaFisica onSubmit={handleFormSubmit} />
        )}
        {tipoCadastro === "juridica" && (
          <FormPessoaJuridica onSubmit={handleFormSubmit} />
        )}
      </ContainerPage>
    </Container>
  );
};

export default CreationPage;
