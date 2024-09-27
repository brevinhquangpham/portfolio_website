import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSelector from './NavBarSelector'

function NavBarElement({ linkTo, text }) {
    return (
        <div className="relative inline-block overflow-visible">
            <Link
                to={linkTo}
                className="animate__tada block relative text-headers z-10 hover:text-blue-500 font-cram text-2xl"
            >
                {text}
            </Link>
        </div>
    );
}

function NavBar() {
    return (
        <nav>
            <ul className="flex space-x-8 pt-4 justify-end pr-16">
                <NavBarElement linkTo={"/"} text={"Home"} />
                <NavBarElement linkTo={"/about"} text={"About"} />
                <NavBarElement linkTo={"/resume"} text={"Resume"} />
            </ul>
        </nav>
    );
}

export default NavBar;
