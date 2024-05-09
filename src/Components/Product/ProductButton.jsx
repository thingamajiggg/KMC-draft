import React from 'react'
import Data from './ProductsDetails'
import './ProductFilter.css'

const ProductButton = ({menuItems, filterItems, resetItems}) => {
    return (
        <div className='buttonProduct'>
            {
                menuItems.map(val => (
                    <button className='btn dark-btn' onClick={() => filterItems(val)}>
                        {val}
                    </button>
                ))
            }
            <button className='btn dark-btn' onClick={resetItems}>
                All
            </button>

        </div>
    )
}

export default ProductButton