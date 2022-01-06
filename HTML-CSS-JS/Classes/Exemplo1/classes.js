/* //Classes
class Aluno {
    constructor(nome){
        this._nome = nome;
    }

    //imprimirNome(){
    //    console.log(this._nome);
    //}

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }
}

const aluno = new Aluno("Zé");
//aluno.imprimirNome();
console.log(aluno.nome);
aluno.nome = "João";
console.log(aluno.nome);*/

//Classes(Hernaça)
class Aluno {
    constructor(nome){
        this._nome = nome;
    }
    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }
}

class AlunoGraduacao extends Aluno{
    constructor(nome, curso){
        super(nome);
        this._curso = curso;
    }

    get curso(){
        return this._curso;
    }

    set curso(novoCurso){
        return this.curso = novoCurso;
    }

}

const aluno = new Aluno("Zé");
const alunoGraduacao = new AlunoGraduacao("Zé", "Ciencia da computação");
console.log(aluno.nome);
console.log(alunoGraduacao.curso, alunoGraduacao.nome);

