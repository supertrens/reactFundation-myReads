import React , {Component} from 'react'
import { Link } from 'react-router-dom'

// import my personal components
import CurrentlyReadingList   from "./currently_reading_book_list"
import WantToReadList         from "./want_to_read_book_list"
import ReadList               from "./read_book_list"

class BookList extends Component{

  onChange =(e) =>{
		const option = e.target.value;
		console.log("From Book List" , option)
	}

  render(){
    const { books} =this.props;
    return(
      <div className="list-books">
        <div className="list-books-title">
          <Link  to ="/search" className ="close-search">
            search
          </Link>
          <h1>MyReads</h1>      
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReadingList books={books} onChangeOption = {this.onChange}/>
            <WantToReadList />
            <ReadList />
          </div>
        </div>
        {/* <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div> */}
      </div>
    )
  }
}

export default BookList
