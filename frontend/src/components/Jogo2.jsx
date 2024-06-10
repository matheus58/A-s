import React, { useEffect, useRef } from 'react';
import './Jogo2.css'; // Importa o arquivo CSS

export function Jogo2() {
    const debugEl = useRef(null);
    const reels = useRef([]);
    const iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
    const icon_width = 79;
    const icon_height = 79;
    const num_icons = 9;
    const time_per_icon = 100;
    const indexes = useRef([0, 0, 0]);

    // Função para rolar um carretel
    const roll = (reel, offset = 0) => {
        const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
        
        return new Promise((resolve) => {
            const style = getComputedStyle(reel);
            const backgroundPositionY = parseFloat(style["background-position-y"]);
            const targetBackgroundPositionY = backgroundPositionY + delta * icon_height;
            const normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);
            
            setTimeout(() => {
                reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
                reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
            }, offset * 150);
            
            setTimeout(() => {
                reel.style.transition = `none`;
                reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
                resolve(delta % num_icons);
            }, (8 + 1 * delta) * time_per_icon + offset * 150);
        });
    };

    useEffect(() => {
        reels.current = document.querySelectorAll('.reel, .real');
    }, []);

    return (
        <>
            <div className="slots">
                <div className="reel"></div>
                <div className="real"></div>
                <div className="real"></div>
            </div>
            <div id="debug" ref={debugEl} className="debug"></div>
            <img style={{ position: 'fixed', left: 0, top: 0, height: '100vh', width: 'auto' }} src="https://assets.codepen.io/439000/slotreel.webp" alt="" />
            <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/josfabre/pens/public" style={{ position: 'fixed', left: '8em', top: '1em', fontFamily: 'Sans-Serif', color: '#333', fontSize: '13px', textDecoration: 'none', textTransform: 'uppercase', padding: '0.5em 1em', border: '1px solid #333', borderRadius: '6px', opacity: 0.9 }}>All my pens</a>
        </>
    );
}
