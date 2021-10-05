import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({route}) => {

    return(
        
        <Link to={route} className="w-28 py-1 rounded-full bg-yellow-600 text-white text-center hover:bg-yellow-800 transition duration-300 ease select-none">Regresar</Link>

    )

}

export default BackButton;