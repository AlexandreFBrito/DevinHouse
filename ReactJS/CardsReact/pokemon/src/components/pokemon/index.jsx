import { handleGenerateBg } from "../../utils";

const Pokemon = ({photo, name, hp, attack, defense, types}) =>{

    const typeColor = handleGenerateBg(types[0]);

    return(
        <div className="pokemon" style={{background: typeColor}}>
        <img src={photo}
              alt={name}
              className="pokemon-image"/>
        
        <h2>{name}</h2>

        <ul className='pokemon-info'>
          <li>HP: {hp}</li>
          <li>Attack: {attack}</li>
          <li>Defense: {defense}</li>
        </ul>

        <div>
          {types.join(" / ")}
        </div>
      </div>
    );

}


export default Pokemon