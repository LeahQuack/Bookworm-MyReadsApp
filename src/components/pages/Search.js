import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../../BooksAPI'

import Book from '../Book';

//Reference: https://www.robinwieruch.de/react-pass-props-to-component/#react-props
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      results: [],
      query: ""
    }
  }

  updateQuery = (query) => {
    this.setState({query: query}, this.submitQuery);
  }

  submitQuery() {
    if(this.state.query === '') {
      return this.setState({ results: [] });
    }
    BooksAPI.search(this.state.query).then(res => {
      if(res.error) {
        return this.setState({ results: [] });
      }
      else {
        return this.setState({ results: res });
      }
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  }
          /* React Search Component https://www.peterbe.com/plog/onchange-in-reactjs */
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
                  placeholder="Search by title or author"
                  ref={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.results.map((book, key) =>
            <Book changeShelf={this.changeShelf}
            book={book}
            key={key} />)
          }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
