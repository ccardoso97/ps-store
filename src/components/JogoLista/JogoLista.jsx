
import "./JogoLista.css";
import { JogoService } from "services/JogoService";
import { useState, useEffect } from "react";
import JogoListaItem from "components/JogoListaItem/JogoListaItem";

function JogoLista() {
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
        />
      ))}
    </div>
  );
}

export default JogoLista;
