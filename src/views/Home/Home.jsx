import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import JogoLista from "components/JogoLista/JogoLista";
import AdicionaJogoModal from "components/AdicionaJogoModal/AdicionaJogoModal";
import { useState } from "react";

function Home() {
  const [canShowAdicionaJogoModal, setCanShowAdicionaJogoModal] =
    useState(false);
  const [jogoParaAdicionar, setJogoParaAdicionar] = useState();

  return (
    <div className="Home">
      <Navbar createJogo={() => setCanShowAdicionaJogoModal(true)} />
      <div className="Home__container">
        <JogoLista jogoCriado={jogoParaAdicionar}/>
        {canShowAdicionaJogoModal && (
          <AdicionaJogoModal
            closeModal={() => setCanShowAdicionaJogoModal(false)}
            onCreateJogo={(jogo) => setJogoParaAdicionar(jogo)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
