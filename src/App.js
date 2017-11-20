import React  , {Component}   from 'react'
import {Route}                from "react-router-dom"
import './App.css'
// import my personal components
import BookList               from "./Components/book_list"
import SearchPage             from "./Components/search_bar"
//Import the book API
import * as BooksAPI           from "./utils/BooksAPI"


class BooksApp extends Component {
  state={
    //books will contain all the books in the 3 shelves
     books:[],
  }

// This function will be called by React immediately after the
//component has mounted
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  // onAddBookToShelves=(book, e)=>{
  //   BooksAPI.search(book).then((books)=>{
  //     this.setState((state)=>({
  //       //create a brand new array with the new book added from search
  //       books : state.books.push(book)
  //     }))
  //   })
  //
  //   // add it to the proper shelf
  //   this.onChangeShelfPosition(book , e);
  // }

  onChangeShelfPosition =(bookElement, e) =>{
    const option = e.target.value;
    BooksAPI.update(bookElement, option).then(()=>{
      //let react kow that the data has changed
      this.componentDidMount()
    })
    .catch((error) =>{
      console.log(error);
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact  path="/" render={()=> (
          <BookList
            books={this.state.books}
            onChangeShelfPosition={this.onChangeShelfPosition}
          />
          )}
        />

       <Route exact path='/search' render={()=> (
        <SearchPage
          booksFromApp={this.state.books}
          onChangeShelfPosition={this.onChangeShelfPosition}
        />
        )}
      />
      </div>
    )
  }
}

export default BooksApp
