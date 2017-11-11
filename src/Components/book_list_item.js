import React , {Component} from 'react'
import BookshelfChangerOption from "./bookshelf_changer_option"

class BookListItem extends Component{
	render(){

		const { bookElement } =this.props
    
		const  bookCoverStyle ={
			width:128 ,
			height: 192 ,
			backgroundImage: `url(${bookElement.imageLinks.thumbnail})`
		}
		return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={bookCoverStyle}>
					</div>
					<div className="book-shelf-changer">
						<BookshelfChangerOption />
					</div>
				</div>

				<div>
					<div className="book-title">{bookElement.title}</div>
					<div className="book-authors">{bookElement.authors}</div>
				</div>
			</div>
		)
	}
}
export default BookListItem
