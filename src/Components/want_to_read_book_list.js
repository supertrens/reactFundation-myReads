import React , {Component} from 'react'
import BookListItem from './book_list_item'
import sortBy from 'sort-by'


class WantToReadList extends Component{
  render(){

    const { books , onChangeShelfPosition}=this.props;
    //filter the array to get only the CurrentlyReadingList
    let currentShelf;
    currentShelf = books.filter((book) => book.shelf === "wantToRead")
    currentShelf.sort(sortBy('title'));

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to read</h2>
        <div className="bookshelf-books">
          {
            currentShelf !==0 &&
            <ol className="books-grid">
              {
                currentShelf.map((book , index)=>(
                  <li key={index}>
                    <div className="book">
                      <BookListItem bookElement={book} onChangeShelfPosition={onChangeShelfPosition} />
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
export default WantToReadList
