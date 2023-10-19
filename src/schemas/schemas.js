import * as yup from "yup";

export const schemaPhysical = yup.object().shape({
  nome: yup.string().required(),
  endereco: yup.string().required(),
  telefone: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  rg: yup.string().required(),
  documento_path: yup.mixed(),
});

export const schemaJuridical = yup.object().shape({
  nome_empresa: yup.string().required(),
  endereco: yup.string().required(),
  telefone: yup.string().required(),
  email: yup.string().email().required(),
  cnpj: yup.string().required(),
  contrato_social_path: yup.mixed(),
});
