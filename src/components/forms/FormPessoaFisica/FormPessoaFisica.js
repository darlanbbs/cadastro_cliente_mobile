import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput, Button, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPhysical } from "../../../schemas/schemas";
import { InputController } from "../styles/InputStylesForm";
import { createPhysicalClient } from "../../../config/db";
import { FinishButton, FinishTextButton } from "../styles/FinishButton";

const FormPessoaFisica = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
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
      onSubmit(data);
    } catch (error) {
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
      {errors.nome && <Text>Nome é obrigatório.</Text>}

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
            placeholder="CPF"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="cpf"
      />
      {errors.cpf && <Text>CPF é obrigatório.</Text>}

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
      {errors.rg && <Text>RG é obrigatório.</Text>}

      {/* <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <Button title="Anexar Documento" onPress={field.onChange} />
        )}
        name="documento_path"
      /> */}
      <FinishButton onPress={handleSubmit(onFormSubmit)}>
        <FinishTextButton>Cadastrar</FinishTextButton>
      </FinishButton>
    </View>
  );
};

export default FormPessoaFisica;
