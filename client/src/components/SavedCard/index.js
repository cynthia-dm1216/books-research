import React from 'react';
import './style.css';

function SavedCard(props){
    const { title, authors, description, image, link, deleteBook } = props;

    return (
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
                <div>
                    <button className='btn btn-light' onClick={deleteBook}>Delete</button>
                    <a href={link} rel='noopener noreferrer' className='btn btn-light'>View</a>
                </div>
            </div>
        </div>
    );
}

export default SavedCard;
