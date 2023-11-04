import React from "react";
import './food.css';

const FoodCard = ({image, title, rating, price, button}) => {

    

    return (
        <div className="prodList">
    <div className="prodss">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{rating}</p>
            <h2>{price}     <button>{button}</button></h2>

        </div>
        </div>
    
    )

}
export default FoodCard;