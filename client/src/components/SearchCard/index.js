import React, { useRef, useState } from 'react';
import './style.css';
import API from '../../utils/API';

function SearchCard(){

    const [ setBooks ] = useState([]);
    const searchQuery = useRef();

    function searchBooks(e) {
        e.preventDefault();

        API.getBooksByQuery(searchQuery.current.value)
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
                    <input className='form-control' id='searchInput' placeholder='Harry Potter' ref={searchQuery} />
                </div>
                <button type='submit' className='btn btn-primary' onClick={searchBooks}>Submit</button>
            </form>
        </div>
       
        
    );
}

export default SearchCard;