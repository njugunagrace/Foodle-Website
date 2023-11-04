import React from "react";
import './Navbar.css'


const Navbar = () =>{
    return(
        <div>

            <nav className="navbar">
                {/* <ul className="nav"> */}

                <a href="" className="food">Foodle</a>

                <span className="home">
                <a href="" >Home</a>
                <a href="" >Offer</a>
                <a href="" >Service</a>
                <a href="" >Menu</a>
                <a href="" >About us</a>
                </span>


                   {/* <span className="food"><li>Foodle</li></span>  */}
                    {/* <li>Home</li>
                    <li>Offer</li>
                    <li>Service</li>
                    <li>Menu</li>
                    <li>About Us</li> */}
               
                   <span className="login">Login</span> 
                    <button>SignUp</button>


                {/* </ul> */}
            </nav>

        </div>
    )
}
export default Navbar;