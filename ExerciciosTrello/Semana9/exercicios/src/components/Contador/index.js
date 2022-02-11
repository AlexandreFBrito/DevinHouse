import React, { useState, useEffect } from 'react';

function Contador() {
    const [cont, setCont] = useState(0);

    useEffect(() => {
        console.log("Renderizou");
    }, [cont]);
    return <>
            <h1>{cont}</h1>
            <button onClick={() => setCont(cont + 1)}>Mais</button>
            <button onClick={() => setCont(cont - 1)}>Menos</button>
        </>;
}

export default Contador;