import React from 'react'
import "./pagination.css"
const Pagination = (props) => {
    const { page, total_pages,handlePaginationButton}=props
    return (
        <div className="Pagination">
            <button
                className=" Pagination-button"
                onClick={()=>handlePaginationButton("prev")}
                disabled={page<2}
                >
                &larr;
            </button>
            page {page} of {total_pages}
            <button 
                className=" Pagination-button"
                onClick={()=>handlePaginationButton("next")}
                disabled={page>=total_pages}>
                &rarr;
            </button>
        </div>
    )
}

export default Pagination