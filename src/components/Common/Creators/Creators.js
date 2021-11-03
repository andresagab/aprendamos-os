import React from "react";

// components
import Creator from "./Creator";

//const Creators = () =>
const Creators = ({title, description, creatorsData}) =>
{
    return (

        <div className="m-auto flex flex-col w-full h-full rounded-md shadow bg-white p-4 space-y-4">
            <h3 className="font-semibold text-2xl text-center">{title}</h3>
            <div className="flex-grow flex flex-col m-auto items-center justify-center space-y-8">
                {
                    creatorsData.map((item, index) => (
                        <Creator key={index} creator={item}/>
                    ))
                }
            </div>
        </div>

    );
}

export default Creators;