import React, { useState } from 'react';
import styles from './login.module.css';

export function Login() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await usuarioService.login({ nome_usuario: nomeUsuario, senha: senha });
            setSuccess(true);
            setError(null);
            console.log("Login bem-sucedido", response);
            // Redirecionar ou realizar outras ações após o login bem-sucedido
        } catch (err) {
            setError(err.message);
            setSuccess(false);
        }
    };

    return (
        <div className={styles.cadastro}>
            <img src="src/img/logo.png" alt="" className={styles.logo}/>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>Login realizado com sucesso!</p>}
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome usuário"
                        aria-describedby="basic-addon1"
                        value={nomeUsuario}
                        onChange={(e) => setNomeUsuario(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Senha"
                        aria-describedby="basic-addon2"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <span className="input-group-text" id="basic-addon2">Senha</span>
                </div>
                <div className={styles.butoes}>
                    <button type="submit" className="btn btn-primary btn-sm">Logar</button>
                    <button type="button" className="btn btn-secondary btn-sm">Cancelar</button>                        
                </div>
            </form>
        </div>
    );
}