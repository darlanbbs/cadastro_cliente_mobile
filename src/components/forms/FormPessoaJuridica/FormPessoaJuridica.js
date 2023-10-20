import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Button, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaJuridical } from "../../../schemas/schemas";
import { InputController } from "../styles/InputStylesForm";
import { FinishButton, FinishTextButton } from "../styles/FinishButton";
import * as DocumentPicker from "expo-document-picker";
import { createJuridicalClient } from "../../../config/db";

const FormPessoaJuridica = ({ onSubmit }) => {
  const [arquivo, setArquivo] = React.useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaJuridical),
  });

  const selecionarDocumento = async () => {
    try {
      const resultado = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: false,
      });

      if (resultado.type === "success") {
        setArquivo(resultado);
      }
    } catch (erro) {
      console.error("Erro ao selecionar o documento:", erro);
    }
  };

  const onFormSubmit = async (data) => {
    try {
      await createJuridicalClient(
        data.nome_empresa,
        data.endereco,
        data.telefone,
        data.email,
        data.cnpj
      );
      console.log("Cliente jurídico criado com sucesso!");
      onSubmit(data);
    } catch (error) {
      console.log("Erro ao criar cliente jurídico:", error);
    }
    console.log(data.email);
  };
  return (
    <View>
      <Controller
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            placeholder="Nome da Empresa"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="nome_empresa"
      />
      {errors.nome_empresa && <Text>Nome da Empresa é obrigatório.</Text>}

      <Controller
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            placeholder="Endereço"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="endereco"
      />
      {errors.endereco && <Text>Endereço é obrigatório.</Text>}

      <Controller
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            onChangeText={onChange}
            value={value}
            placeholder="Telefone"
          />
        )}
        name="telefone"
      />
      {errors.telefone && <Text>Telefone é obrigatório.</Text>}

      <Controller
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
      />
      {errors.email && <Text>Email é obrigatório.</Text>}

      <Controller
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            placeholder="CNPJ"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="cnpj"
      />
      {errors.cnpj && <Text>CNPJ é obrigatório.</Text>}
      {/* <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <Button
            title="Anexar Contrato Social"
            onPress={() => {
              selecionarDocumento();
              onChange(arquivo);
            }}
          />
        )}
        name="contrato_social_path"
      /> */}

      <FinishButton onPress={handleSubmit(onFormSubmit)}>
        <FinishTextButton>Cadastrar</FinishTextButton>
      </FinishButton>
    </View>
  );
};

export default FormPessoaJuridica;
