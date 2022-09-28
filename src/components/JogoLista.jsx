import { jogos } from "../mocks/jogos.js";
import "./JogoLista.css";

function JogoLista() {
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
            <div className="JogoListaItem__acoes Acoes">
              <button className="Acoes__adicionar Acoes__adicionar--preencher">
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
