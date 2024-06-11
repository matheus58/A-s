import style from './slotMachine.module.css';

export function SlotMachine() {
  return (
    <div className={style.jogoBackground}>
      <div className={style.jogoContainer}>
        <div className={style.jogoSlotMachine}>
          <div className={style.jogoSlot}>
            <img src="chip.png" alt="Chip" />
          </div>
          <div className={style.jogoSlot}>
            <img src="chip.png" alt="Chip" />
          </div>
          <div className={style.jogoSlot}>
            <img src="chip.png" alt="Chip" />
          </div>
        </div>
        <div className={style.jogoControls}>
          <div className={style.jogoBalance}>
            <span>Saldo: R$</span>
            <input type="text" readOnly value="100" />
          </div>
          <div className={style.jogoBet}>
            <button>-</button>
            <input 
              type="text" 
              placeholder="Digite o valor da aposta" 
              inputMode="numeric"
              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
            />
            <button>+</button>
          </div>
        </div>
        <div className={style.jogoButtons}>
          <div className={style.jogoButtonGroup}>
            <button className={style.jogoPlayButton}>Play</button>
            <button className={style.jogoExitButton}>Sair</button>
          </div>
          <button className={style.jogoDeleteButton}>Deletar Saldo</button>
        </div>
      </div>
    </div>
  );
}
