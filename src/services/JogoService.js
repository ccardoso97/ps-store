import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const JogoService = {
  getLista: () =>
    fetch(Api.jogoLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.jogoById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createJogo(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updateJogoById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteJogoById(id), { method: "DELETE" }).then(parseResponse),
};
