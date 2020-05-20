import React, { useContext }from 'react';
import './style.css';
import ResultCard from '../ResultCard';
import BookContext from '../../utils/BookContext';

function ResultContainer(){
  const books = useContext(BookContext);

return(
  <div className='result-container'>
          <div className='form-group'>
              <label for='resultInput'>Results</label>  
              {books.length ? (
                books.map(book =>
                <ResultCard 
                key={book.image}
                title={book.title}
                description={book.description}
                authors={book.authors}
                image={book.image}
                link={book.link}
                />
              )
) : (
  <p>No Results</p>
)}
  </div>
  </div>
  );
}

export default ResultContainer;