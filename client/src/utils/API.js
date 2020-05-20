import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  getBooksByQuery: function(query) {
    let queryUrl = 'https://www.googleapis.com/books/v1/volumes?q='+ query + '&key=AIzaSyDbBpOH8GsAaBvCNe1eRChSpw_vpVKaSTQ';
    return new Promise((resolve, reject) => {
      axios
        .get(queryUrl)
        .then(res => {
          const books = res.data.items;
          const results = books.map(book => {
            return {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              image: book.volumeInfo.imageLinks.thumbnail,
              description: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  }
};
