import style from './footer.module.css'

export function Footer(){
    return(
        <>
        <footer>
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
                        <li><a href="/Deposito">Depositos</a></li>
                    </ul>
                </div>
                <div className={style.footerSection}>
                    <h3>Contato</h3>
                    <p>Email: suporte@siteapostas.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                    <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
                </div>
            </div>
            <div className={style.footerBottom}>
                <p>&copy; 2024 Site de Apostas. Todos os direitos reservados.</p>
            </div>
        </footer>
        </>
    )
}