import React from 'react'

export default function Products(props) {
  return (
    <div className='LIST' style={{background:""}}>
        {props.products.map(product=>{
            return(
                <div className='product_wrap' key={product.id}>
                    <div className='item'>
                        <img src={product.imageUrl}/>
                        <div className='desc'>
                            <p>{product.title}</p>
                            <span>{product.price}</span>
                        </div>
                        <button>ADD TO CARD</button>
                    </div>
                </div>
            );
        })}
    </div>
  )
}
