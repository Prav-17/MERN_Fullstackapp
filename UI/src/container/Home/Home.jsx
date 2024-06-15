import React from 'react'
import "./home.css";
import ProductCard from './card';
import HomeHeader from '../navbar/homeHeader';

export default function Home() {
  const product = {
    name:"Samsung A12 Pro",
    price:"Rs.15000",
    manufacture:"Samsung",
    description:"Galaxy A12 combines Octa-core processing power with up to 4GB of RAM for fast and efficient performance for the task at hand. Enjoy 64GB / 128GB of internal",
    qty:"20",
    pid:"sam13",
    imgsrc:"https://i.ibb.co/YknxpLx/pngwing-com-56.png"
  }
  return (
    <>
      <HomeHeader/>
      <div className='hm-mainDiv'>   
        <div>
          <ProductCard 
            details={product}         
          />
        </div>
        <div>footer</div>
      </div>
    </>
  )
}
