import { jogos } from "mocks/jogos.js";
import "./JogoLista.css";
import { useState } from "react";
import JogoListaItem from "components/JogoListaItem/JogoListaItem";

function JogoLista() {
  const [jogoSelecionado, setjogoSelecionado] = useState({});

  const adicionarItem = (jogoIndex) => {
    const jogo = { [jogoIndex]: Number(jogoSelecionado[jogoIndex] || 0) + 1 };
    setjogoSelecionado({ ...jogoSelecionado, ...jogo });
  };

  const removerItem = (jogoIndex) => {
    const jogo = { [jogoIndex]: Number(jogoSelecionado[jogoIndex] || 0) - 1 };
    setjogoSelecionado({ ...jogoSelecionado, ...jogo });
  };

  return (
    <div className="JogoLista">
      {jogos.map((jogo, index) => (
        <JogoListaItem
          key={`JogoListaItem-${index}`}
          jogo={jogo}
          quantidadeSelecionada={jogoSelecionado[index]}
          index={index}
        />
      ))}
    </div>
  );
}

export default JogoLista;
