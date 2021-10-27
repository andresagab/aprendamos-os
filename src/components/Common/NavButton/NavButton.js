import React from "react";

const NavButton = ({title, color = "yellow-600", hoverColor = "yellow-700", textColor = "yellow-50"}) => {

    const className="px-3 py-1 rounded-full font-semibold text-sm bg-" + color + " text-" + textColor + " hover:bg-" + hoverColor + " hover:shadow focus:shadow transition duration-300 ease select-none"

    return (

        <button className={className}>{title}</button>

    )

}

export default NavButton;