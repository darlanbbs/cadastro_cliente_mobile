import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput, Button, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  nome_empresa: yup.string().required(),
  endereco: yup.string().required(),
  telefone: yup.string().required(),
  email: yup.string().email().required(),
  cnpj: yup.string().required(),
  contrato_social_path: yup.mixed(),
});

const FormPessoaJuridica = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput {...field} placeholder="Nome da Empresa" />
        )}
        name="nome_empresa"
      />
      {errors.nome_empresa && <Text>Nome da Empresa é obrigatório.</Text>}

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
        render={({ field }) => <TextInput {...field} placeholder="CNPJ" />}
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

      <Button onPress={handleSubmit(onFormSubmit)} title="Enviar" />
    </View>
  );
};

export default FormPessoaJuridica;
