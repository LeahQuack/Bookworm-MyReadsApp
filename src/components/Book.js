import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';

//Reference: https://www.robinwieruch.de/react-pass-props-to-component/#react-props
class Book extends React.Component {

  render() {
    const {book} = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
                style={{ width: 128, height: 197,
                backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")` }}>
            </div>
            <div className="book-shelf-changer">
              <select value={this.props.book.shelf || "none"} onChange={(e) =>
                {this.props.changeShelf(this.props.book, e.target.value) }}>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
              {book.title}
          </div>
          <div className="book-authors">
              {book.authors || "No Author."}
          </div>
        </div>
      </li>
    );
  }
}


export default Book;
