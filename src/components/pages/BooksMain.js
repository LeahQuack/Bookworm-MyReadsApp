import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'

import Shelf from '../Shelf';

//Reference: https://www.robinwieruch.de/react-pass-props-to-component/#react-props
class BooksMain extends React.Component {
  state = {
  books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(resp => {
      this.setState({ books: resp });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Bookworm</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf changeShelf={this.changeShelf}
                    shelfName ="Currently Reading"
                    books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
            <Shelf changeShelf={this.changeShelf}
                    shelfName ="Want to Read"
                    books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
            <Shelf changeShelf={this.changeShelf}
                  shelfName ="Read"
                  books={this.state.books.filter(b => b.shelf === "read")}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}



export default BooksMain;
