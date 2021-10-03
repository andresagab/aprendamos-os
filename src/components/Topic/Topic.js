import React, { useState } from "react";
import { useParams } from "react-router";

// assets
import data from "../../assets/data/thematics.json";

// components
import ThematicCard from "../Common/ThematicCard/ThematicCard";

const Thematic = () => {

    const params = useParams();
    const thematics = data;

    return (

        <div className="flex h-screen bg-gray-50">
            {
                thematics.filter(item => item.slug === params.tema).map((item) => (

                    <div key={item.slug} className="m-auto px-10 w-full flex flex-row items-center space-x-16 text-center">

                        <h3 className="flex-shrink w-min font-semibold text-5xl text-blue-500 text-left uppercase">{item.title}</h3>
                        <div className="flex flex-row items-start justify-end space-x-6">
                            {
                                item.subtopics.map((subtopic) => (
                                    <ThematicCard thematic={subtopic}/>
                                    ))
                            }
                        </div>
                    </div>
                    
                ))
            }

        </div>

    );

}

export default Thematic;