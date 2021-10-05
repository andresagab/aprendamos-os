import React from "react";

const ResourceActivity = ({activity}) => {

    if (activity.status) {
        
        return <iframe className="w-full" loading="lazy" src={activity.url} height="720"></iframe>

    } else {

        return <h3 className="font-normal text-md italic text-red-600">Aún no hay actividades disponibles</h3>;

    }


}

export default ResourceActivity;