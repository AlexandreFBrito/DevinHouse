const frutas = ['banana', 'manga', 'maçã', 'limão', 'morango'];

const arrowFunction = () => {
    frutas.forEach(function(item){
        return console.log(item);
    });
    
}
arrowFunction();