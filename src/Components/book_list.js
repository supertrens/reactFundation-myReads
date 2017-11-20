import React      from 'react'
import { Link }   from 'react-router-dom'


// import my personal components
import BookInShelf from "./book_in_shelf"


const BookList =(props)=>{
  const { books , onChangeShelfPosition} =props;
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
          {/* //to take the book in the currently reading shelf */}
          <BookInShelf
            books={books}
            onChangeShelfPosition={onChangeShelfPosition}
            shelfName="currentlyReading"
            title="Currently Reading"
          />
          {/* //to take the book in the want to read shelf */}
          <BookInShelf
            books={books}
            onChangeShelfPosition={onChangeShelfPosition}
            shelfName="wantToRead"
            title="Want to read"
          />
          {/* //to take the book in the read shelf */}
          <BookInShelf
            books={books}
            onChangeShelfPosition={onChangeShelfPosition}
            shelfName="read"
            title="Read"
          />
        </div>
      </div>
    </div>
  )
}

export default BookList
