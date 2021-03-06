class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.loaned = false;
    }

    loanBook() {
        if(this.loaned == true){
            return 'Esse livro está emprestado'
        }else{
            this.loaned = true;
            return 'Livro devolvido'
        }
    }

    returnBook() {
        if(this.loaned == false){
            return 'Esse livro não  está emprestado'
        }else{
            this.loaned = false;
            return 'Livro devolvido'
        }
    }

    static sortBooksByDate(booksArray) {
        const sortedBooksArray = booksArray.sort((a, b) => {
            if (a.year !== b.year) return a.year - b.year;
        });

        return sortedBooksArray;
    }
}

class HQ extends Book {
    constructor(title, author, year, illustrator) {
        super(title, author, year);
        this.illustrator = illustrator;
    }
}

const twilight = new Book("Twilight", "Stephenie Meyer", 2005);
twilight.loanBook();
twilight.loaned = true;
console.log(twilight);

const trialsOfApollo = new Book("The Tower of Nero", "Rick Riordan", 2020);
const umbrellaAcademy = new HQ("Umbrella Academy", "Gerard Way", 2008, "Gabriel Bá");

const sortedBooks = Book.sortBooksByDate([twilight, trialsOfApollo, umbrellaAcademy]);
//console.log('sortedBooks', sortedBooks);