import React from 'react'
import './table.css'

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            currencies: [],
            err: null
        }
    }
    componentDidMount() {
        this.setState({ loading: true });

        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
            .then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            })
            .then((data) => {
                this.setState({
                    currencies: data.currencies,
                    loading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false,
                });
            });
    }


    render() {
        console.log(this.state)
        if (this.state.loading) {
            return (
                <div>loading ...</div>
            )
        }

        return (
            <div className="Table-container">

                <table className="Table">
                    <thead className="Table-head">
                        <tr>
                            <th>Cryptocurrency</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>24H change</th>
                        </tr>
                    </thead>
                    <tbody className="Table-body">
                        {this.state.currencies.map((currency) => (
                            <tr key={currency.id}>
                                <td>
                        <span className="Table-rank">{currency.rank}</span>
                        {currency.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        );
    }
}

export default List