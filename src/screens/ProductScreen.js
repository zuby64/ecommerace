import React from 'react';
import { useParams,Link } from 'react-router-dom';
import Ratings from '../components/Ratings';
import {data} from '../data'
const ProductScreen = (props)=>{
    const {id} = useParams();
    const product= data.products.find(x=>x._id ==id)
    if(!product){
        return <div>Product not found</div>
    }
    return(
        <div>
            <Link to="/">Back to home</Link>
<div className='row top'>
    <div className='col-2'>
        <img className='large' src={product.image} alt={product.name}/>
    </div>
    <div className='col-1'>
        <ul>
            <li>
                <h1>{product.name}</h1>
            </li>
            <li>
                <Ratings rating={product.rating} numReviews={product.numReviews}/>
            </li>
            <li>Price : {product.price}</li>
            <li>Description:{product.description}</li>
        </ul>
    </div>
    <div className='col-1'>
        <div className='card card-body'>
            <ul>
                <li>
                    <div className='row'>
                        <div>Price</div>
                        <div className='price'>{product.price}</div>

                    </div>
                </li>
                      <li>
                    <div className='row'>
                        <div>Status</div>
                        <div>
                        {
                            product.countInStock >0 ? (<span className='success'>In Stock</span>):(<span className='danger'>Unavailable</span>)
                        }
                        </div>

                    </div>
                </li>
                <li>
                    <button className='primary block'>Add to Cart</button>
                </li>
            </ul>

        </div>
    </div>
</div>
</div>
    )
}

export default ProductScreen;