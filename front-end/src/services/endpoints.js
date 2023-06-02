
const API_URL = 'http://localhost:8000';

export const buscarCEP = async (cep) => {
  const response = await fetch(`${API_URL}/api/cep/${cep}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Erro ao buscar CEP');
  }
};