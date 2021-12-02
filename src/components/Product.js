import React from 'react';
import Ratings from './Ratings';
const Product = ({product}) => {
    return (
        <div key={product._id} className="card">
            <a href = {`/product/${product._id}`}>
                 {/* image size should be 680 by 830 pixel  */}
                <img className="medium" src={product.image} alt={product.name}/>
            </a>
            <div className="card-body">
                <a href = {`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <Ratings rating={product.rating} numReviews={product.numReviews}/>
                <div className="price">
                  $ {product.price}
                </div>
            </div>
        </div>
    );
}

export default Product;
