import { JogoService } from "services/JogoService";
import { useState, useEffect, useCallback } from "react";
import JogoListaItem from "components/JogoListaItem/JogoListaItem";
import "../JogoLista/JogoLista.css";
import JogoDetalhesModal from "components/JogoDetalhesModal/JogoDetalhesModal";
import { ActionMode } from "constants/index";

function JogoLista(jogoCriado, mode, updateJogo, deleteJogo) {
  const [jogoModal, setJogoModal] = useState(false);

  const [jogos, setJogos] = useState([]);

  const [jogoSelecionado, setjogoSelecionado] = useState({});

  const adicionarItem = (jogoIndex) => {
    const jogo = { [jogoIndex]: Number(jogoSelecionado[jogoIndex] || 0) + 1 };
    setjogoSelecionado({ ...jogoSelecionado, ...jogo });
  };

  const removerItem = (jogoIndex) => {
    const jogo = { [jogoIndex]: Number(jogoSelecionado[jogoIndex] || 0) - 1 };
    setjogoSelecionado({ ...jogoSelecionado, ...jogo });
  };

  const getLista = async () => {
    const response = await JogoService.getLista();
    setJogos(response);
  };
  const getJogoById = async (jogoId) => {
    const response = await JogoService.getById(jogoId);
    const mapper = {
      [ActionMode.NORMAL]: () => setJogoModal(response),
      [ActionMode.ATUALIZAR]: () => updateJogo(response),
      [ActionMode.DELETAR]: () => deleteJogo(response),
    };

    mapper[mode]();
  }

  useEffect(() => {
    getLista();
  }, []);

  const adicionaJogoNaLista = useCallback(
    (jogo) => {
      const lista = [...jogos, jogo];
      setJogos(lista);
    },
    [jogos]
  );

  useEffect(() => {
    if (
      jogoCriado &&
      !jogos.map(({ id }) => id).includes(jogoCriado.id)
    ) {
      adicionaJogoNaLista(jogoCriado);
    }
  }, [adicionaJogoNaLista, jogoCriado, jogos]);

  useEffect(() => {
    if (jogoCriado) adicionaJogoNaLista(jogoCriado);
  }, [jogoCriado]);


  return (
    <div className="JogoLista">
      {jogos.map((jogo, index) => (
        <JogoListaItem
          mode={mode}
          key={`JogoListaItem-${index}`}
          jogo={jogo}
          quantidadeSelecionada={jogoSelecionado[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
          clickItem={(jogoId) => getJogoById(jogoId)}
        />
      ))}
      {jogoModal && (
        <JogoDetalhesModal
          jogo={jogoModal}
          closeModal={() => setJogoModal(false)}
        />
      )}
    </div>
  );
}

export default JogoLista;
