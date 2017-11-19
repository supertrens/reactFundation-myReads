import React , {Component} from 'react'

class BookshelfChangerOption extends Component{


	render(){
		const {bookElement , onChangeShelfPosition} = this.props;
		return(
	 		<select onChange={(e) => onChangeShelfPosition(bookElement , e)}>
		    <option value="none">Move to...</option>
		    <option value="currentlyReading">Currently Reading</option>
		    <option value="wantToRead">Want to Read</option>
		    <option value="read">Read</option>
		    <option value="none">None</option>
	  	</select>
	  )
	}
}

export default BookshelfChangerOption
