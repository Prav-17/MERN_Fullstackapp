import React, { useEffect, useState } from 'react'
import "./home.css";
import ProductCard from './card';
import HomeHeader from '../navbar/homeHeader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const navigate = useNavigate();

 const productN =['Samsung A12','PocoF12', 'VivoV15'];
 const[productdet,setProductdet]=useState();

  // const disproduct=async()=>{
  //   try{
  //       axios.post('http://localhost:4000/product/products',{
  //         params:{
  //           productname:productN.map()
  //         }
  //       }).then(function (response) {
  //                   console.log(response);
  //                   if(response.data.data){
  //                     setProductdet(response.data.data);
  //                   }
  //                 })
  //                 .catch(function (error) {
  //                   console.log(error);
  //                 });
  //               }catch(err){
  //                 console.error(err);
  //               }
  //           }
  
  
      const getall =async()=>{
          try{
              await axios.post('http://localhost:4000/product/products',{
              }).then(function (response) {
                          console.log(response.data.data);
                          if(response.data.data){
                            setProductdet(response.data.data);
                            console.log(productdet);
                          }
                        })
                        .catch(function (error) {
                          console.log(error);
                        });
                      }catch(err){
                        console.error(err);
                      }
                  }
              
  
  useEffect(async()=>{
    await getall();
  },[]);
  
  const product = [{
    productname:"Samsung s22",
    productprice:"Rs.13000",
    productmanufacturer:"Samsung",
    description:"Galaxy A12 combines Octa-core processing power with up to 4GB of RAM for fast and efficient performance for the task at hand. Enjoy 64GB / 128GB of internal",
    stockavailable:"20",
    pid:"sam13",
    image:"https://i.ibb.co/Vxn4LJR/phone.jpg",
    category:"mobile"
  },
  {
    productname:"Samsung M15",
    productprice:"Rs.12000",
    productmanufacturer:"Samsung",
    description:"Galaxy A12 combines Octa-core processing power with up to 4GB of RAM for fast and efficient performance for the task at hand. Enjoy 64GB / 128GB of internal",
    stockavailable:"12",
    pid:"sam14",
    image:"https://i.ibb.co/Vxn4LJR/phone.jpg",
    category:"mobile"
  },
  {
    productname:"Vivo",
    productprice:"Rs.12000",
    productmanufacturer:"Samsung",
    description:"Galaxy A12 combines Octa-core processing power with up to 4GB of RAM for fast and efficient performance for the task at hand. Enjoy 64GB / 128GB of internal",
    stockavailable:"12",
    pid:"sam14",
    image:"https://i.ibb.co/Vxn4LJR/phone.jpg",
    category:"mobile"
  },
  {
    productname:"oppo",
    productprice:"Rs.12000",
    productmanufacturer:"Samsung",
    description:"Galaxy A12 combines Octa-core processing power with up to 4GB of RAM for fast and efficient performance for the task at hand. Enjoy 64GB / 128GB of internal",
    stockavailable:"12",
    pid:"sam14",
    image:"https://i.ibb.co/Vxn4LJR/phone.jpg",
    category:"mobile"
  }
]
  return (
    <>
      <HomeHeader/>
      <div className='hm-mainDiv'>   
        <div style={{display:"flex",margin:"2%"}}>
          {
          productdet && productdet.map(()=>{
            return(
            <ProductCard 
              details={productdet}         
            />
            )            
          })}          
        </div>
        <div>
          <button onClick={()=>navigate("/product")}>
            Show more Products
          </button>
        </div>
        <div>footer</div>
      </div>
    </>
  )
}
