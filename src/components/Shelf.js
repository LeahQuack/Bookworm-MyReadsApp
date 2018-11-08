import React from 'react';
import Book from './Book';

function Shelf(props) {
  const { books, shelfName } = props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book, key) =>
                <Book
                  book={book}
                  key={key.toString()}
                        value={key}
                  changeShelf={props.changeShelf}
                />)
              }
            </ol>
          </div>
      </div>
  )}

export default Shelf;
