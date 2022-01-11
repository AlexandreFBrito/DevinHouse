export function media(...notas){
    let nota = 0;
    notas.forEach(notas => nota += notas);
    
    return nota/notas.length;
}

