import React from "react";

// components
import Creator from "./Creator";

//const Creators = () =>
const Creators = ({title, description, creatorsData}) =>
{
    return (

        <div className="m-auto flex flex-col w-3/4 rounded-md shadow-lg bg-white p-6 space-y-6">
            <h3 className="font-semibold text-3xl text-center">{title}</h3>
            <p className="font-normal text-sm text-center">{description}</p>
            <div className="flex flex-row m-auto items-center space-x-8">
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