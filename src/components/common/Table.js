import React from 'react'
import {withRouter} from 'react-router-dom'

const Table=(props)=>{
    const {currencies,renderChangePercent,history}=props
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
                        {currencies.map((currency) => (
                            <tr key={currency.id}
                                onClick={()=>history.push(`/currency/${currency.id}`)}
                            >
                                <td>
                                     <span className="Table-rank">{currency.rank}</span>
                                     {currency.name}
                                </td>
                                <td>
                                     <span className="Table-rank">$</span>
                                     {currency.price}
                                </td>
                                <td>
                                     <span className="Table-rank">$</span>
                                     {currency.market_cap}
                                </td>
                                <td>
                                   {renderChangePercent(currency["1d"])}
                                </td>

                                
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
    )
}

export default withRouter(Table)