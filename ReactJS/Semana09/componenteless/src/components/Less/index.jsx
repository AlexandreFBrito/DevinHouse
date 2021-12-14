import { useState } from "react";

function LessText({ texto, tamanho }) {

    const [hidden, setHidden] = useState(true);

    if (texto.length <= tamanho) {
        return <span>{texto}</span>
    }

    return (
        <>

            <span>
                {hidden ? `${texto.substring(0, tamanho).trim()} ...` : texto}
                {hidden ? (
                    <a href="#" onClick={() => setHidden(false)}>Ler Mais</a>
                ) : (<a href="#" onClick={() => setHidden(true)}>Ler Menos</a>)}
            </span>

        </>
    );

}

/* function LessText({texto, tamanho}){    
   
    const [tamanhoReduzido, setTamanhoReduzido] = useState(texto.substring(0, tamanho));
    const [mostrar, setMostrar] = useState("Mostrar Mais");

    function textoTotal(){
        
        if(tamanhoReduzido.length === tamanho){
            setTamanhoReduzido(texto);
            setMostrar("Mostrar Menos");
        }else{
            setTamanhoReduzido(texto.substring(0, tamanho));
            setMostrar("Mostrar Mais");
        }
          
    }

    return(
        <>
            <span>{tamanhoReduzido} <a href="#" onClick={textoTotal}>{mostrar}</a></span>
        </>
    );
} */

export default LessText;