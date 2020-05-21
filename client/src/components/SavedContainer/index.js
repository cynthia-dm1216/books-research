import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../utils/API';
import SavedCard from '../SavedCard';

function SavedContainer() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        API.getBooks()
        .then(res => setBooks(res.data))
        .catch(err => console.log(err));
    }

    return (
        <div className='saved-container'>
            <label>Saved</label>
            {books.map(book => 
               <SavedCard 
               key={book._id}
               title={book.title}
               authors={book.authors}
               image={book.image}
               description={book.description} 
               link={book.link}
               deleteBook={() => deleteBook(book._id)}
               />
            )}
        </div>
    );
}

export default SavedContainer;