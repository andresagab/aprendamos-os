import React from "react";

//const Creators = ({title, description, creators}) =>
const Creator = ({avatar, name, role, contact}) =>
{
    return (

        <div className="flex flex-col items-center justify-center">
            <img src={ avatar } className="w-20 h-20 bg-gray-300" alt=""/>
            <h3 className="font-semibold text-md pt-4">{ name }</h3>
            <div className="flex flex-col items-center space-y-0">
                <span className="font-normal text-xs">{ role }</span>
                <span className="font-normal text-xs">{ contact }</span>
            </div>
        </div>

    );
}

export default Creator;