import Logo from "../../assets/tela-login/logo-ws.png";
import Capa from "../../assets/tela-login/imagem-tela-de-login.png";

function Login() {
    return (
        <main>
            <section>
                <img src={Capa} alt="imagem de um navio na capa" />
            </section>

            <section>
                <img src={Logo} alt="logo da wilson sons" />
                <h2>Boas vindas ao Novo Portal SISPAR</h2>
                <p>Sistema de Emissão de Boletos e Parcelamento</p>

                <form action="">
                    <input type="email" placeholder="Email" name="email" id="email" />
                    <input type="password" placeholder="Senha" name="senha" id="senha" />
                    <a href="#">Esqueci minha senha</a>
                
                <div>
                    <button>Entrar</button>
                    <button>Criar Conta</button>
                </div>
                </form>
            
            </section>
        </main>
    );
}

export default Login;