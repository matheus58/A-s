import React, { useState } from 'react';
import styles from './edicao.module.css';

export function Edicao() {
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSalvarInformacoes = () => {
        if (novaSenha === confirmarSenha) {
            // Aqui você pode adicionar a lógica para salvar as informações
            console.log('Informações salvas com sucesso!');
        } else {
            alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>Gerenciamento de Conta</div>
            <div className={styles.form}>
                <label className={styles.label}>
                    Alterar nome
                    <input type="text" className={styles.input} placeholder="Alterar nome" pattern="[A-Za-z\s]+" required />
                </label>
                <label className={styles.label}>
                    Senha
                    <input type="password" className={styles.input} placeholder="Digite sua senha" required />
                </label>
                <label className={styles.label}>
                    Nova Senha
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="Digite sua nova senha"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        required
                    />
                </label>
                <label className={styles.label}>
                    Confirmar Nova Senha
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="Confirme sua nova senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                    />
                </label>
                <label className={styles.label}>
                    Data Nascimento
                    <input type="date" className={styles.input} placeholder="00/00/0000" />
                </label>
            </div>
            <div className={styles.buttons}>
                <button className={styles.saveButton} onClick={handleSalvarInformacoes}>
                    Salvar Informações
                </button>
            </div>
        </div>
    );
}
