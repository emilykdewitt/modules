
import book from '../helpers/book.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const bookInfo = book.getBook();
    console.log('book:', bookInfo);
}

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = '<h2>Our Only Book</h2>';
    domString += `<h3>${bookInfo.price}</h3>`;
    domString += `<img src="${bookInfo.image}" alt="book cover" class="book-cover">`;
    domString += `<button id="cartBtn" class="btn btn-danger">Add to Cart</button>`;
    util.printToDom('store-container', domString);
    document.getElementById('cartBtn').addEventListener('click', addToCartEvent);
};

export default { makeStore };