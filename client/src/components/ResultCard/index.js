import React from 'react';
import './style.css';

function ResultCard(){
   return (
       <div className='card mb-3 result-card'>
           <div className='row no-gutters'>
               <div className='col-md-4'>
                   <img src='https://via.placeholder.com/100' className='card-img' alt='...' />
               </div>
               <div className='col-md-8'>
                   <div className='card-body'>
                     <h5 className='card-title'>Harry Potter Bookshelf</h5>
                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p className="card-text"><small className="text-muted">By John Granger</small></p>
                   </div>
               </div>
               <div className='resultBtn'>
                   <a href='google.com'>View</a><button>Save</button>
               </div>
           </div>
       </div>
   );
}

export default ResultCard;