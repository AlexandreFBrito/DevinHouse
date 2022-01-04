const Cards = ({photo, name, profissao, bio}) =>{

    return(
        <div className="card" style={{background: "White"}}>
        <img src={photo}
              alt={name}
              className="card-image"/>
        
        <h2 className="name">{name}</h2>
        <h3 className="profissao">{profissao}</h3>
        <div>
        <h2>Bio:</h2>
          {bio}
        </div>
      </div>
    );

}

export default Cards