import React from "react";
import {AiFillFacebook, AiOutlineTwitter, AiFillInstagram}  from "react-icons/ai"
import {FaPinterest} from "react-icons/fa"
import "./footer.css"

const Footer = () =>{
    return(
        <div className="footer">

            <div>
                <h1>Foodish</h1>
                <p>Continue Foodish 2023 all rights reserved</p>
                <h1>Follow Us On</h1>

                <br/> <br/>
                <FaPinterest/>
                <AiFillInstagram/>
                <AiOutlineTwitter/>
                <AiFillFacebook/>
            </div>
            
            <div>
                <h1>Menu</h1>
                <p>Home</p>
                <p>Offers</p>
                <p>Service</p>
                <p>About Us</p>

            </div>

            <div>
                <h1>Information</h1>
                <p>Menu</p>
                <p>Quality</p>
                <p>Make a Choice</p>
                <p>Salad with Vegetable</p>
                <p>Fast Delivery</p>
                <p>Subscribe</p>

            </div>

            <div>
               <h1>Contact</h1>
                <p>+123 456 789</p>
                <p>Explore</p>
                <p>info@Foodish.Com</p>
                <p>1245, New York, USA</p>
            </div>

        </div>
    )
}
export default Footer;