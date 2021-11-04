import React from "react";
import Swal from "sweetalert2";
import IconButton from "../IconButton/IconButton";

// components
import NavButton from "./../NavButton/NavButton"

const NavSubtopics = ({subtopics}) => {

    const showAlert = ({}) => 
    {
        
        Swal.fire({
            icon: 'info',
            title: 'Ayuda de Temas',
            text: 'Recuerda que el panel superior contiene los temas principales, mientras que el panel derecho contiene los subtemas del tema que seleccionaste.'
        });

    }

    return (

        <div className="flex flex-col space-y-2 mb-4 rounded-lg  bg-white items-center justify-center p-4 shadow-md">
            <h3 className="font-normal lg:text-xl text-green-900">Temas:</h3>
            {
                subtopics.map((item) => (
                    <NavButton key={item.route} to={item.route} title={item.title} color="green-500" hoverColor="green-700" textColor="green-50"/>
                ))
            }
            <IconButton icon="help" title="Ver ayuda" bgColor="bg-yellow-600" hoverColor="bg-yellow-800" textColor="text-white" onClick={showAlert}/>
        </div>

    )

} 

export default NavSubtopics;