import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import JogoLista from "components/JogoLista/JogoLista";
function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <JogoLista />
      </div>
    </div>
  );
}

export default Home;
