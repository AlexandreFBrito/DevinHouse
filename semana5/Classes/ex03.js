class Book {
    #title
    #author
    #year
    #loaned

    constructor(title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#loaned = false;
    }

    get title(){
        return this.#title;
    }
    get author(){
        return this.#author;
    }
    get year(){
        return this.#year;
    }
    get loaned(){
        return this.#loaned;
    }
    toJason(){
        return{
            title: this.title,
            author: this.author,
            year: this.year,
            loaned: this.loaned
        }
    }

    loanBook() {
        if(this.#loaned == true){
            return 'Esse livro está emprestado'
        }else{
            this.#loaned = true;
            return 'Livro devolvido'
        }
    }

    returnBook() {
        if(this.#loaned == false){
            return 'Esse livro não  está emprestado'
        }else{
            this.#loaned = false;
            return 'Livro devolvido'
        }
    }

    static sortBooksByDate(booksArray) {
        const sortedBooksArray = booksArray.sort((a, b) => {
            if (a.#year !== b.#year) return a.year - b.#year;
        });

        return sortedBooksArray.map(arr => arr.toJason());
    }
}

class HQ extends Book{
    #illustrator
    constructor(title, author, year, illustrator){
        super(title, author, year);
        this.#illustrator = illustrator;
    }
    get coverart(){
        return this.#illustrator;
    }
    toJason(){
        return{
            title: this.title,
            author: this.author,
            year: this.year,
            loaned: this.loaned,
            illustrator: this.illustrator
        }
    }
}

const GameOfThrones = new HQ("Batman – Year One ", "Frank Miller", 1988, "David Mazzucchellit");
console.log(GameOfThrones.toJason());
const dancedragon = new HQ("Batman: The Killing Joke", "illustrator;", 1988, "Brian Bolland, John Higgins");
console.log(dancedragon.toJason());
const sortedBooks = HQ.sortBooksByDate([GameOfThrones, dancedragon]);
//console.log(sortedBooks);
