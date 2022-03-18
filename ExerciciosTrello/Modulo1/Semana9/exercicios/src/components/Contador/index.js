import React, { useState, useEffect } from 'react';

function Contador() {
    const [cont, setCont] = useState(0);

    useEffect(() => {
        if (cont < 0) {
            setCont(0);
            alert('O número não pode ser negativo');
        }
        if (cont > 20) {

            setCont(0);
            alert('Número máximo atingido! Resetando…');
        }
    }, [cont]);
    return <>
        <h1>{cont}</h1>
        <button onClick={() => setCont(cont + 1)}>Mais</button>
        <button onClick={() => setCont(cont - 1)}>Menos</button>
    </>;
}

export default Contador;