import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput, Button, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPhysical } from "../../../schemas/schemas";
import { InputController } from "../styles/InputStylesForm";
import { createPhysicalClient } from "../../../config/db";
import { FinishButton, FinishTextButton } from "../styles/FinishButton";
import ErrorText from "../../ErrorText/ErrorText";

const FormPessoaFisica = ({ onSubmit }) => {
  const [existUser, setExistUser] = React.useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPhysical),
  });

  const onFormSubmit = async (data) => {
    try {
      await createPhysicalClient(
        data.nome,
        data.cpf,
        data.email,
        data.endereco,
        data.rg,
        data.telefone
      );
      setExistUser(false);

      onSubmit(data);
      reset();
    } catch (error) {
      setExistUser(true);
      console.log("Erro ao cadastrar novo cliente:", error);
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
            placeholder="Nome"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="nome"
      />
      {errors.nome && <ErrorText>Nome é obrigatório.</ErrorText>}

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
            placeholder="CPF"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="cpf"
      />
      {errors.cpf && <ErrorText>CPF é obrigatório.</ErrorText>}

      <Controller
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            value={value}
            onChangeText={onChange}
            placeholder="RG"
          />
        )}
        name="rg"
      />
      {errors.rg && <ErrorText>RG é obrigatório.</ErrorText>}

      {existUser && <ErrorText>Cliente já existe.</ErrorText>}
      <FinishButton onPress={handleSubmit(onFormSubmit)}>
        <FinishTextButton>Cadastrar</FinishTextButton>
      </FinishButton>
    </View>
  );
};

export default FormPessoaFisica;
