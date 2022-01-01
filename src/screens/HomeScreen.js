import React,{useEffect,useState} from 'react';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {data} from '../data'
import Product from '../components/Product';
const HomeScreen = () => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  useEffect(()=>{
  const fetchProducts = async ()=>{
    try{
      setLoading(true);
       const {data } = await axios("/api/products");
       setProducts(data);
       setLoading(false);
    }
    catch(err){
      setError(err.message);
      setLoading(false);
    }
   
  }
  fetchProducts();
  },[])
 
    return (
         <div className="row center">
    
       
         { loading ? <LoadingBox/>:error?<MessageBox variant ="danger">{error}</MessageBox>:
          products.map(product=>(
            <Product key={product._id} product ={product}/>
           ))
         }
        
       </div>
    );
}

export default HomeScreen;
