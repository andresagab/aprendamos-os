import React from "react";

const ResourceActivity = ({activity}) => {


    return <iframe className="w-full" loading="lazy" src={activity.url} height="720"></iframe>

}

export default ResourceActivity;