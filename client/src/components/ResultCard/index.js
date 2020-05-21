import React, { useState } from 'react';
import './style.css';
import API from '../../utils/API';

function ResultCard(props){
    const { title, authors, description, image, link } = props;

    const [book] = useState({
        title: title,
        authors: authors,
        image: image,
        description: description,
        link: link
    });

    function saveBook(book) {
        API.saveBook(book)
        .then(() => console.log('Your Book was Saved'))
        .catch(err => console.log(err));
    } 

   return(
    <div className='card mb-3 result-card' key={image}>
    <div className='row no-gutters'>
        <div className='col-md-4'>
            <img src={image} className='card-img' alt='...' />
        </div>
        <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {authors.join(',')}</small></p>
            </div>
        </div>
        <div className='resultBtn'>
            <a href={link} rel='noopener noreferrer'>View</a><button onClick={()=> saveBook(book)}>Save</button>
            
        </div>
    </div>
</div>
   );
}

export default ResultCard;