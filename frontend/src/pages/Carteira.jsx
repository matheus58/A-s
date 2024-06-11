export function Carteira() {
    return (
        <>
            <main>
                <div className="text-center"> {/* Adicionando a classe text-center para centralizar as imagens */}
                    <div>
                        <div>
                            <div className="row g-2">
                                <div className="col-6">
                                    <div className="p-6">
                                        <div className="card" alt="Depositar">
                                            <img src="src/img/carteira.webp" alt="imagemSapoNaCarteira"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Depositar</h5>
                                                <p className="card-text">Deposite seu dinheiro atraves de um cartão para começar a jogar.</p>
                                                <a href="/Deposito" className="btn btn-primary">Ir para depósito</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-6">
                                        <div className="card" alt="Informações bancárias">
                                            <img src="src/img/002.webp" alt="imagemSaposNaMaquinaDeAposta"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Informações bancárias</h5>
                                                <p className="card-text">Edite seus dados bancários.</p>
                                                <a href="#" className="btn btn-primary">Ir para edição</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}