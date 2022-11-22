const ADD_BUTTON = document.querySelector('.addBook-btn');
const TITLE_INPUT = document.querySelector('#title');
const AUTHOR_INPUT = document.querySelector('#author');

//ADD BOOK popup
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay')
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//Add button creates new card, closes pop up and inputs object to array

ADD_BUTTON.addEventListener('click', e => {
    e.preventDefault();
    addBookToLibrary();
    // resets inputs
    TITLE_INPUT.value = '';
    AUTHOR_INPUT.value = '';
})

//book constructor for myLibrary array
class Book {
    constructor (title, author) {
    this.title = TITLE_INPUT.value;
    this.author = AUTHOR_INPUT.value;
    } 
}

let myLibrary = [];
let newBook;

function addBookToLibrary(){
    newBook = new Book(title, author);
    myLibrary.push(newBook)
    newBookCard();
    }

function newBookCard() {
    //prevents duplicating books in array when function is called
    const LIBRARY = document.getElementById('card-container');
    const BOOKS = document.querySelectorAll('.book-card');
    BOOKS.forEach(book => LIBRARY.removeChild(book));

    for (let i=0; i < myLibrary.length; i++){
        createBookInfo(myLibrary[i]) }
}

function createBookInfo(info){
    const LIBRARY = document.getElementById('card-container')
    const NEW_CARD = document.createElement('div');
    const NEW_TITLE = document.createElement('div');
    const NEW_AUTHOR = document.createElement('div');
    const REMOVE = document.createElement('button');
    const RMV_IMAGE = new Image();
    const RMV_DIV = document.createElement('div');
    const READ = document.createElement('input');
    const LABEL = document.createElement('label');
    const READ_DIV = document.createElement('div');
    

    NEW_CARD.className = 'book-card';
    NEW_CARD.setAttribute('id', myLibrary.indexOf(info))
    
    REMOVE.setAttribute('id', 'removeBtn');
    RMV_IMAGE.src = 'images/trash-can-outline.png';
    RMV_DIV.className = 'remove';

    NEW_CARD.appendChild(RMV_DIV);
    RMV_DIV.appendChild(REMOVE);
    REMOVE.appendChild(RMV_IMAGE);

    NEW_TITLE.className = 'book-title';
    NEW_TITLE.textContent = `${info.title}`
    NEW_CARD.appendChild(NEW_TITLE)

    
    NEW_AUTHOR.className = 'book-author';
    NEW_AUTHOR.textContent = `${info.author}`
    NEW_CARD.appendChild(NEW_AUTHOR)


    READ.type = 'checkbox';
    READ.name = 'read';
    READ.id = 'read';

    LABEL.htmlFor = 'read'
    LABEL.id = 'readLabel'
    LABEL.appendChild(document.createTextNode('Read'));

    READ_DIV.className = 'checkbox';

    NEW_CARD.appendChild(READ_DIV);
    READ_DIV.appendChild(READ);
    READ_DIV.appendChild(LABEL);

    LIBRARY.appendChild(NEW_CARD)

    REMOVE.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(info),1);
    newBookCard();
    });
    
}


