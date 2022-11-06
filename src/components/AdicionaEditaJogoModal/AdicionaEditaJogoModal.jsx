import "./AdicionaEditaJogoModal.css";
import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { JogoService } from "services/JogoService";
import { ActionMode } from "constants/index";

function AdicionaEditaJogoModal({
  closeModal,
  onCreateJogo,
  mode,
  jogoToUpdate,
  onUpdateJogo,
}) {
  const form = {
    titulo: jogoToUpdate?.titulo ?? "",
    genero: jogoToUpdate?.genero ?? "",
    descricao: jogoToUpdate?.descricao ?? "",
    foto: jogoToUpdate?.foto ?? "",
    distribuidora: jogoToUpdate?.distribuidora ?? "",
    preco: jogoToUpdate?.preco ?? "",
  };
  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.titulo.length &&
        state.genero.length &&
        state.descricao.length &&
        state.foto.length &&
        state.distribuidora.length &&
        state.preco.length &&
        String(state.preco).length
    );

    setCanDisable(response);
  };
  useEffect(() => {
    canDisableSendButton();
  });

  const handleSend = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split("\\").pop();

    const { titulo, descricao, preco, foto, genero, distribuidora } = state;

    const jogo = {
      titulo,
      descricao,
      preco,
      foto: `assets/images/${renomeiaCaminhoFoto(foto)}`,
      genero,
      distribuidora,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => JogoService.create(jogo),
      [ActionMode.ATUALIZAR]: () =>
        JogoService.updateById(jogoToUpdate?.id, jogo),
    };

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateJogo(response),
      [ActionMode.ATUALIZAR]: () => onUpdateJogo(response),
    };

    actionResponse[mode]();

    const reset = {
      titulo: "",
      descricao: "",
      preco: "",
      foto: "",
      genero: "",
      distribuidora: "",
    };

    setState(reset);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaJogoModal">
        <form autocomplete="off">
          <h2>
            {" "}
            {ActionMode.ATUALIZAR === mode ? "Atualizar" : "Adicionar ao"}{" "}
            Catálogo{" "}
          </h2>
          <div>
            <label className="AdicionaJogoModal__text" htmlFor="preco">
              {" "}
              Preço:{" "}
            </label>
            <input
              id="preco"
              placeholder="Adicione o preço"
              type="text"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label className="AdicionaJogoModal__text" htmlFor="titulo">
              {" "}
              Título:{" "}
            </label>
            <input
              id="titulo"
              placeholder="Titulo"
              type="text"
              value={state.titulo}
              onChange={(e) => handleChange(e, "titulo")}
              required
            />
          </div>
          <div>
            <label className="AdicionaJogoModal__text" htmlFor="genero">
              {" "}
              Gênero:{" "}
            </label>
            <input
              id="genero"
              placeholder="Gênero"
              type="text"
              value={state.genero}
              onChange={(e) => handleChange(e, "genero")}
              required
            />
          </div>
          <div>
            <label className="AdicionaJogoModal__text" htmlFor="descricao">
              {" "}
              Descrição:{" "}
            </label>
            <input
              id="descricao"
              placeholder="Sinopse do Jogo"
              type="text"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>
          <div>
            <label className="AdicionaJogoModal__text" htmlFor="distribuidora">
              {" "}
              Distribuidora:{" "}
            </label>
            <input
              id="distribuidora"
              placeholder="Distribuidora"
              type="text"
              value={state.distribuidora}
              onChange={(e) => handleChange(e, "distribuidora")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaJogoModal__text  AdicionaJogoModal__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecionar Imagem " : state.foto}
            </label>
            <input
              className=" AdicionaJogoModal__foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>

          <button
            className="AdicionaJogoModal__enviar"
            type="button"
            disabled={canDisable}
            onClick={handleSend}
          >
            {ActionMode.NORMAL === mode ? "Enviar" : "Atualizar"}
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaJogoModal;
