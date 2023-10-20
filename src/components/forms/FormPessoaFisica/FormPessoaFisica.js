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

  const onFormSubmit = (data) => {
    try {
      createPhysicalClient(
        data.nome,
        data.cpf,
        data.email,
        data.endereco,
        data.rg,
        data.telefone
      );
    } catch (error) {
      console.log("Erro ao cadastrar cliente:", error);
    }
    onSubmit(data);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            value={value}
            placeholder="Nome"
            onChange={onChange}
          />
        )}
        name="nome"
      />
      {errors.nome && <Text>Nome é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            value={value}
            onChange={onChange}
            placeholder="Endereço"
          />
        )}
        name="endereco"
      />
      {errors.endereco && <Text>Endereço é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            value={value}
            onChange={onChange}
            placeholder="Telefone"
          />
        )}
        name="telefone"
      />
      {errors.telefone && <Text>Telefone é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            value={value}
            onChange={onChange}
            placeholder="Email"
          />
        )}
        name="email"
      />
      {errors.email && <Text>Email é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            value={value}
            onChange={onChange}
            placeholder="CPF"
          />
        )}
        name="cpf"
      />
      {errors.cpf && <Text>CPF é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputController
            placeholderTextColor={"#6c6c6a"}
            value={value}
            onChange={onChange}
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
