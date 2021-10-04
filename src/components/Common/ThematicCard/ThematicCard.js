import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThematicCard = ({thematic}) => {

    return (

        <div className="flex flex-col w-1/3 rounded-md shadow-lg hover:shadow-2xl transition duration-500 ease select-none bg-white">
            <img src={process.env.PUBLIC_URL + require('./../../../assets/img/everyone/' + thematic.img).default} className="w-full h-auto bg-gray-300" alt=""/>
            <div className="flex flex-col p-4 space-y-6">
                <h3 className="font-semibold text-left tex-md">{thematic.title}</h3>
                <p className="font-normal text-sm text-left">{thematic.description}</p>
                <Link to={thematic.route} className="py-1 w-20 rounded-full self-end bg-green-600 font-normal text-sm text-white hover:bg-green-800 transition duration-300 ease select-none" hidden={!thematic.status}>
                    <span className="object-none object-center">Abrir</span>
                </Link>
            </div>
        </div>

    );
}

export default ThematicCard;