import React from "react";
import Swal from "sweetalert2";
import IconButton from "../IconButton/IconButton";

// assets
import img from "./../../../assets/img/main/user_back.png"

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

        <div className="relative flex flex-col space-y-2 mb-4 rounded-lg  bg-white items-center justify-start p-4 shadow-md">
            <img className="absolute bottom-0 object-cover object-center w-max rounded-md" src={img} alt="" />
            <h3 className="font-semibold lg:text-xl text-purple-800 uppercase">Temas:</h3>
            {
                subtopics.map((item) => (
                    <NavButton key={item.route} to={item.route} title={item.title} color="green-500" hoverColor="green-700" textColor="green-50"/>
                ))
            }
            <IconButton icon="help" title="Ver ayuda" className="material-icons w-min p-0 text-yellow-600 text-3xl hover:text-yellow-800 hover:-rotate-45 transform transition duration-300 ease select-none 2xl:text-4xl" onClick={showAlert}/>
        </div>

    )

} 

export default NavSubtopics;