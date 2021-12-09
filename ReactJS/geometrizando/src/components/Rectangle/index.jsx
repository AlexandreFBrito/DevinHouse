function Rectangle(props){
    return(
    //utiliza quando tem mais de uma div sem um pai
        <div>    
            <div 
                style={{background: props.background}}
                className="rectangle"    
            ></div>
        </div>
    );
}

export default Rectangle