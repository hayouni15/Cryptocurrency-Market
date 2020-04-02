import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import './search.css'
import Loading from './Loading'


class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            searchQuery: '',
            data: [],
            error: null,
            loading: false,
        }
    }

    GetSearch = (callback) => {
        fetch('https://api.nomics.com/v1/currencies/ticker?key=fa577bb3584896f7393c3b5584807496&interval=1d,30d&convert=EUR')
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {

                let result = this.state.searchQuery ? data.filter(element => element.id.includes(this.state.searchQuery)) : data;
                callback(result)

            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            });
    }
    handleChange = (event) => {
        this.setState({ loading: true })
        event.persist()
        this.setState({ searchQuery: event.target.value.toUpperCase() }, () => {
            this.GetSearch((searchResult) => {
                this.setState({ loading: false, data: searchResult },()=>{
                    console.log(this.state)
                })

            })
        })

    }

    henadleRedirect(id){
        console.log(id)
        this.setState({searchQuery: '',})
        this.props.history.push(`/currency/${id}`)

    }

    renderSearchResults(){
        const{data}=this.state
        if (data.length>0){
            return (
                <div className="Search-result-container">
                    {data.map(result=>(
                        <div 
                            key={result.id}
                            className="Search-result"
                            onClick={()=> this.henadleRedirect(result.id)}
                        >
                            {result.name} ({result.symbol})
                        </div>
                    ))}
                </div>
            )
        }
        else{
            return (
                <div className="Search-result-container">
                <div className="Search-no-result">
                    No result found
                </div>
            </div>
            )
          
        }
       
    }
    render() {
        return (
            <div className="Search">
                <span className="Search-icon" />
                <input
                    className="Search-input"
                    type="text"
                    placeholder="Currency"
                    onChange={this.handleChange}
                    value={this.state.searchQuery} />
                    


                {this.state.loading &&
                    <div className="Search-loading">
                        <Loading
                            width="12px"
                            height="12px"
                        />
                    </div>
                }
                {this.state.searchQuery.length>0&&this.renderSearchResults()}

            </div>

        )
    }
}

export default withRouter(Search)

