import React from "react";
import { NavLink } from "react-router-dom";

//const NavButton = ({to, exact = false, title, color = "yellow-600", hoverColor = "yellow-700", textColor = "yellow-50"}) => {
function NavButton(props) {

    //const className="px-2 md:px-4 lg:px-8 py-1 rounded-md font-normal md:font-semibold text-xs lg:text-lg 2xl:text-xl uppercase bg-" + props.color + " text-" + props.textColor + " hover:bg-" + props.hoverColor + " hover:shadow focus:shadow hover:transform hover:scale-110 transition duration-400 ease select-none"
    const className="w-40 lg:w-40 p-1 px-2 rounded-md font-semibold text-center text-sm lg:text-md 2x:text-lg uppercase bg-green-500 text-white hover:shadow focus:shadow hover:transform hover:scale-110 transition duration-400 ease select-none"
    const activeClassName="transform scale-105 bg-green-700 rounded-md";

    if (props.exact) {

        return <NavLink exact to={props.to} className={className} activeClassName={activeClassName}>{props.title}</NavLink>
        
    } else {

        return <NavLink to={props.to} className={className} activeClassName={activeClassName}>{props.title}</NavLink>

    }

}

export default NavButton;