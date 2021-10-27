import React from "react";
import { NavLink } from "react-router-dom";

// components
import NavButton from "./../NavButton/NavButton"

const NavSubtopics = ({subtopics}) => {

    return (

        <div className="flex flex-row bg-green-100 items-center justify-center space-x-4 p-4 shadow">
            {
                subtopics.map((item) => (
                    <NavLink exact to={item.route}>
                        <NavButton title={item.title} color="green-500" hoverColor="green-700" textColor="green-50"/>
                    </NavLink>
                ))
            }
        </div>

    )

} 

export default NavSubtopics;