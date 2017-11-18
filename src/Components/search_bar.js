
import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

import BookListItem from './book_list_item'
//Import the book API
import * as BooksAPI           from "../utils/BooksAPI"

class SearchPage extends Component {

  //Here is the component state
  state ={
  	searchQuery : "",
    books:[],
  }

  //This is the function that will be update when the user type in the
 //search box
  updateQuery = (searchQuery) => {
 	  this.setState ({searchQuery : searchQuery})
    BooksAPI.search(searchQuery , 10).then((books) =>{
      this.setState({books})
    })
  }

  onChange =(e) =>{
    const option = e.target.value;
    console.log("From Book List" , option)
  }

  render(){

    const {searchQuery , books} = this.state;

    // This will be the filter array after reading and filter the user input
  	let showingBooks;
    if(searchQuery){
      const match = new RegExp(escapeRegExp(searchQuery) , 'i')
      showingBooks = books.filter((book) => match.test(book.title));
    } else{
      //we don't update anything, we just show the first books
        showingBooks = books;
    }
    //we sort the book according to their names
    showingBooks.sort(sortBy("title"));

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link  to ="/" className ="close-search">
	    		  Add Contact
	    		</Link>
          {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchQuery}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>

        <div className="search-books-results">
          {
            showingBooks !==0 &&
            <ol className="books-grid">
              {
                showingBooks.map((book , index)=>(
                  <li key ={index}>
                    <div className="book">
                      <BookListItem bookElement={book} onChangeOption = {this.onChange}/>
                    </div>
                  </li>
                )
              )
            }
            </ol>
          }
        </div>
      </div>
    )
  }
}


export default SearchPage
