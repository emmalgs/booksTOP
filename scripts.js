const ADD_BUTTON = document.querySelector('.addBook-btn');
const TITLE_INPUT = document.querySelector('#title');
const AUTHOR_INPUT = document.querySelector('#author');

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay')

//ADD BOOK popup
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
function Book(title, author){
    this.title = TITLE_INPUT.value;
    this.author = AUTHOR_INPUT.value;
}

let myLibrary = [];
let newBook;

function addBookToLibrary(){
    newBook = new Book(title, author);
    myLibrary.push(newBook)
    newBookCard();
    }

function newBookCard() {
    const LIBRARY = document.getElementById('card-container');
    const BOOKS = document.querySelectorAll('.book-card');
    BOOKS.forEach(book => LIBRARY.removeChild(book));

    for (let i=0; i < myLibrary.length; i++){
        createBookInfo(myLibrary[i]) }
}

function createBookInfo(info){
    const NEW_CARD = document.createElement('div');
    NEW_CARD.className = 'book-card';
    NEW_CARD.setAttribute('id', myLibrary.indexOf(info))
    document.getElementById('card-container').append(NEW_CARD)
    
    const NEW_TITLE = document.createElement('div');
    NEW_TITLE.className = 'book-title';
    NEW_TITLE.textContent = `${info.title}`
    NEW_CARD.append(NEW_TITLE)

    const NEW_AUTHOR = document.createElement('div');
    NEW_AUTHOR.className = 'book-author';
    NEW_AUTHOR.textContent = `${info.author}`
    NEW_CARD.append(NEW_AUTHOR)

    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('id', 'removeBtn');
    NEW_CARD.append(removeBtn);
    removeBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(info),1)});
}


