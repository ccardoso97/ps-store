import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import JogoLista from "components/JogoLista/JogoLista";
import AdicionaJogoModal from "components/AdicionaJogoModal/AdicionaJogoModal";
import { useState } from "react";


function Home() {
  const [canShowAdicionaJogoModal, setCanShowAdicionaJogoModal] =
    useState(false);
    const [jogoParaAdicionar, setJogoParaAdicionar] = useState();
    {
      canShowAdicionaJogoModal &&
      <AdicionaJogoModal
          closeModal={() => setCanShowAdicionaJogoModal(false)}
          onCreateJogo={(jogo) => setJogoParaAdicionar(jogo)}
          />
    }    
  return (
    <div className="Home">
      <Navbar createJogo={() => setCanShowAdicionaJogoModal(true)} />
      <div className="Home__container">
        <JogoLista />
        {canShowAdicionaJogoModal && (
          <AdicionaJogoModal
            closeModal={() => setCanShowAdicionaJogoModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
