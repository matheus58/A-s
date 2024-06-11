
export function Navbar(){
    return (
        <>
        <header>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand mb-0 h1" href="/Home">
                            <img
                                className="d-inline-block align-top"
                                src="src/img/logo.png" 
                                width="100" height="60"
                                style={{ marginLeft: '20px' }} 
                            />
                        </a>
                    </div>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> Menu </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" style={{ marginRight: 'auto' }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Jogo">Jogo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Deposito">Carteira</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Carteira">Editar Dados</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

