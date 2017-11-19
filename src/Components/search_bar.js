
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by';


import BookListItem from './book_list_item'
//Import the book API
import * as BooksAPI           from "../utils/BooksAPI"

class SearchPage extends Component {

  //Here is the component state
  state ={
    books:[]
  }

  //This is the function that will be update when the user type in the
 //search box
  updateQuery = (searchQuery) => {
    BooksAPI.search(searchQuery , 20).then((books) =>{
      this.setState({books})
    })
  }

  render(){

    const {onAddBookToShelves} = this.props;
    const { books} = this.state;
    books.sort(sortBy('title'));

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link  to="/" className="close-search"></Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>

        <div className="search-books-results">
          {
            books !==0 &&
            <ol className="books-grid">
              {
                books.map((book , index)=>(
                  <li key={index}>
                    <div className="book">
                      <BookListItem bookElement={book} onChangeShelfPosition={onAddBookToShelves}/>
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
