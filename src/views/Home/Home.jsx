import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import JogoLista from "components/JogoLista/JogoLista";
import AdicionaEditaJogoModal from "components/AdicionaEditaJogoModal/AdicionaEditaJogoModal";
import { useState } from "react";
import { ActionMode } from "constants/index";

function Home() {

  const [canShowAdicionaJogoModal, setCanShowAdicionaJogoModal] =
    useState(false);
  const [jogoParaAdicionar, setJogoParaAdicionar] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };
  const handleCloseModal = () => {
    setCanShowAdicionaJogoModal(false);
    setJogoParaAdicionar();
    setJogoParaDeletar();
    setJogoParaEditar();
  }
  const [jogoParaEditar, setJogoParaEditar] = useState();
  const [jogoParaDeletar, setJogoParaDeletar] = useState();
  const handleDeleteJogo = (jogoToDelete) => {
    setJogoParaDeletar(jogoToDelete);
  }
  const handleUpdateJogo = (jogoToUpdate) => {
    setJogoParaEditar(jogoToUpdate);
    setCanShowAdicionaJogoModal(true);
  }
  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createJogo={() => setCanShowAdicionaJogoModal(true)}
        updateJogo={() => handleActions(ActionMode.ATUALIZAR)}
      />
      <div className="Home__container">
        <JogoLista
          mode={modoAtual}
          jogoCriado = {jogoParaAdicionar}
          deleteJogo={handleDeleteJogo}
          updateJogo={handleUpdateJogo}/>
        {canShowAdicionaJogoModal && (
          <AdicionaEditaJogoModal
          mode={modoAtual}
          jogoToUpdate={jogoParaEditar}
          closeModal={handleCloseModal}
          onCreateJogo={(jogo) => setJogoParaAdicionar(jogo)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
