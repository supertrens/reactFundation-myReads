import React  , {Component}                from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

// import my personal components
import BookList               from "./Components/book_list"
import SearchPage             from "./Components/search_bar"

//Import the book API
import * as BooksAPI     from "./utils/BooksAPI"


class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books:[],
    showSearchPage: false

  }

  // This fucntion will be called by React immediately after the
//component mounted
  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
      this.setState({books})
    })
  }

  render() {
    return (

      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <BookList books={this.state.books}/>
        )}
      </div>
    )
  }
}

export default BooksApp
