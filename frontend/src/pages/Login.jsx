import styles from './login.module.css'
export function Login(){
    return(
        <>
        <div  className={styles.cadastro}>
        <img src="src/img/logo.png" alt="" className={styles.logo}/>
            <form action="Login">
                <h1>Login</h1>
                <label >
                    <div class="input-group mb-3">
                        <span class="input-group-text" id ="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Nome usuario" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="senha"  aria-describedby="basic-addon2"/>
                        <span class="input-group-text" id="basic-addon2">Senha</span>
                    </div>
                    <div className={styles.butoes }>
                        <button type="button" class="btn btn-primary btn-sm">Logar</button>
                        <button type="button" class="btn btn-secondary btn-sm">Cancelar</button>                        
                    </div>
                </label>
            </form>
        </div>
        </>
    )
}