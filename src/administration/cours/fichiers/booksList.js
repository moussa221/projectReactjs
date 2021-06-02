import React, { useContext } from "react";
import _ from "lodash";
import Book from "./book";
import BooksContext from "../context/booksContext";

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">
            Aucun cours trouvé. Ajouter votre cours SVP.
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
