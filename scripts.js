const ADD_BUTTON = document.querySelector('.addBook-btn');
const TITLE_INPUT = document.querySelector('#title-input');
const AUTHOR_INPUT = document.querySelector('#author-input');



function Book(title, author){
    this.title = TITLE_INPUT.value;
    this.author = AUTHOR_INPUT.value;
}

let myLibrary = [];
let newBook;

ADD_BUTTON.addEventListener('click', e => {
    e.preventDefault();
    newBookCard();
    addBookToLibrary();
    TITLE_INPUT.value = '';
    AUTHOR_INPUT.value = '';
})


function newBookCard() {
    const BOOKCARD_TITLE = document.createElement('div');
    BOOKCARD_TITLE.className = 'book-title';
    BOOKCARD_TITLE.textContent = `${TITLE_INPUT.value}`;

    const BOOKCARD_AUTHOR = document.createElement('div');
    BOOKCARD_AUTHOR.className = 'book-author';
    BOOKCARD_AUTHOR.textContent =`${AUTHOR_INPUT.value}`;
    
    const NEW_CARD = document.createElement('div');
    NEW_CARD.className = 'book-card';
    document.getElementById('card-container').append(NEW_CARD);
    NEW_CARD.append(BOOKCARD_TITLE);
    NEW_CARD.append(BOOKCARD_AUTHOR);
}


function addBookToLibrary(){
    newBook = new Book(title, author);
    myLibrary.push(newBook)
    console.log(myLibrary)
}