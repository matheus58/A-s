import { Carrosel } from "../components/Carrosel";

export function Home() {
  return (
    <>
      <main>
        <Carrosel />
        <div>
          <div className="container overflow-hidden">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3">
                  <div className="card" alt="card-carteira">
                    <img src="src/img/carteira.webp" alt="" />
                    <div className="card-body">
                      <h5 className="card-title text-center">Carteira</h5>
                      <p className="card-text">Deposite seu dinheiro para começar a multiplicá-lo</p>
                      <div className="d-flex justify-content-center">
                        <a href="/Deposito" className="btn btn-primary">Ir para carteira</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <div className="card" alt="card-apostas">
                    <img src="src/img/005.webp" alt="" />
                    <div className="card-body">
                      <h5 className="card-title text-center">Jogo</h5>
                      <p className="card-text">Deposite seu dinheiro para começar a multiplicá-lo</p>
                      <div className="d-flex justify-content-center">
                        <a href="/Jogo" className="btn btn-primary">Ir para jogo</a>
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
