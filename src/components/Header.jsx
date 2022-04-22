import React from "react";
import '../styles/upper-block.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">

            </div>
            <div>
                <button>Contact</button>
                <button>
                    <div className="line"> </div>
                    <div className="line"> </div>
                </button>
            </div>
        </div>
    );
}
export default Header;