import styles from "./Reembolsos.module.scss";
import HomeHeader from "../../assets/header/home-header.png";
import Seta from "../../assets/dashboard/seta.png";

import Analises from "../../assets/dashboard/analises.png";
import Historico from "../../assets/dashboard/historico.png";
import Reembolso from "../../assets/dashboard/reembolso.png";
import Navbar from "../navbar/Navbar.jsx";

import NumeroAnalises from "../../assets/dashboard/n-analises.png";
import NumeroSolicitados from "../../assets/dashboard/n-solicitados.png"
import NumeroAprovados from "../../assets/dashboard/n-aprovados.png";
import NumeroRejeitados from "../../assets/dashboard/n-rejeitados.png";

import SistemaAtualizado from "../../assets/dashboard/sistema-atualizado.png";


function Reembolsos() {
    return (
        <div className={styles.reembolsosContainer}>
            <Navbar />
            
            <div className={styles.conteudos}>
                <header>
                    <img src={HomeHeader} alt="Casinha do header" />
                    <img src={Seta} alt="Setinha do header" />
                    <h2>Reembolsos</h2>
                </header>

                <main>
                    <div>
                        <h1>Sistema de Reembolsos</h1>
                        <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                    </div>

                    <section className={styles.servicos}>
                        <article>
                            <img src={Reembolso} alt="imagem de botão reembolso" />
                            <h3>Solicitar Reembolso</h3>
                        </article>
                        <article>
                            <img src={Analises} alt="imagem de botão análise" />
                            <h3>Verificar Análises</h3>
                        </article>
                        <article>
                            <img src={Historico} alt="imagem de botão histórico" />
                            <h3>Histórico</h3>
                        </article>
                    </section>

                    <section className={styles.estatisticas}>
                        <div className={styles.estatisticaSolicitados}>
                            <img src={NumeroSolicitados} alt="icone de solicitados" />
                            <p><strong>182</strong> Solicitados</p>
                        </div>
                        <div className={styles.estatisticaAnalise}>
                            <img src={NumeroAnalises} alt="icone de em analise" />
                            <p><strong>74</strong> Em análise</p>
                        </div>
                        <div className={styles.estatisticaAprovados}>
                            <img src={NumeroAprovados} alt="icone de aprovados" />
                            <p><strong>195</strong> Aprovados</p>
                        </div>
                        <div className={styles.estatisticaRejeitados}>
                            <img src={NumeroRejeitados} alt="icone de rejeitados" />
                            <p><strong>42</strong> Rejeitados</p>
                        </div>
                    </section>

                    <section className={styles.containerSistema}>
                        <img src={SistemaAtualizado} alt="" />
                        <a href="">Sistema atualizado.</a>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Reembolsos;