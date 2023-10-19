import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput, Button, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaJuridical } from "../../../schemas/schemas";
import { InputController } from "../InputStylesForm";
import CreateButton from "../../CreateButton/CreateButton";

const FormPessoaJuridica = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaJuridical),
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ field }) => (
          <InputController {...field} placeholder="Nome da Empresa" />
        )}
        name="nome_empresa"
      />
      {errors.nome_empresa && <Text>Nome da Empresa é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <InputController {...field} placeholder="Endereço" />
        )}
        name="endereco"
      />
      {errors.endereco && <Text>Endereço é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <InputController {...field} placeholder="Telefone" />
        )}
        name="telefone"
      />
      {errors.telefone && <Text>Telefone é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <InputController {...field} placeholder="Email" />
        )}
        name="email"
      />
      {errors.email && <Text>Email é obrigatório.</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <InputController {...field} placeholder="CNPJ" />
        )}
        name="cnpj"
      />
      {errors.cnpj && <Text>CNPJ é obrigatório.</Text>}
      <Controller
        control={control}
        render={({ field }) => (
          <Button title="Anexar Contrato Social" onPress={field.onChange} />
        )}
        name="contrato_social_path"
      />

      <CreateButton onPress={handleSubmit(onFormSubmit)} />
    </View>
  );
};

export default FormPessoaJuridica;
