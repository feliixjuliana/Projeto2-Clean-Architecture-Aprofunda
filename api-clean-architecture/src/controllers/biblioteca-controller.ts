import {Request, Response} from 'express';
import bookService from '../services/book-service';

export const createPost = (req: Request, res: Response): void => {
    const { title, bookGenres, status, exemplaryQuantity, author} = req.body;
    const newBook = bookService.createBook({title, bookGenres, status, exemplaryQuantity, author});

    res.status(201).json({message: `New book, ${newBook.title}, created!!`})
}

export const listPosts = (req: Request, res: Response): void => {
    const books = bookService.getAllBooks();
    res.json(books);
}