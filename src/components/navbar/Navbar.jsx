import Deslogar from "../../assets/header/sair.png";
import BtnHistorico from "../../assets/header/btn-historico.png";
import BtnPesquisa from "../../assets/header/btn-pesquisa.png";
import BtnReembolso from "../../assets/header/btn-reembolso.png";
import UsuarioIcon from "../../assets/header/usuario-icon.png";
import RecolherMenu from "../../assets/header/fechar-header.png";
import Home from "../../assets/header/home-icon.png";
import styles from "./Navbar.module.scss";

import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav>
            <button className={styles.botaoNavBar}><img src={RecolherMenu} alt="botão de recolher menu" /></button>

            <img src={UsuarioIcon} alt="ícone de usuário" />

            <div>
                <button onClick={() => { navigate("/reembolsos") }}><img src={Home} alt="botao tela inicial" /></button>
                <button onClick={() => { navigate("/solicitacao") }}><img src={BtnReembolso} alt="botao de reembolso" /></button>
                <button><img src={BtnPesquisa} alt="botao de pesquisa" /></button>
                <button><img src={BtnHistorico} alt="botao de historico" /></button>
            </div>

            <button onClick={() => { navigate("/") }} className={`${styles.botaoNavBar} ${styles.botaoDeslogar}`}><img src={Deslogar} alt="botão de deslogar conta" /></button>
        </nav>
    )
}

export default Navbar;