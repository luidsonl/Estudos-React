async function fetchApi(endpoint: string) {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Erro de requisição ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter os dados:', error);
    throw error;
  }
}

export default fetchApi;
