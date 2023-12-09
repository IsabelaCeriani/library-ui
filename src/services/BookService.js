import axios from 'axios';

const BOOK_API_URL = 'http://localhost:8080/books';


const getAllBooks = async () => {
    try {
        const response = await axios.get(BOOK_API_URL + '/getAll');
        return response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
      }
};

const getBookByTitle = async (bookTitle) => {
    try {
        const encodedTitle = encodeURIComponent(bookTitle);
        const response = await axios.get(BOOK_API_URL + '/getByName?title=' + bookTitle);
        return response.data;
        } catch (error) {
        console.error('Error getting book with title: ' + bookTitle, error);
        throw error;
        }
}

const createBook = async (book) => {
    try {
        const response = await axios.post(BOOK_API_URL + '/addBook', book);
        return response.data;
        } catch (error) {
        console.error('Error creating book', error);
        throw error;
        }
}

const updateBook = async (bookId, book) => {
    try {
        const response = await axios.put(BOOK_API_URL + '/updateBook/' + bookId, book);
        return response.data;
        } catch (error) {
        console.error('Error updating book', error);
        throw error;
        }

}

const deleteBook = async (bookId) => {
    try {
        const response = await axios.delete(BOOK_API_URL + '/deleteBook/' + bookId);
        return response.data;
        } catch (error) {
        console.error('Error deleting book', error);
        throw error;
        }
}

export const BookService = {
    getAllBooks,
    getBookByTitle,
    createBook,
    updateBook,
    deleteBook
}

    