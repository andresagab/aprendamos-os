import React from "react";

const ResourceLoader = ({resource}) => {

    if (resource.type === 1) {
        
        return(
            
            <img src={process.env.PUBLIC_URL + require('./../../../assets/img/material/' + resource.resource_path).default} className="w-max h-1/2 object-cover rounded-md" alt={resource.name} />
    
        )

    } 
    else if (resource.type === 2) {

        return (

            <iframe className="w-full h-96" loading="lazy" src={resource.resource_path}></iframe>

        )

    }
    else {
        return <h3 className="font-normal text-md italic text-red-600">No hay recurso disponible</h3>;
    }


}

export default ResourceLoader;