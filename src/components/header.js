import * as React from 'react';
import whiteLogo from '../images/White_Logo.png';
import { Link } from "gatsby";

const Header = () => {
    return(
        <header className="flex flex-col justify-between fixed w-full md:flex-row">
            <div className="nav-logo">
                <Link to="/"><img className="p-4" src={whiteLogo} /></Link>
            </div>
            <div className="nav-cta justify-around hidden md:flex">
                <Link href="/quote" className="blue-btn white">Request a Quote</Link>
                <a href="tel:+1972-329-4811" className="blue-btn">Call Now</a>
            </div>
        </header>
    )
}

export default Header;