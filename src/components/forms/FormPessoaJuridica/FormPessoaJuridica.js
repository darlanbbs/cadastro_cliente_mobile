import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput, Button, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaJuridical } from "../../../schemas/schemas";
import { InputController } from "../styles/InputStylesForm";
import CreateButton from "../../CreateButton/CreateButton";
import { FinishButton, FinishTextButton } from "../styles/FinishButton";
import * as DocumentPicker from "expo-document-picker";

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
        type: "*/*", // Aceitar qualquer tipo de arquivo
        copyToCacheDirectory: false,
      });

      if (resultado.type === "success") {
        setArquivo(resultado);
      }
    } catch (erro) {
      console.error("Erro ao selecionar o documento:", erro);
    }
  };
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
          <Button
            title="Anexar Contrato Social"
            onPress={selecionarDocumento}
          />
        )}
        name="contrato_social_path"
      />

      <FinishButton onPress={handleSubmit(onFormSubmit)}>
        <FinishTextButton>Enviar</FinishTextButton>
      </FinishButton>
    </View>
  );
};

export default FormPessoaJuridica;
