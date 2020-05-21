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
}

export default SavedContainer;