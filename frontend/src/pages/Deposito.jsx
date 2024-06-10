import styles from './deposito.module.css';

export function Deposito() {
    return (
        <main className={styles.carteiraContainer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.infoDeposito}>
                        <h2>Informações para depósito</h2>
                        <form>
                            <label htmlFor="nome" className={styles.label}>Nome</label>
                            <input type="text" id="nome" placeholder="Seu nome completo aqui" className={styles.inputText} />
                            
                            <label htmlFor="cpf" className={styles.label}>Número do CPF</label>
                            <input type="text" id="cpf" placeholder="000.000.000-00" className={styles.inputText} />
                            
                            <label htmlFor="nascimento" className={styles.label}>Data de nascimento</label>
                            <input type="text" id="nascimento" placeholder="00/00/00" className={styles.inputText} />
                            
                            <label htmlFor="cartao" className={styles.label}>Numeros do cartão</label>
                            <input type="text" id="cartao" placeholder="0000 0000 0000 0000" className={styles.inputText} />
                            
                            <label htmlFor="validade" className={styles.label}>Validade</label>
                            <input type="text" id="validade" placeholder="00/00" className={styles.inputText} />
                            
                            <label htmlFor="cvc" className={styles.label}>CVC</label>
                            <input type="text" id="cvc" placeholder="000" className={styles.inputText} />
                            
                            <div className={styles.buttons}>
                                <button type="button" className={styles.salvarCartao}>Salvar Cartão</button>
                                <button type="button" className={styles.sair}>Sair</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.saldoCarteira}>
                        <h2>Saldo da Carteira</h2>
                        <div>
                            <label htmlFor="valor-deposito" className={styles.label}>Valor para depósito</label>
                            <input type="text" id="valor-deposito" value="0.00 R$" readOnly className={styles.inputReadOnly} />
                        </div>
                        <div>
                            <label htmlFor="saldo-conta" className={styles.label}>Saldo da conta</label>
                            <input type="text" id="saldo-conta" value="0.00 R$" readOnly className={styles.inputReadOnly} />
                        </div>
                        <div>
                            <label htmlFor="quantia-saque" className={styles.label}>Digite quantia para saque</label>
                            <input type="text" id="quantia-saque" value="0.00 R$" className={styles.inputText} />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.adicionar}>Adicionar</button>
                            <button type="button" className={styles.editarInformacoes}>Editar</button>
                            <button type="button" className={styles.deletarInformacoes}>Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
