import React, { useState } from 'react';
import styles from './cadastro.module.css';


export function Cadastro() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            setError("As senhas não coincidem");
            return;
        }

        const novoUsuario = {
            nome: nomeUsuario,
            nome_usuario: nomeUsuario,
            data_nascimento: dataNascimento,
            email: email,
            senha: senha,
        };

        try {
            await usuarioService.createUsuario(novoUsuario);
            setSuccess(true);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className={styles.cadastro}>
            <img src="src/img/logo.png" alt="" className={styles.logo}/>
            <form onSubmit={handleSubmit}>
                <h1>Cadastro</h1>
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>Usuário criado com sucesso!</p>}
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
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Idade"
                        aria-describedby="basic-addon2"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />
                    <span className="input-group-text" id="basic-addon2">Data de nascimento</span>
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
                <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirmar senha"
                        aria-describedby="basic-addon2"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                    <span className="input-group-text" id="basic-addon2">Confirmar Senha</span>
                </div>
                <div className={styles.butoes}>
                    <button type="submit" className="btn btn-primary btn-sm">Cadastrar</button>
                    <button type="button" className="btn btn-secondary btn-sm">Cancelar</button>                        
                </div>
            </form>
        </div>
    );
}