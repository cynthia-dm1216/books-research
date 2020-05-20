import React, { useRef, useState } from 'react';
import './style.css';
import API from '../../utils/API';

function SearchCard(){
    const [books , setBooks ] = useState([]);
    const bookSearch = useRef();

    function searchBooks(e) {
        e.preventDefault();

        API.getBooksByQuery(bookSearch.current.value)
        .then(res => {
            setBooks(res)
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='search-card'>
            <h3>Book Search</h3>
            <form>
                <div className='form-group'>
                    <label for='search-input'>Book</label>
                    <input className='form-control' id='searchInput' placeholder='Harry Potter'></input>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
       
        
    );
}

export default SearchCard;