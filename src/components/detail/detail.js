import React from 'react'
import './detail.css'
import Loading from './../common/Loading'
import {Link} from 'react-router-dom'

class Detail extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            data: [],
            error: null,
        }
    }
    componentDidMount() {
        const currencyID = this.props.match.params.id
        //console.log(this.props)
        this.fetchCurrency(currencyID)

        
    }

    fetchCurrency(currencyId){
        fetch(`https://api.nomics.com/v1/currencies/ticker?key=fa577bb3584896f7393c3b5584807496&ids=${currencyId}&interval=1d,30d&convert=EUR`)
            .then((response) => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                console.log('data',data);
                this.setState({
                    data: data[0],
                    loading: false
                },()=>{
                    console.log(data);
                })
                
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: error,
                    loading: false
                })
            });;

    }
    componentWillReceiveProps(nextProps){
        //console.log(nextProps)
        const currencyID = nextProps.match.params.id
        this.fetchCurrency(currencyID)

    }

    renderChangePercent(percent) {
        if (percent) {
            if (percent.market_cap_change_pct > 0) {
                return <span className="percent-raised">{percent.market_cap_change_pct}% &uarr;</span>
            }
            else if (percent.market_cap_change_pct < 0) {
                return <span className="percent-fallen">{percent.market_cap_change_pct}% &darr;</span>
            }
            return <span >{percent.market_cap_change_pct}%</span>
        }
        else {
            return <span >%</span>
        }

    }


    render() {
        const { loading, data, error } = this.state
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        }
        if (error) {
            return <div className="error">{error}</div>
        }
        return (
            
                <div className="Detail">
                    <img src={data.logo_url} className="logo" alt="logo"/>
                    <h1 className="Detail-heading">{data.name} ({data.symbol})</h1>
                    <div className="Detail-container">
                        <div className="Detail-item">
                            Price <span className="Detail-value">${data.price}</span>
                        </div>
                        <div className="Detail-item">
                            Rank <span className="Detail-value">{data.rank}</span>
                        </div>
                        <div className="Detail-item">
                            24H change <span className="Detail-value">{this.renderChangePercent(data["1d"])}</span>
                        </div>
                        <div className="Detail-item">
                            Marker cap <span className="Detail-value">{data.market_cap}</span>
                        </div>
                        <div className="Detail-item">
                        circulating supply <span className="Detail-value">{data.circulating_supply}</span>
                        </div>
                        <div className="Detail-item">
                            Hight <span className="Detail-value">{data.high}</span>
                        </div>
                       

                    </div>
                    <h5 className="data">{data.price_date.split('T')[0]} at {data.price_date.split('T')[1]} </h5>
                    <Link className="ToHome" to="/">Home</Link>
                </div>


          
        );
    }
}

export default Detail