import PropType from "prop-types";
import "./styles.css";

function Personagem({
dados
}) {
  return (
    <div className="content">
      <div className="card">
        <h2>{dados.name}</h2>
        <hr />
        <div className="person-data">
          <p>
            Ano de nascimento: <span>{dados.birth_year}</span>
          </p>
          <p>
            Sexo: <span>{dados.gender}</span>
          </p>
          <p>
            Peso (kg): <span>{dados.mass}</span>
          </p>
          <p>
            Altura (cm): <span>{dados.height}</span>
          </p>
          <p>
            Cor dos olhos: <span>{dados.eye_color}</span>
          </p>
          <p>
            Cor do cabelo: <span>{dados.hair_color}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Personagem.propTypes = {
  nome: PropType.string,
  nascimento: PropType.string,
  genero: PropType.string,
  peso: PropType.string,
  altura: PropType.string,
  corOlhos: PropType.string,
  corCabelo: PropType.string,
};

export default Personagem;