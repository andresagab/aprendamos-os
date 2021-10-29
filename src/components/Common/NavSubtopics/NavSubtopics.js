import React from "react";

// components
import NavButton from "./../NavButton/NavButton"

const NavSubtopics = ({subtopics}) => {

    return (

        <div className="flex flex-row bg-green-100 items-center justify-center space-x-4 p-4 shadow">
            <h3 className="flex-grow font-normal lg:text-xl text-green-900">Temas:</h3>
            {
                subtopics.map((item) => (
                    <NavButton key={item.route} to={item.route} title={item.title} color="green-500" hoverColor="green-700" textColor="green-50"/>
                ))
            }
        </div>

    )

} 

export default NavSubtopics;