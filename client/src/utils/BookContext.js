import React from 'react';

const BookContext = React.createContext({
   title: '',
   desccription:'',
   authors:[],
   image:'',
   link: ''
});

export default BookContext;