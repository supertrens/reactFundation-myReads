import React  , {Component}   from 'react'
import {Route}                from "react-router-dom"
import './App.css'
// import my personal components
import BookList               from "./Components/book_list"
import SearchPage             from "./Components/search_bar"
//Import the book API
import * as BooksAPI           from "./utils/BooksAPI"


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

  //remove contact from the contact array
  moveBook = (book) =>{

    this.setState((state)=>({
      //create a brand new array without theobject that we dont need
      books : state.books.filter((b) => b.id !== book.id)
    }))

    //To also remove the contact from the back end server
//    ContactsAPI.remove(contact);
  } //End of removeContact



  render() {
    return (
      <div className ="app">
        <Route exact  path="/" render={()=> (
          <BookList books={this.state.books}/>
          )}
        />

       <Route exact path='/search' render={() => (
        <SearchPage books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
