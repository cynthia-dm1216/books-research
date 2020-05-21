import React, { useContext }from 'react';
import './style.css';
import ResultCard from '../ResultCard';
import BookContext from '../../utils/BookContext';

function ResultContainer(props){
  const {books} = props

return(
  <div className='result-container'>
          <div className='form-group'>
              <label>Results</label>  
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