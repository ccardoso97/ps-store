import "./JogoListaItem.css";

function JogoListaItem({
  jogo,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
}) {
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="JogoListaItem__badge"> {quantidadeSelecionada} </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  return (
    <div className="JogoListaItem">
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="JogoListaItem__titulo">{jogo.titulo}</div>
        <div className="JogoListaItem__preco">R${jogo.preco.toFixed(2)}</div>
        <img
          className="JogoListaItem__foto"
          src={jogo.foto}
          alt={jogo.titulo}
        />
        <div className="JogoListaItem__descricao">{jogo.descricao}</div>
        <div className="JogoListaItem__genero">{jogo.genero}</div>
        <div className="JogoListaItem__distribuidora">{jogo.distribuidora}</div>
        <div className="JogoListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={() => onAdd(index)}
          >
            Adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
    </div>
  );
}

export default JogoListaItem;
