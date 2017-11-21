import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import my personal components
import BookList from "./Components/book_list";
import SearchPage from "./Components/search_bar";
//Import the book API
import * as BooksAPI from "./utils/BooksAPI";

class BooksApp extends Component {
  state = {
    //books will contain all the books in the 3 shelves
    books: []
  };

  // This function will be called by React immediately after the
  //component has mounted
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  onChangeShelfPosition = (bookElement, e) => {
    const shelf = e.target.value;
    if (bookElement.shelf !== shelf) {
      BooksAPI.update(bookElement, shelf)
        .then(() => {]
          // Filter out the book and append it to the end of the list
          // so it appears at the end of whatever shelf it was added to.
          bookElement.shelf = shelf;
          this.setState((state) =>({
            books: state.books.filter( b => b.id !== bookElement.id).concat([bookElement])
          }))
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          exact="exact"
          path="/"
          render={() => (
            <BookList
              books={this.state.books}
              onChangeShelfPosition={this.onChangeShelfPosition}
            />
          )}
        />

        <Route
          exact="exact"
          path="/search"
          render={() => (
            <SearchPage
              booksFromApp={this.state.books}
              onChangeShelfPosition={this.onChangeShelfPosition}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
