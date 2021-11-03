import React from "react";

// components
import NavButton from "./../NavButton/NavButton"

const NavSubtopics = ({subtopics}) => {

    return (

        <div className="flex flex-col space-y-2 mb-4 rounded-lg  bg-white items-center justify-center p-4 shadow-md">
            <h3 className="font-normal lg:text-xl text-green-900">Temas:</h3>
            {
                subtopics.map((item) => (
                    <NavButton key={item.route} to={item.route} title={item.title} color="green-500" hoverColor="green-700" textColor="green-50"/>
                ))
            }
        </div>

    )

} 

export default NavSubtopics;