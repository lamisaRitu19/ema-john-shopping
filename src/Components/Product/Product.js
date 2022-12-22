import React from 'react';
import './Product.css';

const Product = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props;
    const { img, name, rating, price, seller } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {rating} stars</small></p>
            </div>
            <button
                onClick={() => { handleAddToCart(product) }}
                className='product-btn'
            >Add to cart</button>
        </div>
    );
};

export default Product;