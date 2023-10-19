import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput, Button, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPhysical } from "../../../schemas/schemas";

const FormPessoaFisica = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPhysical),
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} placeholder="Nome" />}
        name="nome"
      />
      {errors.nome && <Text>Nome é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} placeholder="Endereço" />}
        name="endereco"
      />
      {errors.endereco && <Text>Endereço é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} placeholder="Telefone" />}
        name="telefone"
      />
      {errors.telefone && <Text>Telefone é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} placeholder="Email" />}
        name="email"
      />
      {errors.email && <Text>Email é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} placeholder="CPF" />}
        name="cpf"
      />
      {errors.cpf && <Text>CPF é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} placeholder="RG" />}
        name="rg"
      />
      {errors.rg && <Text>RG é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <Button title="Anexar Documento" onPress={field.onChange} />
        )}
        name="documento_path"
      />
      <Button onPress={handleSubmit(onFormSubmit)} title="Enviar" />
    </View>
  );
};

export default FormPessoaFisica;