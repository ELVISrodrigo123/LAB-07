import React, { useState } from 'react';

export const RandomComponent = () => {
    const [randomValue, setRandomValue] = useState(0);

    const Generar = () => {
        const newValue = Math.floor(Math.random() * 100) + 1;
        setRandomValue(newValue);
        alert(newValue); 
    };

    const Restablecer = () => {
        setRandomValue(0);
    };

    return (
        <div>
            <h2>Número Random a generarse: {randomValue}</h2>
            <button onClick={Generar}>GENERAR NUMERO ALEATORIO</button>
            <button onClick={Restablecer}>VOLVER A 0</button>
        </div>
    );
};
