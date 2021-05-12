import * as React from 'react';
import whiteLogo from '../images/White_Logo.png';
import { Link } from "gatsby";

const Header = () => {
    return(
        <header className="flex justify-between fixed w-full md:flex-row">
            <div className="nav-logo">
                <Link to="/"><img className="p-4" src={whiteLogo} /></Link>
            </div>
            <div className="nav-cta justify-around md:flex">
                <Link to="quote" className="blue-btn white hidden">Request a Quote</Link>
                <a href="tel:+1972-329-4811" className="blue-btn">Call Now</a>
            </div>
        </header>
    )
}

export default Header;