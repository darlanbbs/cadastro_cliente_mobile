import axios from "axios";

const api = axios.create({
  baseURL: "https://mysterious-cow-panama-hat.cyclic.app",
});

export const getAllClients = async () => {
  const response = await api.get("/clients");

  return response.data;
};

export const createPhysicalClient = async (
  nome,
  cpf,
  email,
  endereco,
  rg,
  telefone
) => {
  const response = await api.post("/clients/physical", {
    nome,
    cpf,
    email,
    endereco,
    rg,
    telefone,
  });
  console.log("response", response.data);
  return response.data;
};

export const handleSearch = async (item) => {
  const response = await api.get(`/search?nome=${item}`);
  return response.data;
};

export const createJuridicalClient = async (
  nome_empresa,
  endereco,
  telefone,
  email,
  cnpj,
  contrato_social_path
) => {
  try {
    const response = await api.post("/clients/juridical", {
      nome_empresa,
      endereco,
      telefone,
      email,
      cnpj,
      contrato_social_path,
    });
    console.log("Cliente jurídico criado");
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar cliente jurídico:", error);
    throw error;
  }
};

export const deleteUser = async (email) => {
  const response = await api.delete(`/clients/${email}`);
  return response.data;
};
