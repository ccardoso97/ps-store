import "./JogoDetalhesModal.css";
import Modal from "components/Modal/Modal";

function JogoDetalhesModal({ jogo, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="JogoDetalhesModal">
        <div>
          <div className="JogoDetalhesModal__titulo"> {jogo.titulo} </div>
          <div className="JogoDetalhesModal__preco">
            {" "}
            R$ {Number(jogo.preco).toFixed(2)}{" "}
          </div>
          <div className="JogoDetalhesModal__descricao">
            {" "}
            <b>Titulo: </b> {jogo.titulo}{" "}
          </div>
          {jogo.genero && (
            <div className="JogoDetalhesModal__descricao">
              {" "}
              <b>Gênero: </b> {jogo.genero}{" "}
            </div>
          )}
          <div className="JogoDetalhesModal__descricao">
            {" "}
            <b>Descrição: </b> {jogo.descricao}{" "}
          </div>
        </div>

      </div>
    </Modal>
  );
}

export default JogoDetalhesModal;