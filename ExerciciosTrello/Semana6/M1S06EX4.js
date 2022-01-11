const pessoa = (pNome, PSobrenome) => {
    let nome = pNome;
    let sobrenome = PSobrenome
    
    if(nome === ''){
        nome = 'Jane';
    }
    if(sobrenome === ''){
        sobrenome = 'Doe';
    }

    console.log(nome, sobrenome);
};
pessoa('Alexandre','Brito');