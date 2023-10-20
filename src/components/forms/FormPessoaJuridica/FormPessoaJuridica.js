import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Button, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaJuridical } from "../../../schemas/schemas";
import { InputController } from "../styles/InputStylesForm";
import { FinishButton, FinishTextButton } from "../styles/FinishButton";
import * as DocumentPicker from "expo-document-picker";
import { createJuridicalClient } from "../../../config/db";
import ErrorText from "../../ErrorText/ErrorText";

const FormPessoaJuridica = ({ onSubmit }) => {
  const [arquivo, setArquivo] = React.useState(null);
  const [existUser, setExistUser] = React.useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaJuridical),
  });

  const selecionarDocumento = async () => {
    try {
      const resultado = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });
      if (resultado.canceled == false) {
        setArquivo(resultado.assets[0]);
      }
    } catch (erro) {
      console.error("Erro ao selecionar o documento:", erro);
    }
  };

  const onFormSubmit = async (data) => {
    let anexo;
    try {
      if (arquivo !== null) {
        let { name, mimeType, size, uri } = arquivo;
        anexo = {
          name,
          mimeType,
          size,
          uri,
        };
      }

      await createJuridicalClient(
        data.nome_empresa,
        data.endereco,
        data.telefone,
        data.email,
        data.cnpj,
        anexo
      );
      setExistUser(false);

      onSubmit(data);
      reset();
    } catch (error) {
      setExistUser(true);
      console.log("Erro ao criar cliente jurídico:", error);
    }
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
      {errors.nome_empresa && (
        <ErrorText>Nome da Empresa é obrigatório.</ErrorText>
      )}

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
      {errors.endereco && <ErrorText>Endereço é obrigatório.</ErrorText>}

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
      {errors.telefone && <ErrorText>Telefone é obrigatório.</ErrorText>}

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
      {errors.email && <ErrorText>Email é obrigatório.</ErrorText>}

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
      {errors.cnpj && <ErrorText>CNPJ é obrigatório.</ErrorText>}
      {existUser && <ErrorText>Cliente já existe.</ErrorText>}

      <Button onPress={selecionarDocumento} title="anexo" />
      <FinishButton onPress={handleSubmit(onFormSubmit)}>
        <FinishTextButton>Cadastrar</FinishTextButton>
      </FinishButton>
    </View>
  );
};

export default FormPessoaJuridica;
