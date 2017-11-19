import React , {Component} from 'react'
import { Link } from 'react-router-dom'

// import my personal components
import CurrentlyReadingList   from "./currently_reading_book_list"
import WantToReadList         from "./want_to_read_book_list"
import ReadList               from "./read_book_list"


class BookList extends Component{

  render(){
    const { books , onChangeShelfPosition} =this.props;
    return(
      <div className="list-books">
        <div className="list-books-title">
          <Link  to="/search" className="close-search">
            search
          </Link>
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReadingList books={books} onChangeShelfPosition={onChangeShelfPosition}/>
            <WantToReadList books={books} onChangeShelfPosition={onChangeShelfPosition}/>
            <ReadList books={books} onChangeShelfPosition={onChangeShelfPosition}/>
          </div>
        </div>
      </div>
    )
  }

}

export default BookList
