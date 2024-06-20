import React from 'react'
import ResponsiveAppBar from '../navbar/navbar';
import axios from 'axios';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';


 const UpdateProducts  = (props) => {
  
  const [productName,setProductName]=useState("");
  const [product,setProduct]=useState("");
  const [stocks,setStocks]=useState("");

  const getProduct=async()=>{
    try{

    axios.get('http://localhost:4000/product/getproduct',{
    params:{
      productname:productName
      //towards backend : frontend var name
    }
    
    }).then(function (response) {
          console.log(response);
          if(response.data.data){
            setProduct(response.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }catch(err){
        console.error(err);
      }
  }  


const deleteproduct= async()=>{
  try{
    axios.post('http://localhost:4000/product/deleteproduct',{
      productname: productName
    })
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });
  }catch(err){
    console.error(err);
  }
}

const updatestocks = async()=>{
  try{
    axios.post('http://localhost:4000/product/updatestocks',{
      productname: productName,
      stockavailable:stocks
    }).then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.error(error);
    })
  }catch(err){
    console.error(err);
  }
}
  
  
  
  return(
    <div>
        <ResponsiveAppBar/>
        update products
        <div>
        <button className="button-81" role="button" onClick={getProduct}>Get product</button><br></br>
        <button className="button-81" role="button" onClick={deleteproduct}>Delete Product</button><br></br>
         <button className="button-81" role="button" onClick={updatestocks}>update Product</button><br></br>
    <    TextField id="input-with-sx" label="productname" variant="standard" onChange={(e)=>{setProductName(e.target.value)}} /><br></br>
         <TextField id="input-with-sx" label="stocks" variant="standard" onChange={(e)=>{setStocks(e.target.value)}} />
          <br></br>
          <img src={product.image} alt='not yet'/>  
        </div>
    </div>
   )
}

export default UpdateProducts;

