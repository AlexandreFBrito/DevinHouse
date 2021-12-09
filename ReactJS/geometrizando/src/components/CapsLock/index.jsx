function CapsLock({children}) {
    const textoMaisculo = children.toUpperCase();
    return <div>{textoMaisculo}</div>
  }
  
  export default CapsLock