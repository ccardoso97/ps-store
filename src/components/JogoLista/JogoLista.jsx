import { JogoService } from "services/JogoService";
import { useState, useEffect } from "react";
import JogoListaItem from "components/JogoListaItem/JogoListaItem";
import "../JogoLista/JogoLista.css";
import JogoDetalhesModal from "components/JogoDetalhesModal/JogoDetalhesModal";

function JogoLista(jogoCriada ) {
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

  const adicionaJogoNaLista = (jogo) => {
    const lista = [...jogos, jogo];
    setJogos(lista);
};

useEffect(() => {
    if (jogoCriada) adicionaJogoNaLista(jogoCriada);
}, [jogoCriada]);

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="JogoLista">
      {jogos.map((jogo, index) => (
        <JogoListaItem
          key={`JogoListaItem-${index}`}
          jogo={jogo}
          quantidadeSelecionada={jogoSelecionado[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
          clickItem={(jogoId) => setJogoModal(jogo)}
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
