import React from "react";
import { useParams } from "react-router";

// components
import ActivityCard from "../Common/ActivityCard/ActivityCard";
import SubtopicCard from "../Common/SubtopicCard/SubtopicCard";

// assets
import data from "../../assets/data/thematics.json";
import imgBackground from "../../assets/img/main/background-A.jpg";

const Subtopic = () => {

    const params = useParams();
    const thematics = data;

    return(

        <div className="flex h-full bg-gray-50 py-20" style={{backgroundImage: `url(${imgBackground})`}}>
            {
                thematics.filter(item => item.slug === params.tema).map((item) => (

                    item.subtopics.filter(subtopic => subtopic.slug === params.subtema).map((subtopic) => (
    
                        <div key="subtopic.slug" className="flex flex-col space-y-10 p-6 w-full">
                            <h3 className="font-semibold text-5xl text-blue-900 uppercase">{item.title}</h3>
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