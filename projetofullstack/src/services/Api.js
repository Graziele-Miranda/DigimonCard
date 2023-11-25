export const LoadDigimonsFromApi = () => {
  return fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Não foi possível carregar os Digimons");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Erro na requisição da API:", error);
      throw error;
    });
};
