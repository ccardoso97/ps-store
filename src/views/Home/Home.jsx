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
  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createJogo={() => setCanShowAdicionaJogoModal(true)}
        updateJogo={() => handleActions(ActionMode.ATUALIZAR)}
      />
      <div className="Home__container">
        <JogoLista jogoCriado={jogoParaAdicionar} />
        {canShowAdicionaJogoModal && (
          <AdicionaEditaJogoModal
            closeModal={() => setCanShowAdicionaJogoModal(false)}
            onCreateJogo={(jogo) => setJogoParaAdicionar(jogo)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
