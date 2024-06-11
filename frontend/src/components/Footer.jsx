import style from './footer.module.css';

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerSection}>
                    <h3>Sobre Nós</h3>
                    <p>Somos a principal plataforma de apostas online, oferecendo uma experiência segura e divertida para todos os nossos usuários.</p>
                </div>
                <div className={style.footerSection}>
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="/Login">Login</a></li>
                        <li><a href="/Cadastro">Cadastro</a></li>
                        <li><a href="/Jogo">Apostas</a></li>
                        <li><a href="/Deposito">Depósitos</a></li>
                    </ul>
                </div>
                <div className={style.footerSection}>
                    <h3>Contato</h3>
                    <p>Email: suporte@ask.com</p>
                    <p>Telefone: (11) 4002-8922</p>
                    <p>Endereço: Condado de Kane, 123, Newark, Nova Jersey</p>
                </div>
            </div>
            <div className={style.footerBottom}>
                <p>&copy; 2024 As'k, Site de Apostas. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
