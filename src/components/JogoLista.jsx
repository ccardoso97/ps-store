import { jogos } from "../mocks/jogos.js";
import "./JogoLista.css";
import { useState } from "react";

function JogoLista() {
  const [jogoSelecionado, setjogoSelecionado] = useState({});

  const adicionarItem = (jogoIndex) => {
    const jogo = { [jogoIndex]: Number(jogoSelecionado[jogoIndex] || 0) + 1 };
    setjogoSelecionado({ ...jogoSelecionado, ...jogo });
  };
  return (
    <div className="JogoLista">
      {jogos.map((jogo, index) => (
        <div className="JogoListaItem" key={`JogoListaItem-${index}`}>
          <div>
            <div className="JogoListaItem__titulo">{jogo.titulo}</div>
            <div className="JogoListaItem__preco">
              R${jogo.preco.toFixed(2)}
            </div>
            <img
              className="JogoListaItem__foto"
              src={jogo.foto}
              alt={jogo.titulo}
            />
            <div className="JogoListaItem__descricao">{jogo.descricao}</div>
            <div className="JogoListaItem__genero">{jogo.genero}</div>
            <div className="JogoListaItem__distribuidora">
              {jogo.distribuidora}
            </div>
            <span className="JogoListaItem__badge"> {jogoSelecionado[index] || 0} </span>
            <div className="JogoListaItem__acoes Acoes">
              <button
                className="Acoes__adicionar Acoes__adicionar--preencher"
                onClick={() => adicionarItem(index)}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JogoLista;
