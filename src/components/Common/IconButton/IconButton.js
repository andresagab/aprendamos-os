import React from "react";

//const IconButton = ({icon, bgColor, hoverColor, textColor, title, onClick}) => {
const IconButton = ({className, icon, title, onClick}) => {

    //const className = "p-1 md:p-2 rounded-full " + bgColor + " hover:" + hoverColor + " transition duration-300 ease select-none " + textColor + " material-icons w-min"

    return <button onClick={onClick} className={className} type="button" title={title}>{icon}</button>

}

export default IconButton;