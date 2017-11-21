import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Debounce } from "react-throttle";
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
import sortBy from "sort-by";
import BookListItem from "./book_list_item";
//Import the book API
import * as BooksAPI from "../utils/BooksAPI";

class SearchPage extends Component {
  //Here is the component state
  state = {
    books: []
  };

  //This is the function that will be update when the user type in the
  //search box
  updateQuery = searchQuery => {
    //check if the query string is not empty to make the api call
    if (searchQuery || searchQuery.length) {
      BooksAPI.search(searchQuery, 10)
        .then(books => {
          this.setState({ books });
        })
        //In case the request is not fullfill
        .catch(error => {
          this.setState({ books: [] });
        });
    }
  };

  //Check if the book is already in any other shelves in the main page
  isBookAlreadyInShelve(booksFromApp, bookInTheListID) {
    return booksFromApp.some(bookFromApp => bookFromApp.id !== bookInTheListID);
  }

  //remove the book from the list
  onMoveBookFromList = book => {
    const books = this.state.books.filter(item => item.id !== book);
    this.setState({ books });
  };

  render() {
    const { onChangeShelfPosition, booksFromApp } = this.props;
    let { books } = this.state;
    let bookFilter;

    if (books || books.length) {
      bookFilter = books.filter(book =>
        this.isBookAlreadyInShelve(booksFromApp, book.id)
      );
      bookFilter.sort(sortBy("title"));
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={event => this.updateQuery(event.target.value)}
              />
            </Debounce>
          </div>
        </div>

        <div className="search-books-results">
          {bookFilter !== 0 && (
            <ol className="books-grid">
              {bookFilter.map(book => (
                <li key={book.id}>
                  <div className="book">
                    <BookListItem
                      bookElement={book}
                      onChangeShelfPosition={onChangeShelfPosition}
                      onMoveBookFromList={this.onMoveBookFromList}
                    />
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
