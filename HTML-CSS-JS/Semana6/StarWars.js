const personagens = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
}, {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
}, {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
}, {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
}, {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}, {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male"
}, {
    "name": "Yoda", 
    "height": "66", 
    "mass": "17", 
    "hair_color": "white", 
    "skin_color": "green", 
    "eye_color": "brown", 
    "birth_year": "896BBY", 
    "gender": "male"
}, {
    "name": "Palpatine", 
    "height": "170", 
    "mass": "75", 
    "hair_color": "grey", 
    "skin_color": "pale", 
    "eye_color": "yellow", 
    "birth_year": "82BBY", 
    "gender": "male"
}];

// Obtenha todos os personagens que não tem gênero definido.
const semGenero = personagens.filter(personagem => personagem.gender == 'n/a');
//console.log("semGenero", semGenero);

// Confira se algum personagem tem massa menor do que 30.
const massaMenorQue30 = personagens.filter(personagem => personagem.mass < 30);
//console.log("massaMenorQue30", massaMenorQue30);

// Calcule a média da altura e massa de todos os personagens.
const massa = personagens.map(personagem => parseInt(personagem.mass));
const altura = personagens.map(personagem => parseInt(personagem.height));

const totalMassa = massa.reduce((total, atual) => total +atual);
const totalAltura = altura.reduce((total, atual) => total +atual);

const mediaMassa= totalMassa / personagens.length;
const mediaAltura = totalAltura / personagens.length;

//console.log(mediaMassa, mediaAltura);

// Encontre o primeiro personagem que é do gênero feminino.
const primeiroPersonagem = personagens.find(personagem => personagem.gender == "female");
//console.log("primeiroPersonagem", primeiroPersonagem);

// Obtenha uma lista de todos os personagens que tem altura maior que 150.
const alturaMaiorQue150 = personagens.filter(personagem => personagem.height > 150);
//console.log("alturaMaiorQue150", alturaMaiorQue150);

// Obtenha a média de altura de todos os personagens do gênero masculino que tem massa maior do que 50.
const homens = personagens
    .filter(personagem => personagem.gender === "male" && personagem.mass > 50);

const totalAlturaHomens = homens.reduce((total, atual) => {
    return total + Number(atual.height)
}, 0);

const mediaAlturaHomens = Math.floor(totalAlturaHomens / homens.length);
console.log('mediaAlturaHomens', mediaAlturaHomens);