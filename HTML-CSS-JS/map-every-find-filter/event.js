//Coneitos do MAP

/* const bankClients = [
    { name: 'Cesar', money: 4000 }, 
    { name: 'David', money: 9000 }, 
    { name: 'Megan', money: 10000 }]

const multiplyMoney = () => {
    console.log(bankClients.map((client, index) => {
        return {name: client.name, money: client.money * 2, id: index}
    }),
    );
}

multiplyMoney(); 

const carInfo = [
    {carName: 'BMW', price: 5000, category: 'Sport'},
    {carName: 'For', price: 1000, category: 'Casual'},
    {carName: 'Gyundai', price: 2000, category: 'Old'},
    {carName: 'Ferrai', price: 10000, category: 'Sport'}
];

const returnCarInfo = () => {
    console.log(carInfo.map((car) => {
        return car.carName;
    })
    );
}

returnCarInfo();*/

//conceitos do every
//retorna false ou true
/* const numbers = [2, 3, 4, 5, 6];

const checkNumbers = () => {
    console.log(numbers.every((number) => number > 10))
};

checkNumbers(); */

//conceitos find
//reotorna o primeiro valor que achar maior que 4
/* const numbers = [2, 3, 4, 5, 6];

const checkNumbers = () => {
    console.log(numbers.find((number) => number > 4))
};

checkNumbers(); */

//conceito filter
/* const numbers = [2, 3, 4, 5, 6];

const returnOdd = () =>{
    console.log(numbers.filter((number) => number % 2 ===0));
}

returnOdd(); */

/* const names = ['Amanda', 'Cesar', 'Ana', 'armando', 'Roberto', 'Carlos'];
//charAt retorna a letra da posição da string
const returnOdd = () =>{
    console.log(names.filter((name) => name.charAt(0) === 'A'));
}

returnOdd(); */

const carInfo = [
    {carName: 'BMW', price: 5000, category: 'Sport'},
    {carName: 'For', price: 1000, category: 'Casual'},
    {carName: 'Gyundai', price: 2000, category: 'Old'},
    {carName: 'Ferrai', price: 10000, category: 'Sport'}
]; 

const returnSportCars = () =>{
    console.log(carInfo.filter((car) => car.category === 'Sport'));
}

returnSportCars(); 
