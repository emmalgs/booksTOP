const ADD_BUTTON = document.querySelector('.addBook-btn');
// const NEW_CARD = document.createElement('div.book-card')
// NEW_CARD.append(newBookCard());

ADD_BUTTON.addEventListener('click', e => {
    newBookCard()})

function newBookCard() {
    const BOOKCARD_TITLE = document.createElement('div.book-title');
    const NEW_TITLE = document.querySelector('#title-input').value
    BOOKCARD_TITLE.append(NEW_TITLE);

    const BOOKCARD_AUTHOR = document.createElement('div.book-author');
    const NEW_AUTHOR = document.querySelector('#author-input').value
    BOOKCARD_AUTHOR.append(NEW_AUTHOR);

    const CARD_CONTAINER = document.getElementById('card-container');
    CARD_CONTAINER.append(NEW_TITLE);
    CARD_CONTAINER.append(NEW_AUTHOR);
}