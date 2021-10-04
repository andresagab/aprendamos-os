import React from "react";
import { useParams } from "react-router";

// assets
import data from "../../assets/data/thematics.json";
import ActivityCard from "../Common/ActivityCard/ActivityCard";
import SubtopicCard from "../Common/SubtopicCard/SubtopicCard";

const Subtopic = () => {

    const params = useParams();
    const thematics = data;

    return(

        <div className="flex h-auto bg-gray-50 py-20">
            {
                thematics.filter(item => item.slug === params.tema).map((item) => (

                    item.subtopics.filter(subtopic => subtopic.slug === params.subtema).map((subtopic) => (
    
                        <div key="subtopic.slug" className="flex flex-col space-y-10 p-6 w-full">
                            <h3 className="font-semibold text-5xl text-blue-500 uppercase">{item.title}</h3>
                            <SubtopicCard subtopic={subtopic}/>
                            <ActivityCard activity={subtopic.activity}/>
                        </div>
    
                    ))

                ))
            }
        </div>

    )

}

export default Subtopic;