import React from 'react'
import "./home.css";
import ProductCard from './card';
import HomeHeader from '../navbar/homeHeader';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

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
          {product.map((productDetails)=>{
            return(
            <ProductCard 
              details={productDetails}         
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
