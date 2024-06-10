import style from './slotMachine.module.css'

export function SlotMachine() {
  return (
    <>
      <div className={style.jogoBackground}>
        <div className={style.jogoContainer}>
          <div className={style.jogoSlotMachine}>
            <div className={style.jogoSlot + ' ' + style.jogoHighlighted}>
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
              <span>Saldo</span>
              <input type="text" readOnly />
            </div>
            <div className={style.jogoBet}>
              <button>-</button>
              <span>Valor por aposta</span>
              <button>+</button>
            </div>
          </div>
          <div className={style.jogoPlayButton}>
            <button>Play</button>
          </div>
          <button className={style.jogoExitButton}>Sair</button>
        </div>
      </div>
    </>
  )
}
