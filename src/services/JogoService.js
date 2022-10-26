import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

const transformJogo = (jogo) => {
  return {
    ...jogo,
    id: jogo._id,
    titulo: jogo.titulo,
  };
};

const parseTransformItem = (response) =>
  parseResponse(response).then(transformJogo);

export const JogoService = {
  getLista: () => fetch(Api.jogoLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.jogoById(id), { method: "GET" }).then(parseTransformItem),
  create: (jogo) => fetch(Api.createJogo(), { method: "POST", body: JSON.stringify(jogo), mode: "cors", headers: {
    "Content-Type": "application/json",
  } }).then(parseTransformItem),
  updateById: (id) =>
    fetch(Api.updateJogoById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteJogoById(id), { method: "DELETE" }).then(parseResponse),
};
