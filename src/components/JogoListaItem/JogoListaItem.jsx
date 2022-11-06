import "./JogoListaItem.css";
import { ActionMode } from "constants/index";

function JogoListaItem({
  jogo,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode
}) {
  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="JogoListaItem__badge"> {quantidadeSelecionada} </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  return (
    <div className={`JogoListaItem`} onClick={() => clickItem(jogo.id)}>
      {badgeCounter (quantidadeSelecionada, index)}
      <div>
        <div className="JogoListaItem__titulo">{jogo.titulo}</div>
        <div className="JogoListaItem__preco">R${jogo.preco}</div>
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
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
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
