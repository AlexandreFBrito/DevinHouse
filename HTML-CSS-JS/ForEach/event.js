const content = document.querySelector('.content');

const changeContent = () => {
    const nemWords = ['Palavra um<br>', 'Palavra dois<br>', 'Palavra tres']

    nemWords.forEach((word) => {
        content.innerHTML = content.innerHTML + word;
    });
}


window.onload = function () {
    changeContent();
};



/* const numArray = [1, 2, 3, 4, 5, 6];

const chePar = () => {
    numArray.forEach((number) => {
        if(number % 2 ===0){
            console.log(number);
        }
    })
}

chePar();
 */


/* const names = ['junior', 'Michael', 'Cesar', 'Juliana'];


const checkNames = () => {
    names.forEach((name, index)=> {
        console.log(`Imprimindo o nome ${name} no indice ${index}`);
        if (name === 'Cesar') {
            console.log(`Nome: ${name}, no indice ${index}`);
        }
    });
}

checkNames(); */