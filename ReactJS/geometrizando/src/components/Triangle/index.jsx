function Triangle(props){
    return(
        <div>        
            <div 
                style={{borderBottomColor: props.background}}
                className="triangle"    
            ></div>
        </div>
    );
}

export default Triangle