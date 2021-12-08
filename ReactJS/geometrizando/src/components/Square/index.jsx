function Square(props){
    
    return(
    //utiliza quando tem mais de uma div sem um pai
    <>
        <div className="container">
            <span>{props.titulo}</span>
            <div 
                style={{background: props.background, width: props.largura}}
                className="square"    
            ></div>
        </div>
    </>
    );
}

export default Square