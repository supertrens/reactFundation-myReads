import React  from 'react'

const BookshelfChangerOption =(props)=>{
	const {bookElement , onChangeShelfPosition, onMoveBookFromList} = props;
	return(
		<select
			onChange={(e) => {onChangeShelfPosition(bookElement , e);
			if(onMoveBookFromList) onMoveBookFromList(bookElement)}}>
			<option value="none">Move to...</option>
			<option value="currentlyReading">Currently Reading</option>
			<option value="wantToRead">Want to Read</option>
			<option value="read">Read</option>
			<option value="none">None</option>
		</select>
	)
}

export default BookshelfChangerOption
