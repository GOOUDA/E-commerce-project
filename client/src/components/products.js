

import React, { useState } from 'react'
import ProductModal from './Product_Model';

function Products(props) {
    const [product, setProduct] = useState("");

    const openModal = (product) => {
        setProduct(product)
    }

    const closeModal = () => {
        setProduct(false)
    }

    return (
<div className='LIST' style={{background:""}}>
{props.products.map(product=>(
        <div className='product_wrap' key={product.id}>
            <div className='item'>
                <a href='#' onClick={()=>{ openModal(product)}}>
                <img src={product.imageUrl}/>
                </a>
                <div className='desc'>
                    <p>{product.title}</p>
                    <span>{product.price}</span>
                </div>
                <button>ADD TO CARD</button>
            </div>
        </div>
            ))} 

            <ProductModal product={product} closeModal={closeModal} />
        </div> 
    )
}

export default Products




