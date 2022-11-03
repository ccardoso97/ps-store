const JogoContext = {
    jogoEndpoint: () => `${Api.baseUrl}`,
    jogoLista: () => `${Api.baseUrl}/all-jogos`,
    jogoByID: (id) => `${Api.baseUrl}/one-jogo/${id}`,
    createJogo: () => `${Api.baseUrl}/create-jogo`,
    updateJogoById: (id) => `${Api.baseUrl}/update-jogo/${id}`,
    deleteJogoById: (id) => `${Api.baseUrl}/delete-jogo/${id}`,
  };
  
  export const Api = {
    baseUrl: "https://api-pstore-caio.herokuapp.com",
    ...JogoContext,
  };