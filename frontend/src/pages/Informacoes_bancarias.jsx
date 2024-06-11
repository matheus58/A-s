import istyle from './informacoes_bancarias.module.css';

export function Informacoes_bancarias() {
    return (
        <>
            <main className={istyle.carteiraContainer}>
                <div className={istyle.container}>
                    <div className={istyle.content}>
                        <div className={istyle.infoDeposito}>
                            <h2>Informações para depósito</h2>
                            <form>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" placeholder="Seu nome completo aqui" />
                                
                                <label htmlFor="cpf">Número do CPF</label>
                                <input type="text" id="cpf" placeholder="000.000.000-00" />
                                
                                <label htmlFor="nascimento">Data de nascimento</label>
                                <input type="text" id="nascimento" placeholder="00/00/00" />
                                
                                <label htmlFor="cartao">Numeros do cartão</label>
                                <input type="text" id="cartao" placeholder="0000 0000 0000 0000" />
                                
                                <label htmlFor="validade">Validade</label>
                                <input type="text" id="validade" placeholder="00/00" />
                                
                                <label htmlFor="cvc">CVC</label>
                                <input type="text" id="cvc" placeholder="000" />
                                
                                <div className={istyle.buttons}>
                                    <button type="button" className={istyle.salvarCartao}>Salvar Cartão</button>
                                    <button type="button" className={istyle.sair}>Sair</button>
                                </div>
                            </form>
                        </div>
                        <div className={istyle.saldoCarteira}>
                            <h2>Saldo da Carteira</h2>
                            <div>
                                <label htmlFor="valor-deposito">Valor para depósito</label>
                                <input type="text" id="valor-deposito" value="0.00 R$" readOnly />
                            </div>
                            <div>
                                <label htmlFor="saldo-conta">Saldo da conta</label>
                                <input type="text" id="saldo-conta" value="0.00 R$" readOnly />
                            </div>
                            <div>
                                <label htmlFor="quantia-saque">Digite quantia para saque</label>
                                <input type="text" id="quantia-saque" value="0.00 R$" />
                            </div>
                            <button className={istyle.adicionar}>adicionar</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
