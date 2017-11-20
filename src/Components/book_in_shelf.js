import React from 'react'
import BookListItem from './book_list_item'
import sortBy from 'sort-by'

const BookInShelf=(props)=>{
	const { books , onChangeShelfPosition, title , shelfName}=props;
	//filter the array to get only the CurrentlyReadingList
	let currentShelf;
	currentShelf = books.filter((book) => book.shelf === shelfName)
	currentShelf.sort(sortBy('title'));

	return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				{
					currentShelf !==0 &&
					<ol className="books-grid">
						{
							currentShelf.map((book)=>(
								<li key={book.id}>
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


export default BookInShelf
