import React from "react";
import './Navbar.css'


const Navbar = () =>{
    return(
        <div>

            <nav className="navbar">
                <ul className="nav">
                    <li>Foodle</li>
                    <li>Home</li>
                    <li>Offer</li>
                    <li>Service</li>
                    <li>Menu</li>
                    <li>About Us</li>
                   <span className="login">Login</span> 
                    <button>SignUp</button>


                </ul>
            </nav>

        </div>
    )
}
export default Navbar;