import React from 'react';

function SearchCard(){
    return(
        <form>
        <div className='card-body'>
            <div className='form-group'>
                <label>Book</label>
                <input className='form-control' id='bookInput' placeholder='Harry Potter' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
        </form>
    );
}

export default SearchCard;