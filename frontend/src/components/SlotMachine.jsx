import React, { useEffect, useRef } from 'react';
import style from './slotMachine.module.css';

const items = [
  '🍭',
  '❌',
  '⛄️',
  '🦄',
  '🍌',
  '💩',
  '👻',
  '😻',
  '💵',
  '🤡',
  '🦖',
  '🍎',
  '😂',
  '🖕',
];

function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

export default function SlotMachine() { // Exportação padrão
  const doorsRef = useRef([]);

  useEffect(() => {
    init();
  }, []);

  const init = (firstInit = true, groups = 1, duration = 1) => {
    doorsRef.current.forEach((door) => {
      if (!door) return; // Added null check for the door reference

      if (firstInit) {
        door.dataset.spinned = '0';
      } else if (door.dataset.spinned === '1') {
        return;
      }

      const boxes = door.querySelector(`.${style.boxes}`);
      if (!boxes) return; // Added null check for boxes

      const boxesClone = boxes.cloneNode(false);
      const pool = ['❓'];

      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));

        boxesClone.addEventListener(
          'transitionstart',
          function () {
            door.dataset.spinned = '1';
            this.querySelectorAll(`.${style.box}`).forEach((box) => {
              box.style.filter = 'blur(1px)';
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          'transitionend',
          function () {
            this.querySelectorAll(`.${style.box}`).forEach((box, index) => {
              box.style.filter = 'blur(0)';
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement('div');
        box.classList.add(style.box);
        box.style.width = door.clientWidth + 'px';
        box.style.height = door.clientHeight + 'px';
        box.style.fontSize = '40px'; // Increased font size for emojis
        box.textContent = pool[i];
        boxesClone.appendChild(box);
      }
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
      door.replaceChild(boxesClone, boxes);
    });
  };

  const spin = async () => {
    init(false, 1, 2);

    for (const door of doorsRef.current) {
      if (!door) continue; // Added null check for the door reference
      const boxes = door.querySelector(`.${style.boxes}`);
      if (!boxes) continue; // Added null check for boxes
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = 'translateY(0)';
      await new Promise((resolve) => setTimeout(resolve, duration * 1000));
    }
  };

  return (
    <div className={style.jogoBackground}>
      <div className={style.jogoContainer}>
        <div className={style.jogoSlotMachine}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={style.jogoSlot} key={index} ref={(el) => (doorsRef.current[index] = el)}>
              <div className={style.boxes}></div>
            </div>
          ))}
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
              onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
            />
            <button>+</button>
          </div>
        </div>
        <div className={style.jogoButtons}>
          <div className={style.jogoButtonGroup}>
            <button className={style.jogoPlayButton} onClick={spin}>
              Play
            </button>
            <button className={style.jogoExitButton} onClick={() => init()}>
              Sair
            </button>
          </div>
          <button className={style.jogoDeleteButton}>Deletar Saldo</button>
        </div>
      </div>
    </div>
  );
}
