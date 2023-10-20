import * as yup from "yup";

export const schemaPhysical = yup.object().shape({
  nome: yup.string().required(),
  endereco: yup.string().required(),
  telefone: yup
    .string()
    .matches(/^\d{10,11}$/, "Telefone inválido")
    .required(),
  email: yup.string().email().required(),
  cpf: yup
    .string()
    .length(11, "O CPF deve ter exatamente 11 caracteres")
    .required(),
  rg: yup
    .string()
    .length(9, "O RG deve ter exatamente 9 caracteres")
    .required(),
});

export const schemaJuridical = yup.object().shape({
  nome_empresa: yup.string().required(),
  endereco: yup.string().required(),
  telefone: yup
    .string()
    .matches(/^\d{10,11}$/, "Telefone inválido")
    .required(),
  email: yup.string().email().required(),
  cnpj: yup
    .string()
    .length(14, "O CNPJ deve ter exatamente 14 caracteres")
    .required(),
  contrato_social_path: yup.mixed(),
});
