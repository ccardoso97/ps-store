import "./Navbar.css";
import { ActionMode } from "constants/index";
import carrinho from "assets/icons/carrinho.png";
import logo from "assets/logo.png";
import plus from "assets/icons/plus.png";
import atualizar from "assets/icons/update.png";

function Navbar({ createJogo, updateJogo, mode }) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo Game Store"
            className="Logo__icone"
          />
          <span className="Logo__titulo"></span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__jogo Plus ${
              mode === ActionMode.ATUALIZAR && "Jogo--ativo"
            }`}
            onClick={() => updateJogo()}
          >
            <img
              src={atualizar}
              width="30px"
              className="Plus__icone"
              alt="Editar jogo"
            />
          </button>
          <button
            type="button"
            className="Opcoes__jogo Plus"
            onClick={() => createJogo()}
          >
            <img
              src={plus}
              width="30px"
              className="Plus__icone"
              alt="Adiconar jogo"
            />
          </button>

          <div className="Opcoes__sacola Sacola">
            <img
              src={carrinho}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
