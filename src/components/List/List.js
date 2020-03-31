import React from 'react'
import './table.css'
import Loading from '../common/Loading'
import Table from '../common/Table';
import Pagination from "../List/pagination"
import Detail from "../detail/detail"


class List extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            currencies: [],
            error: null,
            page:1,
            total_pages:0,
            items_per_page:10
        }
    }
    componentDidMount() {
        this.setState({ loading: true });

        fetch('https://api.nomics.com/v1/currencies/ticker?key=fa577bb3584896f7393c3b5584807496&interval=1d,30d&convert=EUR')
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                this.setState({
                    currencies: data,
                    loading: false,
                    total_pages: Math.ceil(Object.keys(data).length/this.state.items_per_page)
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            });
    }
    
    handlePaginationButton=(direction)=>{
        let nextPage = this.state.page;

        nextPage= direction ==="next"?nextPage+1:nextPage-1;

        this.setState({page:nextPage})
    }

    renderChangePercent(percent){
        if(percent){
            if(percent.market_cap_change_pct>0){
                return <span className="percent-raised">{percent.market_cap_change_pct}%</span>
            }
            else if ( percent.market_cap_change_pct <0){
                return <span className="percent-fallen">{percent.market_cap_change_pct}%</span>
            }
            return <span >{percent.market_cap_change_pct}%</span>
        }
        else{
            return <span >%</span>
        }
        
    }
    render() {
        const {currencies,loading,error,page,total_pages}=this.state;
        var currencies10=currencies.slice(10*page-10,10*page)
        if (loading) {
            return <div className="loading-container"><Loading/></div>
        }
        if ( error){
            return <div className="error">{error}</div>
        }

        return (
            <div>
            <Table 
                currencies={currencies10}
                renderChangePercent={this.renderChangePercent}
                
            />
            <Pagination
             page= {page}
             total_pages={total_pages}
             handlePaginationButton={this.handlePaginationButton}/>

            </div>
            
        );
    }
}

export default List