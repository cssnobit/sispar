import Logo from "../../assets/tela-login/logo-ws.png";
import Capa from "../../assets/tela-login/imagem-tela-de-login.png";
import styles from "./Login.module.scss"; // importando a estilização de Login

function Login() {
    return (
        <main>
            <section className={styles.containerFoto}>
                {/*<img src={Capa} alt="imagem de um navio na capa" />*/}
            </section>

            <section className={styles.containerLogin}>
                <div className={styles.logoBox}>
                    <img src={Logo} alt="logo da wilson sons" />
                    <h2>Boas vindas ao Novo Portal SISPAR</h2>
                    <p>Sistema de Emissão de Boletos e Parcelamento</p>
                </div>

                <form action="" className={styles.formWrapper}>
                    <input type="email" placeholder="Email" name="email" id="email" />

                    <input type="password" placeholder="Senha" name="senha" id="senha" />

                    <a href="#">Esqueci minha senha</a>
                
                <div>
                    <button className={styles.buttonLogar}>Entrar</button>
                    <button className={styles.buttonCadastrar}>Criar Conta</button>
                </div>
                </form>
            
            </section>
        </main>
    );
}

export default Login;