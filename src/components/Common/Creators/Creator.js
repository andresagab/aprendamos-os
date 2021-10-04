import React from "react";

//const Creators = ({title, description, creators}) =>
const Creator = ({creator}) =>
{

    return (

        <div className="flex flex-col items-center justify-center">
            <img src={process.env.PUBLIC_URL + require('./../../../assets/img/everyone/' + creator.avatar).default} className="w-20 h-20 object-cover rounded-full" alt="creator.name" />
            <h3 className="font-semibold text-md pt-4">{ creator.name }</h3>
            <div className="flex flex-col items-center space-y-0">
                <span className="font-normal text-xs">{ creator.role }</span>
                <span className="font-normal text-xs">{ creator.contact }</span>
            </div>
        </div>

    );
}

export default Creator;