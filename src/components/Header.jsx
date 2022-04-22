import React from "react";
import '../styles/upper-block.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                BOICH
            </div>
            <div>
                <button className="contact-btn">Contact</button>
                <button className="menu-btn">
                    <div className="line"> </div>
                </button>
            </div>

        </div>
    );
}
export default Header;