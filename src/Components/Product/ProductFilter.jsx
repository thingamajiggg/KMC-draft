import React, {useState} from 'react'
import Data from './ProductsDetails'
import './ProductFilter.css'
import Card from './ProductCard'
import Button from './ProductButton'

const ProductFilter = () => {
    const [item, setItems] = useState(Data()); // Call ProductsDetails() to get the array

    const menuItems = [...new Set(item.map((val) => val.category))] // Commented out for now
    console.log("Data type:", item);
    const filterItems = (cat) => {
        const newItems = item.filter((newval) => newval.category === cat)
        setItems(newItems)
    }
    const resetItems = () => {
        setItems(Data()); // Call ProductsDetails() to reset items
    };

    return (
        <div className='container'>
            <div className="row">
                <h1>Products</h1>
                <Button
                    menuItems={menuItems}
                    filterItems={filterItems}
                    resetItems={resetItems}/>
                <Card item={item}/>
            </div>
        </div>
    )
}

export default ProductFilter
