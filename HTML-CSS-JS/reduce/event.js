const content = document.querySelector('.content');

const names = ['Cesar', 'Laura', 'Rogerio'];

const reducedNames = names.reduce((acc, name) => (acc += `<p>${name}</p>`), '');

content.innerHTML = reducedNames;

/* const carInfo = [
    {carName: 'BMW', price: 5000, category: 'Sport'},
    {carName: 'For', price: 1000, category: 'Casual'},
    {carName: 'Gyundai', price: 2000, category: 'Old'},
    {carName: 'Ferrai', price: 10000, category: 'Sport'}
];

//filtrou por categoria, depois fez o map e multiplicou por 2, depois reduziu e somou
const carSportSum = carInfo
    .filter((car) => car.category === 'Sport')
    .map((car) => car.price * 2)
    .reduce((total, car) => (total += car));

console.log(carSportSum);
 */



/* const reduceExample = numbers.reduce((acumulador, numero, indice, arrayoriginal) =>{
    console.log(acumulador, "Acumulador - Valor retornado na ultima iteração");
    console.log(numero, "Numero atual");
    console.log(indice, "Indice do array");
    console.log(arrayoriginal, "Array original");
    return acumulador += numero;
}, 0);

console.log(reduceExample); */