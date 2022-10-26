const JogoContext = {
    jogoEndpoint: () => `${Api.baseUrl}/jogos`,
    jogoLista: () => `${Api.baseUrl}/all-jogos`,
    jogoByID: (id) => `${Api.baseUrl}/one-jogo/${id}`,
    createJogo: () => `${Api.baseUrl}/create-jogo`,
    updateJogoById: (id) => `${Api.baseUrl}/update-jogo/${id}`,
    deleteJogoById: (id) => `${Api.baseUrl}/delete-jogo/${id}`,
  };
  
  export const Api = {
    baseUrl: "http://localhost:3001",
    ...JogoContext,
  };