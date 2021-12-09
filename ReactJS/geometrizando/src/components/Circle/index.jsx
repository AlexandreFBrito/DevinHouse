const Circle = (props) =>{
    return(
        <div className="container">
            <div 
                style={{background: props.background}}
                className="circle"    
            ></div>
        </div>
    );
}

export default Circle