import bookFactory from "../factories/book-factory";
import BookStorage from "../storage/book-storage";

interface BookData {
    title: string
    bookGenres: string
    status: string
    exemplaryQuantity: number
    author: string
}

interface Book extends BookData {
    id: string
    created_at: string
}

export default {
    createBook: ({title, bookGenres, status, exemplaryQuantity, author}: BookData): Book => {
        const newBook = bookFactory.create({title, bookGenres, status, exemplaryQuantity, author});
        BookStorage.add(newBook);
        return newBook;
    },

    getAllBooks: (): Book[] => {
        return BookStorage.getAll();
    }
}