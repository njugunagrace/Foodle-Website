import React from "react";

const FoodCard = ({image, title, rating, price, button}) => {

    

    return (
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{rating}</p>
            <h2>{price}     <button>{button}</button></h2>

        </div>
    )

}
export default FoodCard;