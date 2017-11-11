import React , {Component} from 'react'
import BookListItem from './book_list_item'



class CurrentlyReadingList extends Component{

	render(){
    const { books} =this.props;
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
					{
						books !==0 &&
						<ol className="books-grid">
							{
								books.map((book , index)=>(
									<li key ={index}>
										<div className="book">
											<BookListItem bookElement={book} />
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


export default CurrentlyReadingList
