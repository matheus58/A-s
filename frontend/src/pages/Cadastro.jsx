import styles from './cadastro.module.css'

export function Cadastro(){
    return(
        <>
        <div className={styles.cadastro}>
            <img src="src/img/logo.png" alt="" className={styles.logo}/>
            <form action="Cadastro_usuario">
                 <h1>Cadastro</h1>

                <label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id ="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Nome usuario" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span class="input-group-text" id="basic-addon2">@gmail.com</span>
                    </div>
                    <div class="input-group mb-3">
                        <input type="date" class="form-control" placeholder="Idade"  aria-describedby="basic-addon2"/>
                        <span class="input-group-text" id="basic-addon2">Data de nacimento</span>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="senha"  aria-describedby="basic-addon2"/>
                        <span class="input-group-text" id="basic-addon2">Senha</span>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="confirmar senha"  aria-describedby="basic-addon2"/>
                        <span class="input-group-text" id="basic-addon2">Senha</span>
                    </div>
                    <div className= {styles.butoes}>
                        <button type="button" class="btn btn-primary btn-sm">Cadastrar</button>
                        <button type="button" class="btn btn-secondary btn-sm">Cancelar</button>                        
                    </div>
                </label>
            </form>
        </div>
        </>
    )
}