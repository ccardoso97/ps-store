import "./JogoLista.css";

function JogoLista() {
  return (
    <div className="JogoLista">
      <div className="JogoListaItem">
        <div>
          <div className="JogoListaItem__titulo">God Of War: Ragnarok</div>
          <div className="JogoListaItem__preco">R$299.99</div>
          <div className="JogoListaItem__descricao">
            Junte-se a Kratos e Atreus em uma jornada mítica à procura de
            respostas na iminência do Ragnarök. Juntos, pai e filho arriscarão
            tudo viajando por cada um dos Nove Reinos.
          </div>
          <div className="JogoListaItem__genero">Fantasia/Ação</div>
          <div className="JogoListaItem__distribuidora">Sony</div>
          <div className="JogoListaItem__acoes Acoes">
            <button className="Acoes__adicionar Acoes__adicionar--preencher">
              Adicionar
            </button>
          </div>
        </div>
        <img className="JogoListaItem__foto" src="" alt="" />
      </div>
    </div>
  );
}

export default JogoLista;
