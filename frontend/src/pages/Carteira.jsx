import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import styles from './carteira.module.css';

export function Carteira() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Gerenciamento de Conta</div>
            <div className={styles.form}>
                <label className={styles.label}>
                    Nome Exibido
                    <input type="text" className={styles.input} placeholder="Seu nome aqui" disabled />
                </label>
                <label className={styles.label}>
                    Data Nascimento
                    <input type="text" className={styles.input} placeholder="00/00/0000" disabled />
                </label>
            </div>
            <div className={styles.buttons}>
                {/* Use o Link para redirecionar para a página de edição */}
                <Link to="/Edicao" className={styles.editButton}>Editar Informações</Link>
                <button className={styles.deleteButton}>Excluir Conta</button>
            </div>
        </div>
    );
}
