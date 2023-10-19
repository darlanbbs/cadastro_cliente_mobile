import axios from "axios";

const api = axios.create({
  baseURL: "https://byzantium-penguin-shoe.cyclic.app",
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
  return response.data;
};

export const handleSearch = async (item) => {
  const response = await api.get(`/search?nome=${item}`);
  console.log(response.data);
  return response.data;
};
