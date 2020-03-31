import React from 'react'
import './search.css'

class Search extends React.Component{

handleSubmitEvent(event){
    console.log('submit')
    event.preventDefault();
    
}
render(){
    return (
        <form onSubmit={this.handleSubmitEvent}>
            <input name ="SearchQuery"/>
            <button>Find</button>
        </form>
    )
}
}

export default Search

