import React , {Component} from 'react'
import BookListItem from './book_list_item'


class WantToReadList extends Component{
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <div className="book">
                <BookListItem />
              </div>
            </li>
            <li>
             <div className="book">
               <BookListItem />
             </div>
           </li>
          </ol>
        </div>
      </div>
    )
  }
}
export default WantToReadList
