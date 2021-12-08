//com arrow function
//com desestruturação
const circle = ({titulo, background}) =>{
    
    return(
    //utiliza quando tem mais de uma div sem um pai
    <>
        <div className="container">
            <span>{titulo}</span>
            <div 
                style={{background: background}}
                className="circle"    
            ></div>
        </div>
    </>
    );
}

export default circle