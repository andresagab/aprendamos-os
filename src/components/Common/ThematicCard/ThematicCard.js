import React from "react";

const ThematicCard = ({thematic}) => {
    return (

        <div className="flex flex-col w-1/3 rounded-md shadow-lg hover:shadow-2xl transition duration-500 ease select-none bg-white">
            <img src={thematic.img} className="w-full h-40 bg-gray-300" alt=""/>
            <div className="flex flex-col p-4 space-y-6">
                <h3 className="font-semibold text-left tex-md">{thematic.title}</h3>
                <p className="font-normal text-sm text-left">{thematic.description}</p>
                <a href={thematic.route} className="py-1 w-20 rounded-full self-end bg-green-600 font-normal text-sm text-white hover:bg-green-800 transition duration-300 ease select-none">
                    <span className="object-none object-center">Abrir</span>
                </a>
            </div>
        </div>

    );
}

export default ThematicCard;