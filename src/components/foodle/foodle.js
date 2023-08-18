import React from "react";
import burger from '../images/burger.png';
import play from '../images/play.png';
import person1 from '../images/person1.jpeg';
import burger2 from '../images/buger2.png';
import pizza from '../images/pizza.png';
import fries from '../images/fries.png';
import dotted from '../images/dotted.png';
import "./foodle.css"


const Foodle = () => {
    return(
        <div>

          <div className="container">

            <div>

                <div className="dottedFood">
                <h1>All Fast Food is Available at Foodle</h1>
                <img className="dotted" src={dotted} alt="dotted arrow"/>

                </div>

                <div className="fastFood">
                <img className="person" src={person1} alt="a person"/> 
               <p>We Are Just A Click Away When You Crave For Delicious Fast Food</p>
                </div>


               

                <button>Buy Now</button>
                {/* <img src={play} alt="play icon"/> */}
                 <span>  How to order</span>

            </div>

            <div className="contImage">
                <img src={burger} alt="burger"/>
            </div>
            </div>


            <div className="delivery">
                <div>
                <h2>Fast Delivery</h2> 
                <p>The food will be delivered within 1-2 hours of your ordering</p>
                </div>

              <div>
                <h2>Fresh Food</h2>
                <p>Your food will be delivered 100% fresh to your home. We do not deliver stale food </p>
                </div>

                <div>
                <h2>Free Delivery</h2>
                <p>Your food delivery is absolutely free , no cost just order and enjoy</p>
                </div>
            </div>

            <div className="reg">
                <h1>Best <span className="regular">Delivered</span> Categories</h1>
                <p>Here are some of our best distributed categories. If you want you can order from here.</p>
            </div>



           <div className="foodle">
            <div>
                <img src={burger2} alt="burger"/> 
                <h2>Chicken Burger</h2>
                <p>Order Now</p>
            </div>

            <div>
                <img src={pizza} alt="pizza"/> 
                <h2>Chicken Pizza</h2>
                <p>Order Now</p>
            </div>

            <div>
                <img src={fries} alt="fries"/> 
                <h2>French Fries</h2>
                <p>Order Now</p>
            </div>
            </div>
        </div>
    )
}
export default Foodle;