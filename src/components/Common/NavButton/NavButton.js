import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({to, exact = false, title, color = "yellow-600", hoverColor = "yellow-700", textColor = "yellow-50"}) => {

    const className="px-2 md:px-4 lg:px-8 py-1 rounded-md font-normal md:font-semibold text-xs lg:text-lg 2xl:text-xl uppercase bg-" + color + " text-" + textColor + " hover:bg-" + hoverColor + " hover:shadow focus:shadow hover:transform hover:scale-110 transition duration-400 ease select-none"
    const activeClassName="transform scale-105 bg-" + hoverColor + " rounded-md";

    if (exact) {

        return <NavLink exact to={to} className={className} activeClassName={activeClassName}>{title}</NavLink>
        
    } else {

        return <NavLink exact={exact} to={to} className={className} activeClassName={activeClassName}>{title}</NavLink>

    }

}

export default NavButton;