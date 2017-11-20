import React  from 'react'
import BookshelfChangerOption from "./bookshelf_changer_option"

const BookListItem =(props)=>{

			const { bookElement , onChangeShelfPosition , onMoveBookFromList} =props
			//This is the style that will be apply to each book cover
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
							<BookshelfChangerOption
								onChangeShelfPosition={onChangeShelfPosition}
							  bookElement={bookElement}
								onMoveBookFromList={onMoveBookFromList}
							/>
						</div>
					</div>

					<div>
						<div className="book-title">{bookElement.title}</div>
						<div className="book-authors">{bookElement.authors}</div>
					</div>
				</div>
			)
}
export default BookListItem
