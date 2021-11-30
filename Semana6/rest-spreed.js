const frameworks = ["vuejs", "angularjs", "reactjs"];
const [,,react] = frameworks;
console.log(react);

const personagem = {
    nome:"Samwise Gamgee",
    nascimento: "2983 da Terceira Era do Sol",
    familia:{
        esposa: "Rosinha Villha",
        melhorAmigo: "Frodo Bolseiro"
    }
};

const historiaDoPersonagem = ({nome, familia:{esposa, melhorAmigo}})=>{
    return `Meu nome é ${nome} e sou casado com ${esposa}. Gosto de ir em aventuras com meu melhor amigo ${melhorAmigo}.`
}

console.log(historiaDoPersonagem(personagem));


const frutas = ["morango", "pêssego", "banana"];
const legumes = ["cenoura", "batata", "abobrinha"];
const alimentos = [...frutas, ...legumes];
console.log(alimentos);



const usuario = {
    nome:"Alexandre",
    sobrenome: "Brito",
    interesses:["Programação", "Futebol", "Games"],
    familia:{
        pai:"Aristeu",
        mae:"Aracely",
        irma:"Verônica"
    }
}

const euMesmo = ({nome, sobrenome, interesses:[hobbie], familia:{mae}})=>{
    return `Meu nome é ${nome} ${sobrenome} e meu principal hobbie é ${hobbie}. O nome da minha mãe é ${mae}.`
}

console.log(euMesmo(usuario));