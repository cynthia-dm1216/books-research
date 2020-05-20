import React from 'react';
import './style.css';

function SearchCard(){
    return(
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