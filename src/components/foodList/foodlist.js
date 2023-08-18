import React from "react";
import FoodCard from "../food/food";
import burgerList from "../images/burgerList.png";
import chickenPizza from "../images/chickenPizza.png";
import chickenFry from "../images/chickenFry.png";
import grill from "../images/grill.png";
import taco from "../images/taco.png";
import noodles from "../images/noodles.png";
import './foodlist.css';


const FoodList = () => {
  const products = [
    {
      image: burgerList,
      title: 'Chicken Burger',
      price: '$3.50',
      ratings: (160),
      button: 'Buy Now'
     
    },
    {
      image: chickenPizza,
      title: 'Chicken Pizza',
      price: '$4.20',
      ratings: (142),
      button: 'Buy Now'

      
    },
    {
        image: chickenFry,
        ratings: (123),
        title: 'Chicken Pizza',
        price: '$5.00',
        button: 'Buy Now'

        
      },
      {
        image: grill,
        ratings: '(112)',
        title: 'Grill Sandwich',
        price: '$4.80',
        button: 'Buy Now'

        
        
      },
      {
        image: taco,
        ratings: '(152)',
        title: 'Taco Traifi',
        price: '$3.63 ' , 
        button: 'Buy Now'

        
        
      }, {
        image: noodles,
        ratings: "(163)",
        title: "Nooddle's Ramen",
        price: '$6.50',
        button: 'Buy Now'

        
        
      },
  ];

  return (

    <div className="cont">

      <div className="reg">
      <h1>Our <span className="regular">Regular</span>  Menu</h1> 
    <p>These are our Regular Menus. You can order anything you like.</p>
      </div>
            

    <button>See All</button>           



    <div className="product-list">
      {products.map((product, index) => (
        <FoodCard
          key={index}
          title={product.title}
          price={product.price}
          ratings={product.ratings}
          image={product.image}
          button={product.button}
        />
      ))}

    </div>
    <div>
        
    </div>


        </div>
    )
}
export default FoodList;