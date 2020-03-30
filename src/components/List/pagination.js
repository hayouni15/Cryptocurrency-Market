import React from 'react'
import "./pagination.css"
const Pagination = (props) => {
    const { page, total_pages,handlePaginationButton}=props
    return (
        <div className="Pagination">
            <button
                className=" Pagination-button"
                onClick={()=>handlePaginationButton("prev")}>
                &larr;
            </button>
            page {page} of {total_pages}
            <button 
                className=" Pagination-button"
                onClick={()=>handlePaginationButton("next")}>
                &rarr;
            </button>
        </div>
    )
}

export default Pagination